import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function ToolsDropdown({ buttonRef }) {
  const dropdownRef = useRef(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const tools = [
    {
      icon: '🔍',
      title: 'Create a stock screen',
      description: 'Run queries on 10 years of financial data.',
      premium: true,
      link: '/register'
    },
    {
      icon: '✨',
      title: 'Screener AI',
      description: 'Extract valuable insights from hundreds of company documents.',
      link: '/ai'
    },
    {
      icon: '🚚',
      title: 'Commodity Prices',
      description: 'Analyze price trends for 10,000+ commodities over the past 10 years.',
      link: '/login'
    },
    {
      icon: '👥',
      title: 'Search shareholders',
      description: 'Find all companies where a person owns more than 1% of shares.',
      link: '/login'
    },
    {
      icon: '📢',
      title: 'Company Announcements',
      description: 'Stay updated. Search, filter and set alerts for the newest disclosures and developments.',
      link: '/register'
    }
  ]

  // Position dropdown based on button position and update on scroll/resize
  useEffect(() => {
    const updatePosition = () => {
      if (buttonRef?.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect()
        setPosition({
          top: buttonRect.bottom + 4,
          left: buttonRect.left
        })
      }
    }

    updatePosition()

    // Update position on scroll and resize
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [buttonRef])

  return (
    <div 
      ref={dropdownRef}
      className="w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] animate-slide-in"
      style={{ 
        borderBottom: '3px solid #7c3aed',
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`
      }}
    >
      <div className="p-4 space-y-4">
        {tools.map((tool, index) => (
          <Link key={index} to={tool.link}>
            <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
              <div className="text-2xl">{tool.icon}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-semibold text-gray-900">{tool.title}</h3>
                  {tool.premium && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <span className="mr-1">👑</span>
                      Premium features
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <Link to="/premium">
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
            UPGRADE TO PREMIUM
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ToolsDropdown
