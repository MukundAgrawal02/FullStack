import  { useState } from 'react';

function Navbar() {
    //state for managing navbar state
  const [isOpen, setIsOpen] = useState(false);

  //toggles state functionality
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //main navbar component
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyCards</div>
        <div className="hidden md:flex space-x-4 mr-7">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">About</a>
          <a href="#" className="text-white hover:text-gray-200">Services</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/*navbar for small screen*/}
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-white py-2 px-4 hover:text-gray-200">Home</a>
          <a href="#" className="block text-white py-2 px-4 hover:text-gray-200">About</a>
          <a href="#" className="block text-white py-2 px-4 hover:text-gray-200">Services</a>
          <a href="#" className="block text-white py-2 px-4 hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
