const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 mb-8 text-white bg-indigo-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 1018.364 5.636z"
            />
          </svg>
          <span>404 Error</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed had its name changed or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
