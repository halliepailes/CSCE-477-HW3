# CSCE 477 Homework 3: Simple Login Form

## Overview
This project implements a basic login form similar to the OWASP Juice Shop login page. It uses HTML, JavaScript, and Node.js (Express) to ensure that user input is validated both on the client-side and server-side, preventing empty or invalid fields and enforcing password length.

## Features
- Email and password input fields
- **Client-side validation** using JavaScript:
  - Prevents empty fields
  - Ensures email contains "@"
  - Ensures password is at least 8 characters long
- **Server-side validation** using Express.js:
  - Checks for empty fields
  - Validates email format and password length
  - Serves a success page upon valid submission

## Technologies Used
- HTML, CSS, JavaScript
- Node.js with Express.js

## How to Run
1. Clone the repository:  
  git clone https://github.com/halliepailes/CSCE-477-HW3
2. Navigate into the project directory:
  cd CSCE-477-HW3
3. Install dependencies:
  npm install
  (This will install Express as specified in package.json.)
4. Start the server:
  node server.js
5. Open a browser and go to http://localhost:3000 to access the login form.
