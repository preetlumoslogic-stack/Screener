import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left side - Logo and info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-gray-900">screener</span>
              <span className="ml-1 text-green-500 text-xl">|</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">Stock analysis and screening tool</p>
            <p className="text-xs text-gray-500 mb-2">
              Mittal Analytics Private Ltd © 2009-2025 Made with ❤️ in India.
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Data provided by C-MOTS Internet Technologies Pvt Ltd
            </p>
            <div className="flex space-x-4 text-xs">
              <Link to="/terms" className={`hover:text-gray-700 ${isActive('/terms') ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                Terms
              </Link>
              <span className="text-gray-500">&</span>
              <Link to="/privacy" className={`hover:text-gray-700 ${isActive('/privacy') ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                Privacy
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/premium" 
                  className={`hover:text-gray-900 ${isActive('/premium') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  Premium
                </Link>
              </li>
              <li>
                <Link 
                  to="/changelog" 
                  className={`hover:text-gray-900 ${isActive('/changelog') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  What's new?
                </Link>
              </li>
              <li>
                <a 
                  href="https://bit.ly/learnscreener" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 text-gray-600"
                >
                  Learn
                </a>
              </li>
            </ul>
          </div>


          {/* Team Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Team</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-gray-900 ${isActive('/about') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link 
                  to="/support" 
                  className={`hover:text-gray-900 ${isActive('/support') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className={`hover:text-gray-900 ${isActive('/register') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  Create a Free Account
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className={`hover:text-gray-900 ${isActive('/register') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                >
                  Support
                </Link>
              </li>

            </ul>
          </div>



          {/* Theme Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Theme</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className={`hover:text-gray-900 text-left ${location.pathname.includes('theme=light') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                  Light
                </button>
              </li>
              <li>
                <button className={`hover:text-gray-900 text-left ${location.pathname.includes('theme=dark') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                  Dark
                </button>
              </li>
              <li>
                <button className={`hover:text-gray-900 text-left ${location.pathname.includes('theme=auto') ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                  Auto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
