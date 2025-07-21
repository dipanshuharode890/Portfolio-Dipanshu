import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 text-center px-6">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
