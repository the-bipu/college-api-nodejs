import express from 'express';
import { College } from '../models/collegeModel.js';

const router = express.Router();

const generateCollegeCode = (name) => {
    return name
        .replace(/,\s*/g, '-')
        .replace(/\.-/g, '-')
        .replace(/\s*-\s*/g, '-')
        .replace(/\s+/g, '-')
        .replace(/,/g, '-')
        .replace(/\./g, '-')
        .replace(/--/g, '-')
        .toLowerCase();
};

router.get('/', async (req, res) => {
    try {
        const colleges = await College.find().sort({ createdAt: -1 });
        res.status(200).json(colleges);
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({ error: 'Server error while fetching colleges' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const college = await College.findById(id);

        if (!college) {
            return res.status(404).json({ error: 'College not found' });
        }

        res.status(200).json(college);
    } catch (error) {
        console.error('Error fetching college:', error);
        
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid college ID format' });
        }
        
        res.status(500).json({ error: 'Server error while fetching college' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { colleges } = req.body;

        if (!colleges) {
            return res.status(400).json({ error: 'Colleges field is required' });
        }

        if (!Array.isArray(colleges)) {
            return res.status(400).json({ error: 'Colleges must be an array' });
        }

        if (colleges.length === 0) {
            return res.status(400).json({ error: 'Colleges array cannot be empty' });
        }

        const collegeEntries = colleges.map(collegeName => {
            const collegeCode = generateCollegeCode(collegeName);
            return { collegeName, collegeCode };
        });

        const savedColleges = await College.insertMany(collegeEntries);

        res.status(201).json(savedColleges);
    } catch (error) {
        console.error('Error creating colleges:', error);

        if (error.code === 11000) {
            return res.status(409).json({ 
                error: 'College already exists',
                details: error.keyValue 
            });
        }

        res.status(500).json({ error: 'Server error while creating colleges' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { collegeName, oldCollegeName, newCollegeName } = req.body;

        const updatedName = newCollegeName || collegeName;

        if (!updatedName) {
            return res.status(400).json({ 
                error: 'College name is required (use collegeName or newCollegeName)' 
            });
        }

        const collegeCode = generateCollegeCode(updatedName);

        const updatedCollege = await College.findByIdAndUpdate(
            id,
            { 
                collegeName: updatedName, 
                collegeCode,
                updatedAt: Date.now()
            },
            { new: true, runValidators: true }
        );

        if (!updatedCollege) {
            return res.status(404).json({ error: 'College not found' });
        }

        res.status(200).json(updatedCollege);
    } catch (error) {
        console.error('Error updating college:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid college ID format' });
        }

        if (error.code === 11000) {
            return res.status(409).json({ 
                error: 'College name already exists',
                details: error.keyValue 
            });
        }

        res.status(500).json({ error: 'Server error while updating college' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedCollege = await College.findByIdAndDelete(id);

        if (!deletedCollege) {
            return res.status(404).json({ error: 'College not found' });
        }

        res.status(200).json({ 
            message: 'College deleted successfully',
            deletedCollege 
        });
    } catch (error) {
        console.error('Error deleting college:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid college ID format' });
        }

        res.status(500).json({ error: 'Server error while deleting college' });
    }
});

router.delete('/code/:collegeCode', async (req, res) => {
    try {
        const { collegeCode } = req.params;
        
        const deletedCollege = await College.findOneAndDelete({ collegeCode });

        if (!deletedCollege) {
            return res.status(404).json({ error: 'College not found' });
        }

        res.status(200).json({ 
            message: 'College deleted successfully',
            deletedCollege 
        });
    } catch (error) {
        console.error('Error deleting college:', error);
        res.status(500).json({ error: 'Server error while deleting college' });
    }
});

export default router;