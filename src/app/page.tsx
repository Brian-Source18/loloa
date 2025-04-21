'use client';
export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans">
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
        <h1 className="text-xl font-bold ">Payroll System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="Home" className="hover:underline">Home</a></li>
            <li><a href="Aboutus" className="hover:underline">About Us</a></li>
            <li><a href="Contact" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Sign Up</a></li>
            <li><a href="#" className="hover:underline">Log In</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
