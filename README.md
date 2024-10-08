# EasyGenerator Frontend

Welcome to the EasyGenerator frontend repository! This project is a **React application** built with **TypeScript** and **Material-UI (MUI)**. It provides users with an intuitive interface to interact with the EasyGenerator services.

### 🚀 Live Demo
Check out the live demo: https://easygenerator-my-app.vercel.app/

## 🌟 Features

### Dark / light theme
- dark and light theme

### User Authentication
- Sign Up with password strength validation
- Sign In with credential validation
- JWT token management

### Dashboard
- Display user details
- Responsive AppBar with user info and logout
- Engaging service cards with hover effects

### Services
- Weather Checker
- EasyGeneratorGPT (content generation)

### Routing
- Protected routes
- Authentication redirects

### UI/UX
- Modern Material-UI design
- Responsive layout
- Theme switching (dark/light mode)

### Form Validation
- Real-time validation
- Password strength indicator

### Accessibility Features
- Improved accessibility throughout the app

### Additional Features
- Back navigation
- Logout functionality
- Loading indicators and error handling

## 🛠 Getting Started

### Prerequisites
- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/easygenerator-frontend.git
   cd easygenerator-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   Or
   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```bash
   REACT_APP_BACKEND_URL=https://easygenerator-my-backend.onrender.com
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   Or
   ```bash
   yarn start
   ```

5. Open http://localhost:3000 in your browser.

## 📁 Project Structure

```
src/
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
```

## 📜 Available Scripts
- `npm start`: Run the app in development mode
- `npm test`: Launch the test runner
- `npm run build`: Build the app for production
- `npm run eject`: Eject from Create React App (use cautiously)

## 🔐 Environment Variables
- `REACT_APP_BACKEND_URL`: Base URL of the backend API

## 🎨 UI/UX Enhancements
- Professional and responsive design
- Real-time form validation
- User-friendly error messages and loading indicators
- Theme switching capability
- Improved accessibility features

## 🚀 Future Enhancements
- Forgot Password functionality
- User Profile Management
- Notification system
- Internationalization (i18n)
- Enhanced security (reCAPTCHA, HTTP-only cookies)

## 📄 License
This project is licensed under the **MIT License**.
