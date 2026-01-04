import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToolsDropdown from './ToolsDropdown'

function Navbar() {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const toolsButtonRef = useRef(null)
  const location = useLocation()

  // Close dropdown when route changes
  useEffect(() => {
    setShowToolsDropdown(false)
  }, [location])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          toolsButtonRef.current && !toolsButtonRef.current.contains(event.target)) {
        setShowToolsDropdown(false)
      }
    }

    if (showToolsDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showToolsDropdown])

  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">screener</span>
              <span className="ml-1 text-green-500 text-2xl">|</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                HOME
              </Link>
              
              <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                SCREENS
              </Link>
              
              <div 
                ref={dropdownRef}
                className="relative"
              >
                <button 
                  ref={toolsButtonRef}
                  onClick={() => setShowToolsDropdown(!showToolsDropdown)}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
                >
                  TOOLS
                  <svg className={`ml-1 w-4 h-4 transition-transform ${showToolsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showToolsDropdown && <ToolsDropdown buttonRef={toolsButtonRef} />}
              </div>
            </div>
          </div>

          {/* Right side - Search and Auth */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Q Search for a company"
                className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              LOGIN
            </Link>
            
            <Link to="/register" className="text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
              GET FREE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
