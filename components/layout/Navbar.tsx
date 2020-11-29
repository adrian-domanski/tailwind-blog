import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    if (isMobileActive) {
      const closeMobile = () => {
        setIsMobileActive(false);
      };
      document.addEventListener("click", closeMobile);
      return () => document.removeEventListener("click", closeMobile);
    }
  }, [isMobileActive]);

  const toggleMobile = () => setIsMobileActive(!isMobileActive);

  return (
    <nav className="bg py-3 flex sticky justify-between bg-gray-50 items-center z-50">
      <div id="navbar-brand" className="items-end relative table ml-4">
        <h1 className="font-bold tracking-wider text-3xl text-gray-700">
          Katen
        </h1>
        <span className="bg-gradient-to-r rounded-full absolute bottom-0 transform -translate-y-1/2 -right-2 w-2 h-2 block bg-red-500"></span>
      </div>

      <ul
        id="navbar-list"
        className={`transform ${
          isMobileActive ? "" : "scale-y-0"
        } absolute top-full w-full bg-gray-200 transition-transform ease-out origin-top`}
      >
        <li>
          <a
            href="#"
            className="text-gray-700 tracking-wider text-xl border-b border-gray-300 text-center block py-3"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 tracking-wider text-xl border-b border-gray-300 text-center block py-3"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-700 tracking-wider text-xl border-b border-gray-300 text-center block py-3"
          >
            Home
          </a>
        </li>
      </ul>

      <button id="hamburger" className="mr-4" onClick={toggleMobile}>
        <svg
          className="w-10 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
