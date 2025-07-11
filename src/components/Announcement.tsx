export default function Announcement() {
  return (
    <div className="bg-amber-50 text-amber-800 flex text-center justify-center h-12 items-center px-6">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <h1 className="text-base font-medium">
          Recommend at least two character sets for a secure password
        </h1>
      </div>
    </div>
  );
}
