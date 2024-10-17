


Stock Dashboard Application

A comprehensive stock dashboard application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to track stock prices, manage watchlists, view price predictions, post comments, and more. The app integrates third-party APIs for stock data and uses Firebase for user authentication.

Table of Contents

	1.	Overview
	2.	Key Features
	3.	Technologies Used
	4.	Project Setup
	5.	Backend Configuration
	6.	Frontend Configuration
	7.	Database Seeding
	8.	Running the Application
	9.	Folder Structure
	10.	Environment Variables
	11.	Third-Party Integrations
	12.	Deployment
	13.	Contributing
	14.	License

Overview

The Stock Dashboard is a full-stack application designed to provide users with an intuitive interface to monitor stock performance, manage personal watchlists, predict stock prices, and engage in discussions with other users via comments. This app integrates with the Alpha Vantage API to fetch real-time stock data and uses Firebase for secure user authentication.

Key Features

	•	User Authentication: Secure sign-up, login, and logout using Firebase.
	•	Stock Tracking: Display real-time stock data via Alpha Vantage API.
	•	Watchlists: Personalized stock watchlists for individual users.
	•	Price Predictions: Users can add stock price predictions and track their accuracy.
	•	Comments System: Engage with the community by commenting on stock-related posts.
	•	Responsive Design: Built to work seamlessly across desktop and mobile devices.
	•	Admin Dashboard: Manage users, posts, and stock-related data (admin privileges only).

Technologies Used

Frontend

	•	React: Framework for building the user interface.
	•	JavaScript: Primary language for all client-side logic.
	•	CSS: Custom styles for UI components.

Backend

	•	Node.js: JavaScript runtime for server-side logic.
	•	Express.js: Framework for handling HTTP requests and routes.
	•	MongoDB: NoSQL database for persisting application data.
	•	Mongoose: ODM for MongoDB, used to define schemas and models.

Authentication

	•	Firebase: Handles user authentication (sign-up, login, logout, and account management).

API Integrations

	•	Alpha Vantage: Fetches real-time stock prices and other financial data.

Deployment

	•	Frontend: Deployed on Netlify.
	•	Backend: Hosted on Render.

Project Setup

To get the project up and running on your local machine, follow the steps below.

Prerequisites

Ensure you have the following installed:

	•	Node.js (v14 or higher)
	•	MongoDB (local or MongoDB Atlas)
	•	Firebase account (for authentication)
	•	Alpha Vantage API key

Cloning the Repository

First, clone the project repository to your local machine:

git clone https://github.com/your-username/stock-dashboard.git
cd stock-dashboard

Backend Configuration

	1.	Install Backend Dependencies:
Navigate to the backend directory and install all required Node.js dependencies:

cd backend
npm install


	2.	Set Up Environment Variables:
Create a .env file in the backend directory and add your environment variables. Refer to the Environment Variables section for the complete list of required variables.
Example .env:

MONGO_URI=mongodb://localhost:27017/stock-dashboard
FIREBASE_API_KEY=your_firebase_api_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
PORT=5000


	3.	Run the Backend:
After setting up environment variables, start the server using:

npm start

The backend server should now be running at http://localhost:5000.

Frontend Configuration

	1.	Install Frontend Dependencies:
Navigate to the frontend directory and install all dependencies:

cd ../frontend
npm install


	2.	Set Up Environment Variables:
Create a .env file in the frontend directory and add your Firebase and Alpha Vantage API credentials.
Example .env:

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key


	3.	Run the Frontend:
Start the React development server:

npm start

The frontend should now be accessible at http://localhost:3000.

Database Seeding

The app includes seeding scripts to populate your MongoDB with initial data like users, posts, watchlists, and stocks.

	1.	Ensure MongoDB is Running:
Make sure MongoDB is running either locally or on Atlas.
	2.	Run Seeder Scripts:
In the backend directory, run the following command to seed the database:

node seeders/index.js

This will populate the database with default data for development.

Running the Application

	1.	Start the Backend:
Run the backend server:

npm start


	2.	Start the Frontend:
In a new terminal, start the frontend:

npm start


	3.	Access the Application:
The frontend will be available at http://localhost:3000, and the backend will run at http://localhost:5000.

Folder Structure

/stock-dashboard
├── backend
│   ├── controllers    # Handles API requests and logic
│   ├── models         # Mongoose schemas and models (User, Stock, Post, etc.)
│   ├── routes         # Express routes for different endpoints
│   ├── seeders        # Database seeding scripts
│   └── server.js      # Main server entry point
├── frontend
│   ├── src
│   │   ├── components  # Reusable React components
│   │   ├── pages       # Page components (e.g., Dashboard, Login, Signup)
│   │   ├── services    # API calls to backend or third-party services
│   │   ├── App.js      # Main React app entry point
│
