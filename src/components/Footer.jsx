
const Footer = () => {
  return (
    <footer className="bg-[#110940] text-white body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center mb-4 sm:mb-0">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-2 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              ABS
            </span>
            <span className="ml-3 text-2xl font-bold">
              All Business Soluition
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap text-lg justify-center sm:justify-start gap-6">
          <a className="hover:text-gray-400">About Us</a>
          <a className="hover:text-gray-400">Services</a>
          <a className="hover:text-gray-400">Blog</a>
          <a className="hover:text-gray-400">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-0 gap-4 text-lg">
          <a className="text-gray-500 hover:text-blue-600">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-gray-500 hover:text-blue-400">
            <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-gray-500 hover:text-pink-500">
            <svg
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="text-gray-500 hover:text-blue-700">
            <svg
              fill="currentColor"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-5 py-6 border-t border-gray-700 flex flex-wrap flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          © 2025 React JS —
          <a
            href="https://www.facebook.com/md.shifat.rahman420"
            className="text-gray-400 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @designer
          </a>
        </p>
        <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-end gap-4 text-gray-500">
          <a className="hover:text-blue-500">Privacy Policy</a>
          <a className="hover:text-blue-500">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
