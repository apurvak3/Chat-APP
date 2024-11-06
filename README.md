ChatApp
A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for real-time communication.

Features
Real-time messaging using Socket.io.
User authentication using JWT.
One-on-one chat functionality.
MongoDB for storing user information and messages.
Responsive design with React.
Security features like password hashing and token-based authentication.
Tech Stack
Frontend: React, CSS/Tailwind (for styling)
Backend: Node.js, Express
Database: MongoDB
Real-time Communication: Socket.io
Authentication: JSON Web Tokens (JWT)
Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v14 or higher recommended)
MongoDB (local instance or MongoDB Atlas for cloud-based MongoDB)
Installation
Clone the repository

bash
Copy code
git clone https://github.com/your-username/ChatApp.git
cd ChatApp
Install dependencies

For backend:

bash
Copy code
cd server
npm install
For frontend:

bash
Copy code
cd ../client
npm install
Environment Variables
Create a .env file in the server directory and add the following environment variables:

env
Copy code
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
PORT=5000
Running the Application
Start the backend server

bash
Copy code
cd server
npm start
Start the frontend server

bash
Copy code
cd ../client
npm start
Open http://localhost:3000 to view the app in your browser.

Project Structure
php
Copy code
ChatApp/
├── client/            # React frontend
│   ├── public/
│   └── src/
├── server/            # Node.js backend
│   ├── config/        # Configuration files (e.g., database, JWT setup)
│   ├── controllers/   # Controllers for handling requests
│   ├── models/        # Mongoose models (User, Message)
│   ├── routes/        # API routes
│   └── server.js      # Entry point for the backend
└── README.md


Acknowledgements
MERN Stack Documentation
Socket.io Documentation
