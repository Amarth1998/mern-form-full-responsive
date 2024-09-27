Project Setup
Frontend (React)
Installations:
Create a new Vite project:
command-npm create vite@latest

Install dependencies:
command-npm install

Install the following additional dependencies:
command-npm i react-router-dom
command-npm i react-toastify

To Run React Project:
Start the development server:
command- npm run dev


Backend (Node, MongoDB, Express)
Installations:
Initialize a new Node.js project:
command-npm init -y

Create a server.js file.
Install the following dependencies:
command-npm i bcrypt
command-npm i cors
command-npm i dotenv
command-npm i express
command-npm i jsonwebtoken
command-npm i mongoose

To Run Local Server:
Start the server:
command-node server.js


Setup .env File:
Create a .env file with the following contents:
Make database in mongo atlas and and connect to atlas
MONGODB_URI=mongodb+srv://<xyz>:<password>@atlascluster.qxrttr7.mongodb.net/vistaarwebx
JWT_SECRET=...........<give salt>
