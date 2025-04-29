export default function Footer() {
  return (
    <footer className="h-16 w-full flex text-center bg-gray-50 border-t items-center justify-center">
      <h1 className="text-gray-600">
        © {new Date().getFullYear()} SecureKey | Made by{" "}
        <a href="https://brianmulinge.com" className="text-indigo-600 hover:text-indigo-800 transition-colors" target="_blank" rel="noopener noreferrer">
          <span className="font-semibold">Brian Mulinge</span>
        </a>
      </h1>
    </footer>
  );
}
