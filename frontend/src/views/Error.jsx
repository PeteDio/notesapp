import { Link } from 'react-router-dom';

// Renders an error page for invalid routes
export default function Error() {
  return (
    <div className="error-page min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">404 Not Found</h1>
      <p className="text-xl text-gray-600 text-center">
        The page you requested could not be found.
      </p>
      <Link to="/" className="mt-8 px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
  );
}