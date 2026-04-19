# MERN Externship Project

A full-stack project management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to manage projects and tasks with a Kanban-style interface.

## Features

- User authentication (signup/login)
- Create and manage projects
- Add, edit, and organize tasks within projects
- Drag-and-drop Kanban board for task management
- Responsive design with modern UI

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- React Beautiful DnD for drag-and-drop functionality
- Tailwind CSS for styling
- Font Awesome for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- CORS for cross-origin requests

## Project Structure

```
mern-externship/
├── back1/          # Authentication backend (port 5000)
│   ├── index.js
│   └── package.json
├── back2/          # Main application backend (port 9000)
│   ├── server.js
│   ├── models/
│   │   ├── project.js
│   │   └── task.js
│   ├── routes/
│   │   ├── project.js
│   │   └── task.js
│   └── package.json
└── front1/         # React frontend (port 3000)
    ├── public/
    ├── src/
    │   ├── components/
    │   └── ...
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mern-externship
   ```

2. **Install dependencies for each service**

   **Frontend:**
   ```bash
   cd front1
   npm install
   cd ..
   ```

   **Authentication Backend (back1):**
   ```bash
   cd back1
   npm install
   cd ..
   ```

   **Main Backend (back2):**
   ```bash
   cd back2
   npm install
   cd ..
   ```

3. **Environment Variables**

   Create `.env` files in `back1` and `back2` directories:

   **back1/.env:**
   ```
   MONGO_URI=mongodb+srv://login:login@cluster0.qrodzzq.mongodb.net/userdb
   PORT=5000
   ```

   **back2/.env:**
   ```
   MONGO_URI=mongodb+srv://projectmanage:projectmanage@cluster0.q5i7ugy.mongodb.net/projectmanage
   PORT=9000
   ```

4. **Start the services**

   Open three terminal windows:

   **Frontend:**
   ```bash
   cd front1
   npm start
   ```

   **Authentication Backend:**
   ```bash
   cd back1
   npm run dev
   ```

   **Main Backend:**
   ```bash
   cd back2
   npm start
   ```

5. **Access the application**

   Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### Authentication (back1 - port 5000)
- `POST /signup` - User registration
- `POST /login` - User login

### Projects (back2 - port 9000)
- `GET /project` - Get all projects
- `POST /project` - Create a new project
- `PUT /project/:id` - Update a project
- `DELETE /project/:id` - Delete a project

### Tasks (back2 - port 9000)
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Usage

1. Sign up for a new account or log in with existing credentials
2. Create a new project
3. Add tasks to your projects
4. Use the Kanban board to drag and drop tasks between different stages
5. Edit or delete projects and tasks as needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.