# College API - Node.js

A RESTful API built with Node.js for managing college information with MongoDB integration.

## 📁 Project Structure

```
college-api-nodejs/
├── assets/              # Static assets (images, files, etc.)
├── models/              # MongoDB models
│   └── collegeModel.js  # College schema definition
├── routes/              # API route handlers
│   └── collegeRoute.js  # College CRUD endpoints
├── node_modules/        # Dependencies
├── .gitattributes       # Git attributes configuration
├── .gitignore          # Git ignore rules
├── config.js           # Configuration settings
├── index.js            # Main application entry point
├── package-lock.json   # Locked dependencies
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd college-api-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/college-db
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

### College Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/college` | Get all colleges |
| GET | `/api/college/:id` | Get college by ID |
| POST | `/api/college` | Create new college(s) |
| PUT | `/api/college/:id` | Update college by ID |
| DELETE | `/api/college/:id` | Delete college by ID |

### Example Requests

**Create a College**
```bash
POST /api/college
Content-Type: application/json

{
  "colleges": ["Indian Institute of Technology Delhi"]
}
```

**Get All Colleges**
```bash
GET /api/college
```

**Update a College**
```bash
PUT /api/college/:id
Content-Type: application/json

{
  "oldCollegeName": "IIT Delhi",
  "newCollegeName": "Indian Institute of Technology Delhi"
}
```

**Delete a College**
```bash
DELETE /api/college/:id
```

## 🗃️ Database Schema

### College Model

```javascript
{
  collegeName: String (required, unique),
  collegeCode: String (auto-generated),
  createdAt: Date (default: Date.now),
  updatedAt: Date
}
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## 📝 Scripts

```json
{
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "jest"
}
```

## 🔧 Configuration

The `config.js` file contains application configuration settings:

- Database connection settings
- Server port configuration
- Environment-specific settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Your Name - [GitHub Profile](https://github.com/the-bipu)

## 🐛 Known Issues

- Ensure MongoDB is running before starting the server
- Check environment variables are properly configured

## 📞 Support

For support, email bipanshukm@gmail.com or open an issue in the repository.