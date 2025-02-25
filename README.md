# Second Brain

Second Brain is a note-taking and knowledge management web application built with the MERN stack.

## Tech Stack

- **MongoDB** - NoSQL database for storing data
- **Express.js** - Backend framework for handling API requests
- **React.js** - Frontend library for building UI
- **Node.js** - JavaScript runtime for server-side logic

## Installation & Setup

Follow these steps to set up the project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/Shrajalkaurav/Second-Brain.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd Brainly
   ```
3. Install backend dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file inside `Brainly` and add the following:
   ```sh
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
5. Start the backend server:
   ```sh
   npm run dev
   ```

### Start Frontend (In Another Terminal)

6. Open a new terminal, navigate to the frontend directory:
   ```sh
   cd Brainly-FE
   ```
7. Install frontend dependencies:
   ```sh
   npm install
   ```
8. Start the frontend server:
   ```sh
   npm run dev
   ```

The backend will run on port `3000`, and the frontend will be available at `http://localhost:5173/`.

## Features

- Secure note storage
- User authentication
- Simple and intuitive UI

## Contributing

Feel free to fork this repository, make your changes, and submit a pull request.
