import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login({ users }) {
    // State to store the currently selected user
    const [activeUser, setActiveUser] = useState(null);
    const navigate = useNavigate();

    // Handles user selection by updating the activeUser state
    const handleUserClick = (user) => {
        setActiveUser(user);
    };

    // Navigates to the dashboard with the selected user's ID
    const handleContinue = () => {
        if (activeUser) {
            navigate(`/dashboard/${activeUser._id}`);
        } else {
            console.warn("Please select a user to continue");
        }
    };

    return (
        <div className="user-cards grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Display user cards dynamically based on the users prop */}
            {users.map((user) => (
                <div
                    key={user._id}
                    className={`user-card p-4 rounded-lg shadow-md hover:shadow-lg-hover cursor-pointer ${activeUser === user ? 'bg-gray-200' : 'bg-white'
                        }`}
                    onClick={() => handleUserClick(user)}
                >
                    <h1 className="text-lg font-medium mb-2">{user.fName}</h1>
                </div>
            ))}
            {/* Button enabled/disabled and styled based on activeUser state */}
            <button
                className={`continue-button px-4 py-2 rounded-md text-white font-medium disabled:bg-gray-400 disabled:opacity-50 ${activeUser ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                disabled={!activeUser}
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    );
}
