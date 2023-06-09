# Habesha Music Player

A web-based music player application built using React.js, Node.js, Express.js, Firebase, MongoDB, and Tailwind CSS.

## Features
- Music playback controls (play, pause, skip, etc.)
- Search and filter functionality for songs and playlists
- Real-time updates with Firebase Realtime Database
- Responsive design using Tailwind CSS

## Technologies Used

- Front-end:
  - React.js: A JavaScript library for building user interfaces
  - Tailwind CSS: A utility-first CSS framework
  - Axios: A promise-based HTTP client for making API requests

- Back-end:
  - Node.js: A JavaScript runtime environment
  - Express.js: A web application framework for Node.js
  - MongoDB: A NoSQL database for storing application data
  - Mongoose: An object data modeling (ODM) library for MongoDB
  - Firebase: A comprehensive development platform that includes various services such as Authentication and Realtime Database

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- Firebase account and project set up

## Getting Started

1. Clone the repository:
git clone https://github.com/Elias1992gix/habesha-music-player.git


2. Install dependencies for both the client and server:
cd habesha-music-player
npm install
cd client
npm install


3. Set up environment variables:
- Rename the `.env.example` file to `.env` in both the root directory and the client directory.
- Update the environment variables in the `.env` file with your own configuration, including your Firebase credentials.

4. Start the development server:
cd .. (if you are in the client directory)
npm run dev

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Folder Structure

The project structure is organized as follows:

- `client`: Contains the React.js front-end code.
- `server`: Contains the Node.js and Express.js back-end code.
- `public`: Contains the public assets and HTML file for the React app.
- `src`: Contains the source code for the React app.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Mongoose](https://mongoosejs.com/)

