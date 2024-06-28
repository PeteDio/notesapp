import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// Import components
import Login from './views/Login'; // Login component for user authentication
import Dashboard from './views/Dashboard'; // Dashboard component for authenticated users
import Error from './views/Error'; // Error component for handling invalid routes

function App() {
  const [users, setUsers] = useState([]); // State to store fetched user data

  // Fetches all users on component mount
  useEffect(() => {
    fetch("http://192.168.0.27:8080/v1/user")
      .then(response => response.json())
      .then(data => setUsers(data.allUsers))  // Update state with fetched users
      .catch(error => console.error(error)); // Handle errors during data fetching
  }, []);

  return (
    <Routes>
      <Route index element={<Login users={users} />} />  {/* Login route with user data */}
      <Route path="*" element={<Error />} />  {/* Catch-all route for invalid URLs */}
      <Route path="dashboard/:userId" element={<Dashboard />} />  {/* Dashboard route with user ID parameter */}
    </Routes>
  );
}

export default App;
