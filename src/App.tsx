// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Weather from './components/Weather';
import EasyGeneratorGPT from './components/EasyGeneratorGPT';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/weather"
            element={
              <PrivateRoute>
                <Weather />
              </PrivateRoute>
            }
          />
          <Route
            path="/easygeneratorgpt"
            element={
              <PrivateRoute>
                <EasyGeneratorGPT />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
