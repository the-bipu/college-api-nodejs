import express from 'express';
import { College } from '../models/collegeModel.js';

const router = express.Router();

// Route to create new user
router.post('/postdata', async (req, res) => {
    try {
        const mainData = await College.create(req.body);
        res.status(201).json(mainData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Utility function for generating college code
const generateCollegeCode = (name) => {
    return name
        .replace(/,\s*/g, '-')      // Replace comma followed by spaces with a dash
        .replace(/\.-/g, '-')       // Replace dot followed by dash with a dash
        .replace(/\s*-\s*/g, '-')   // Replace " - " with "-"
        .replace(/\s+/g, '-')       // Replace spaces with "-"
        .replace(/,/g, '-')         // Replace any remaining commas with dashes
        .replace(/\./g, '-')        // Replace any dots with dashes
        .replace(/--/g, '-')        // Replace double dashes with a single dash
        .toLowerCase();             // Convert to lowercase
};

// Route to create new college with generated college code
// router.post('/postcollege', async (req, res) => {
//     try {
//         const { collegeName } = req.body;

//         if (!collegeName) {
//             return res.status(400).json({ error: 'College name is required' });
//         }

//         const collegeCode = generateCollegeCode(collegeName);

//         const newCollege = await College.create({ collegeName, collegeCode });

//         res.status(201).json(newCollege);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// Route to create multiple colleges with generated college codes
router.post('/postcolleges', async (req, res) => {
    try {
        const { colleges } = req.body;

        if (!Array.isArray(colleges) || colleges.length === 0) {
            return res.status(400).json({ error: 'Colleges array is required' });
        }

        const collegeEntries = colleges.map(collegeName => {
            const collegeCode = generateCollegeCode(collegeName);
            return { collegeName, collegeCode };
        });

        const savedColleges = await College.insertMany(collegeEntries);

        res.status(201).json(savedColleges);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route to get all user data
router.get('/getdata', async (req, res) => {
    try {
        const mainData = await College.find();
        res.status(200).json(mainData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;