EasyGenerator Frontend
Welcome to the EasyGenerator frontend repository! This project is a React application built with TypeScript and Material-UI (MUI) that provides users with an intuitive interface to interact with the EasyGenerator services.
🚀 Live Demo
Check out the live demo: EasyGenerator Frontend
🌟 Features

User Authentication

Sign Up with password strength validation
Sign In with credential validation
JWT token management


Dashboard

Display user details
Responsive AppBar with user info and logout
Engaging service cards with hover effects


Services

Weather Checker
EasyGeneratorGPT (content generation)


Routing

Protected routes
Authentication redirects


UI/UX

Modern Material-UI design
Responsive layout
Theme switching (dark/light mode)


Form Validation

Real-time validation
Password strength indicator


Accessibility Features
Additional Features

Back navigation
Logout functionality
Loading indicators and error handling



🛠 Getting Started
Prerequisites

Node.js (v14.x or higher)
npm or yarn

Installation

Clone the repository:
bashCopygit clone https://github.com/yourusername/easygenerator-frontend.git
cd easygenerator-frontend

Install dependencies:
bashCopynpm install
# or
yarn install

Set up environment variables:
Create a .env file in the root directory and add:
CopyREACT_APP_BACKEND_URL=https://easygenerator-my-backend.onrender.com

Start the development server:
bashCopynpm start
# or
yarn start

Open http://localhost:3000 in your browser.

📁 Project Structure
Copysrc/
├── components/
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   ├── Dashboard.tsx
│   ├── Weather.tsx
│   ├── EasyGeneratorGPT.tsx
│   └── ...
├── apiClient.ts
├── App.tsx
├── index.tsx
├── theme.ts
└── ...
📜 Available Scripts

npm start: Run the app in development mode
npm test: Launch the test runner
npm run build: Build the app for production
npm run eject: Eject from Create React App (use cautiously)

🔐 Environment Variables

REACT_APP_BACKEND_URL: Base URL of the backend API

🎨 UI/UX Enhancements

Professional and responsive design
Real-time form validation
User-friendly error messages and loading indicators
Theme switching capability
Improved accessibility features

🚀 Future Enhancements

Forgot Password functionality
User Profile Management
Notification system
Internationalization (i18n)
Enhanced security (reCAPTCHA, HTTP-only cookies)

📄 License
This project is licensed under the MIT License.