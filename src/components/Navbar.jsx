// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBookBookmark } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gray-900 rounded-bl-xl rounded-br-xl shadow-2xl shadow-gray-200">
//       <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <h1 className="md:text-2xl font-bold text-purple-600 text-sm">CrowdFund Connect</h1>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 items-center">
//           <li>
//             <Link to="/" className="text-white hover:text-purple-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/campaigns" className="text-white hover:text-purple-500">
//               Campaigns
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-white hover:text-purple-500">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-white hover:text-purple-500">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link to="/news" className="text-white hover:text-purple-500">
//               News
//             </Link>
//           </li>
//           <li>
//             <Link to="/bookmark" className="text-white hover:text-purple-500 flex items-center">
//               <FaBookBookmark size={22} className="text-purple-600 mr-1" />

//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <ul className="md:hidden bg-black absolute top-16 left-0 w-full flex flex-col items-center z-50">
//             <li className="w-full text-center ">
//               <Link
//                 to="/"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="w-full text-center ">
//               <Link
//                 to="/campaigns"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Campaigns
//               </Link>
//             </li>
//             <li className="w-full text-center ">
//               <Link
//                 to="/about"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li className="w-full text-center ">
//               <Link
//                 to="/contact"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
//             </li>
//             <li className="w-full text-center ">
//               <Link
//                 to="/bookmark"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Bookmarks
//               </Link>
//             </li>
//             <li className="w-full text-center ">
//               <Link
//                 to="/news"
//                 className="text-white hover:text-purple-500 py-3 block"
//                 onClick={() => setIsOpen(false)}
//               >
//                 News
//               </Link>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaBookBookmark } from "react-icons/fa";

import { MdOutlineCollectionsBookmark } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 rounded-bl-xl rounded-br-xl shadow-2xl shadow-gray-200">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="md:text-2xl font-bold text-purple-600 text-sm">
            CrowdFund Connect
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-white hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/campaigns" className="text-white hover:text-purple-500">
              Campaigns
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-purple-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-purple-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-white hover:text-purple-500">
              News
            </Link>
          </li>
          <li>
            <Link
              to="/bookmark"
              className="text-white hover:text-purple-500 flex items-center"
            >
              {/* <FaBookBookmark size={22} className="text-purple-600 mr-1" aria-label="Bookmarks" /> */}
              <MdOutlineCollectionsBookmark size={22} className="text-purple-600"/>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-black mx-2 absolute top-16 right-0 w-[50%] flex flex-col items-center rounded-lg shadow-lg shadow-gray-400 z-50">
            <li className="w-full text-center ">
              <Link
                to="/"
                className="text-white hover:text-purple-500 py-3 block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/campaigns"
                className="text-white hover:text-purple-500 py-3 block"
                onClick={() => setIsOpen(false)}
              >
                Campaigns
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/about"
                className="text-white hover:text-purple-500 py-3 block"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/contact"
                className="text-white hover:text-purple-500 py-3 block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/bookmark"
                className="text-white hover:text-purple-500 py-3 ml-[47%] block"
                onClick={() => setIsOpen(false)}
              >
                <MdOutlineCollectionsBookmark size={22} className="text-purple-600"/>
              </Link>
            </li>
            <li className="w-full text-center ">
              <Link
                to="/news"
                className="text-white hover:text-purple-500 py-3 block"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
