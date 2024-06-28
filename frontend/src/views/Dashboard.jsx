import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    // More descriptive function name
    async function fetchUserById() {
      try {
        const response = await fetch(`http://192.168.0.27:8080/v1/user/${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error); // todo: navigate to error page
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserById();
  }, [userId]);

  return (
    <div className="dashboard">
      <header className="header bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {user ? `Welcome, ${user.fName}` : 'Welcome!'}
        </h1>
        {/* Add additional header elements here (optional) */}
      </header>
      {/* Display loading message or user content based on state */}
      {isLoading ? (
        <p className="text-center text-gray-500">Loading user data...</p>
      ) : user ? (
        <div>
          {/* Display user details or personalized content here */}
          <p>User ID: {user._id}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-center text-red-500">Error fetching user data (or no user found)</p>
      )}
    </div>
  );
}
