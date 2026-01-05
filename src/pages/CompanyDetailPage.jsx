import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { companyData } from '../data/companies'

function CompanyDetailPage() {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('company')
  const sectionRefs = useRef({})
  
  // In a real app, you'd fetch this based on symbol
  const company = companyData.find(c => c.symbol === symbol.toUpperCase()) || companyData[0]

  const tabs = [
    { id: 'company', label: 'Coastal Corp' },
    { id: 'chart', label: 'Chart' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'peers', label: 'Peers' },
    { id: 'quarters', label: 'Quarters' },
    { id: 'profit-loss', label: 'Profit & Loss' },
    { id: 'balance-sheet', label: 'Balance Sheet' },
    { id: 'cash-flow', label: 'Cash Flow' },
    { id: 'ratios', label: 'Ratios' },
    { id: 'investors', label: 'Investors' },

    // {id: 'investors', label: 'Shareholding Patterns'},
    
    { id: 'documents', label: 'Documents' }
  ]

  

  const scrollToSection = (tabId) => {
    const element = sectionRefs.current[tabId]
    if (element) {
      const offset = 100 // Offset for sticky navigation
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveTab(tabId)
    }
  }

  // Intersection Observer to highlight active tab
  useEffect(() => {
    const observers = tabs.map(tab => {
      const element = sectionRefs.current[tab.id]
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveTab(tab.id)
            }
          })
        },
        {
          threshold: [0, 0.5, 1],
          rootMargin: '-100px 0px -50% 0px'
        }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach(observer => observer && observer.disconnect())
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub Navigation - Sticky */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-0.5 flex-1 min-w-0 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-2 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
              <button 
                onClick={() => navigate('/register')}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 whitespace-nowrap"
              >
                Notebook
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-3 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 whitespace-nowrap"
              >
                +AI
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Header */}
        <div id="company" ref={el => sectionRefs.current['company'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h1>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg font-semibold text-gray-900">₹{company.currentPrice}</span>
                <span className="text-sm text-green-600 font-medium">+{company.change}%</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">02 Jan - close price</p>
              <p className="text-sm text-gray-600 mb-1">{company.website}</p>
              <p className="text-sm text-gray-600">
                {company.bse} | {company.nse}
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => navigate('/register')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
              >
                EXPORT TO EXCEL
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 whitespace-nowrap"
              >
                + FOLLOW
              </button>
            </div>
          </div>

          {/* Financial Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Market Cap</p>
              <p className="text-sm font-semibold text-gray-900">₹{company.marketCap} Cr.</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Current Price</p>
              <p className="text-sm font-semibold text-gray-900">₹{company.currentPrice}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Stock P/E</p>
              <p className="text-sm font-semibold text-gray-900">{company.pe}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Book Value</p>
              <p className="text-sm font-semibold text-gray-900">₹{company.bookValue}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROCE</p>
              <p className="text-sm font-semibold text-gray-900">{company.roce}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">High / Low</p>
              <p className="text-sm font-semibold text-gray-900">₹{company.highLow}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Dividend Yield</p>
              <p className="text-sm font-semibold text-gray-900">{company.dividendYield}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROE</p>
              <p className="text-sm font-semibold text-gray-900">{company.roe}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Face Value</p>
              <p className="text-sm font-semibold text-gray-900">₹{company.faceValue}</p>
            </div>
          </div>
          
          {/* Add Ratio Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="eg. Promoter holding"
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <p className="text-xs text-gray-500 mt-1">Add ratio to table</p>
          </div>
          
          <div className="text-right">
            <button className="text-xs text-blue-600 hover:underline">EDIT RATIOS</button>
          </div>
          
          {/* About Section */}
          <div className="mt-6 mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">ABOUT</h3>
            <p className="text-sm text-gray-600">
              Incorporated in 1981, Coastal Corporation Ltd is engaged in processing and export of sea food[1].
            </p>
          </div>
          
          {/* Key Points Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">KEY POINTS</h3>
            <p className="text-xs text-gray-600 mb-1">
              Business Overview:[1][2] CCL is a HACCP, BRC, and BAP-certified producer and exporter of high-quality Aquaculture seafood.
            </p>
            <button className="text-xs text-blue-600 hover:underline">READ MORE &gt;</button>
          </div>
        </div>
        </div>

        {/* Chart Section */}
        <div id="chart" ref={el => sectionRefs.current['chart'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-1">
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">1M</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">6M</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">1Yr</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">3Yr</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">5Yr</button>
              <button className="px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">10Yr</button>
              <button className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded">Max</button>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">Price</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">PE Ratio</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">More
                <svg className="w-3 h-3 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Alerts
              </button>
            </div>
          </div>
          
          {/* Chart with Price and Volume */}
          <div className="h-96 bg-white rounded relative">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              {/* Grid lines */}
              <defs>
                <linearGradient id="volumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              
              {/* Horizontal grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={`h-${i}`} x1="50" y1={80 + i * 60} x2="750" y2={80 + i * 60} stroke="#E5E7EB" strokeWidth="1" />
              ))}
              
              {/* Vertical grid lines */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <line key={`v-${i}`} x1={50 + i * 87.5} y1="80" x2={50 + i * 87.5} y2="320" stroke="#E5E7EB" strokeWidth="1" />
              ))}
              
              {/* Volume bars */}
              {[20, 35, 25, 45, 30, 50, 40, 60, 55, 70, 65, 80, 75, 90, 85, 95, 88, 100, 92, 85, 78, 70, 65, 60, 55, 50, 45, 40, 35, 30].map((vol, i) => (
                <rect
                  key={`vol-${i}`}
                  x={60 + i * 23}
                  y={320 - (vol / 100) * 240}
                  width="18"
                  height={(vol / 100) * 240}
                  fill="url(#volumeGradient)"
                  opacity="0.6"
                />
              ))}
              
              {/* Price line (blue) */}
              <polyline
                points="60,280 83,260 106,240 129,220 152,200 175,180 198,160 221,150 244,140 267,130 290,120 313,110 336,100 359,95 382,90 405,85 428,80 451,75 474,70 497,65 520,60 543,55 566,50 589,45 612,40 635,35 658,30 681,25 704,20"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              
              {/* Moving average lines */}
              <polyline
                points="60,270 83,250 106,230 129,210 152,190 175,170 198,155 221,145 244,135 267,125 290,115 313,105 336,100 359,95 382,90 405,85 428,80 451,75 474,70 497,65 520,60 543,55 566,50 589,45 612,40 635,35 658,30 681,25 704,20"
                fill="none"
                stroke="#FCD34D"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              
              <polyline
                points="60,275 83,255 106,235 129,215 152,195 175,175 198,160 221,150 244,140 267,130 290,120 313,110 336,100 359,95 382,90 405,85 428,80 451,75 474,70 497,65 520,60 543,55 566,50 589,45 612,40 635,35 658,30 681,25 704,20"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
              
              {/* Y-axis labels (Price) */}
              {[0, 20, 40, 60, 80].map((val, i) => (
                <text key={`price-${i}`} x="45" y={320 - i * 60} textAnchor="end" fontSize="10" fill="#6B7280">
                  {val}
                </text>
              ))}
              
              {/* Y-axis labels (Volume) */}
              <text x="755" y="85" textAnchor="start" fontSize="10" fill="#6B7280">0</text>
              <text x="755" y="145" textAnchor="start" fontSize="10" fill="#6B7280">3500k</text>
              <text x="755" y="205" textAnchor="start" fontSize="10" fill="#6B7280">7000k</text>
              <text x="755" y="265" textAnchor="start" fontSize="10" fill="#6B7280">10500k</text>
              <text x="755" y="325" textAnchor="start" fontSize="10" fill="#6B7280">14000k</text>
              
              {/* X-axis labels */}
              {['Sep 2017', 'Sep 2018', 'Sep 2019', 'Sep 2020', 'Sep 2021', 'Sep 2022', 'Sep 2023', 'Sep 2024', 'Sep 2025'].map((label, i) => (
                <text key={`x-${i}`} x={50 + i * 87.5} y="345" textAnchor="middle" fontSize="10" fill="#6B7280">
                  {label}
                </text>
              ))}
              
              {/* Axis labels */}
              <text x="400" y="365" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="500">Price on BSE</text>
            </svg>
          </div>
        </div>
        </div>

        {/* Analysis Section - Pros & Cons */}
        <div id="analysis" ref={el => sectionRefs.current['analysis'] = el} className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-green-900 mb-3">PROS</h3>
            <ul className="space-y-2">
              {company.pros.map((pro, index) => (
                <li key={index} className="text-sm text-green-800">• {pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-red-900 mb-3">CONS</h3>
            <ul className="space-y-2">
              {company.cons.map((con, index) => (
                <li key={index} className="text-sm text-red-800">• {con}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-6">The pros and cons are machine generated.</p>
        </div>

        {/* Peer Comparison */}
        <div id="peers" ref={el => sectionRefs.current['peers'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Peer comparison</h2>
              <p className="text-sm text-gray-600">
                {company.sector} &gt; {company.industry}
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              EDIT COLUMNS
            </button>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Detailed Comparison with:"
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">S.No.</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">CMP Rs.</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">P/E</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar Cap Rs.Cr.</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Div Yld %</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">NP Qtr Rs.Cr.</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Profit Var %</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sales Qtr Rs.Cr.</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sales Var %</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">ROCE %</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td className="px-3 py-2 text-gray-900">1</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Coastal Corporat</td>
                  <td className="px-3 py-2 text-right text-gray-900">45.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">45.04</td>
                  <td className="px-3 py-2 text-right text-gray-900">308.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.71</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">-37.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">135.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.81</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">2</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Apex Frozen Food</td>
                  <td className="px-3 py-2 text-right text-gray-900">234.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">18.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">456.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">25.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">180.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.3</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">3</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Bharat Industria</td>
                  <td className="px-3 py-2 text-right text-gray-900">89.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">22.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">234.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">10.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">95.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.9</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">4</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Kings Infra</td>
                  <td className="px-3 py-2 text-right text-gray-900">156.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">15.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">345.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">21.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">15.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">145.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">10.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.2</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">5</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Waterbase</td>
                  <td className="px-3 py-2 text-right text-gray-900">67.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">19.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">189.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">78.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.4</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">6</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Zeal Aqua</td>
                  <td className="px-3 py-2 text-right text-gray-900">123.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">16.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">278.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">16.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">112.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.8</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">7</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Liberty Marine</td>
                  <td className="px-3 py-2 text-right text-gray-900">45.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">14.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">156.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">67.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.8</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-gray-900">8</td>
                  <td className="px-3 py-2 font-medium text-blue-600">Madan & Co</td>
                  <td className="px-3 py-2 text-right text-gray-900">78.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">17.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">201.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">89.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quarterly Results */}
        <div id="quarters" ref={el => sectionRefs.current['quarters'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Quarterly Results</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores / View Standalone</p>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2025</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Sales</td>
                  <td className="px-3 py-2 text-right text-gray-900">120.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">125.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">130.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">128.7</td>
                  <td className="px-3 py-2 text-right text-blue-600 font-semibold">127.13</td>
                  <td className="px-3 py-2 text-right text-gray-900">132.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">135.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">138.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">140.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">142.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">145.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">147.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">150.0</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Expenses</td>
                  <td className="px-3 py-2 text-right text-gray-900">112.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">116.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">119.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">118.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">116.41</td>
                  <td className="px-3 py-2 text-right text-gray-900">121.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">137.09</td>
                  <td className="px-3 py-2 text-right text-gray-900">126.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">127.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">130.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">132.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">135.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">137.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Operating Profit</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">10.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.8</td>
                  <td className="px-3 py-2 text-right text-blue-600 font-semibold">10.72</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.2</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-1.29</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">OPM %</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.80</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.26</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.06</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.61</td>
                  <td className="px-3 py-2 text-right text-blue-600 font-semibold">8.43</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.46</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-0.95</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.74</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.92</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.77</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.62</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.35</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.33</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Other Income</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.7</td>
                  <td className="px-3 py-2 text-right text-blue-600 font-semibold">14.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.3</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Interest</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.1</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.8</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Depreciation</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">6.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">7.4</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Profit before tax</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.3</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.92</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.4</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-5.66</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.6</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.4</td>
                  <td className="px-3 py-2 text-right text-gray-900">5.6</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Tax %</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Net Profit</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.05</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.73</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.85</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.18</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.94</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.3</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-5.66</td>
                  <td className="px-3 py-2 text-right text-gray-900">3.9</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.2</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.05</td>
                  <td className="px-3 py-2 text-right text-gray-900">4.2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">EPS Rs.</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.07</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.12</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.19</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.15</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.20</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.22</td>
                  <td className="px-3 py-2 text-right text-red-600 font-semibold">-0.38</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.26</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.28</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.28</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.28</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.27</td>
                  <td className="px-3 py-2 text-right text-gray-900">0.28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>

        {/* Profit & Loss Table */}
        <div id="profit-loss" ref={el => sectionRefs.current['profit-loss'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Profit & Loss</h2>
              <p className="text-sm text-gray-600">Consolidated Figures in Rs. Crores / View Standalone</p>
            </div>
            <div className="flex gap-2">
              <button className="text-sm text-blue-600 hover:underline">RELATED PARTY</button>
              <button className="text-sm text-blue-600 hover:underline">CORPORATE ACTIONS</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2020</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2021</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">TTM</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Sales</td>
                  <td className="px-3 py-2 text-right text-gray-900">580</td>
                  <td className="px-3 py-2 text-right text-gray-900">620</td>
                  <td className="px-3 py-2 text-right text-gray-900">650</td>
                  <td className="px-3 py-2 text-right text-gray-900">680</td>
                  <td className="px-3 py-2 text-right text-gray-900">700</td>
                  <td className="px-3 py-2 text-right text-gray-900">720</td>
                  <td className="px-3 py-2 text-right text-gray-900">684</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Expenses</td>
                  <td className="px-3 py-2 text-right text-gray-900">520</td>
                  <td className="px-3 py-2 text-right text-gray-900">550</td>
                  <td className="px-3 py-2 text-right text-gray-900">570</td>
                  <td className="px-3 py-2 text-right text-gray-900">600</td>
                  <td className="px-3 py-2 text-right text-gray-900">620</td>
                  <td className="px-3 py-2 text-right text-gray-900">640</td>
                  <td className="px-3 py-2 text-right text-gray-900">610</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Operating Profit</td>
                  <td className="px-3 py-2 text-right text-gray-900">60</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-red-600">-1.29</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-gray-900">74</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">OPM %</td>
                  <td className="px-3 py-2 text-right text-gray-900">10.34</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.29</td>
                  <td className="px-3 py-2 text-right text-gray-900">12.31</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.76</td>
                  <td className="px-3 py-2 text-right text-red-600">-0.18</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.11</td>
                  <td className="px-3 py-2 text-right text-gray-900">10.82</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Other Income</td>
                  <td className="px-3 py-2 text-right text-gray-900">5</td>
                  <td className="px-3 py-2 text-right text-gray-900">6</td>
                  <td className="px-3 py-2 text-right text-gray-900">7</td>
                  <td className="px-3 py-2 text-right text-gray-900">8</td>
                  <td className="px-3 py-2 text-right text-gray-900">14.7</td>
                  <td className="px-3 py-2 text-right text-gray-900">9</td>
                  <td className="px-3 py-2 text-right text-gray-900">9.2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Interest</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">14</td>
                  <td className="px-3 py-2 text-right text-gray-900">13</td>
                  <td className="px-3 py-2 text-right text-gray-900">12</td>
                  <td className="px-3 py-2 text-right text-gray-900">11</td>
                  <td className="px-3 py-2 text-right text-gray-900">10</td>
                  <td className="px-3 py-2 text-right text-gray-900">11.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Depreciation</td>
                  <td className="px-3 py-2 text-right text-gray-900">20</td>
                  <td className="px-3 py-2 text-right text-gray-900">22</td>
                  <td className="px-3 py-2 text-right text-gray-900">24</td>
                  <td className="px-3 py-2 text-right text-gray-900">26</td>
                  <td className="px-3 py-2 text-right text-gray-900">28</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">28.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Profit before tax</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">40</td>
                  <td className="px-3 py-2 text-right text-gray-900">50</td>
                  <td className="px-3 py-2 text-right text-gray-900">50</td>
                  <td className="px-3 py-2 text-right text-gray-900">-25.59</td>
                  <td className="px-3 py-2 text-right text-gray-900">49</td>
                  <td className="px-3 py-2 text-right text-gray-900">43.2</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Tax %</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">-</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Net Profit</td>
                  <td className="px-3 py-2 text-right text-gray-900">22.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">37.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">37.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">-25.59</td>
                  <td className="px-3 py-2 text-right text-gray-900">36.75</td>
                  <td className="px-3 py-2 text-right text-gray-900">28.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">EPS Rs.</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.0</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">-1.71</td>
                  <td className="px-3 py-2 text-right text-gray-900">2.45</td>
                  <td className="px-3 py-2 text-right text-gray-900">1.9</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Dividend Payout %</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">31</td>
                  <td className="px-3 py-2 text-right text-gray-900">31.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">31.8</td>
                  <td className="px-3 py-2 text-right text-gray-900">-</td>
                  <td className="px-3 py-2 text-right text-gray-900">32</td>
                  <td className="px-3 py-2 text-right text-gray-900">31.6</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Summary Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-xs text-gray-600 mb-2">Compounded Sales Growth</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">3 Years:</span>
                  <span className="ml-1 font-semibold">5.2%</span>
                </div>
                <div>
                  <span className="text-gray-500">5 Years:</span>
                  <span className="ml-1 font-semibold">4.4%</span>
                </div>
                <div>
                  <span className="text-gray-500">10 Years:</span>
                  <span className="ml-1 font-semibold">3.8%</span>
                </div>
                <div>
                  <span className="text-gray-500">TTM:</span>
                  <span className="ml-1 font-semibold">0.6%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-xs text-gray-600 mb-2">Compounded Profit Growth</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">3 Years:</span>
                  <span className="ml-1 font-semibold">18.5%</span>
                </div>
                <div>
                  <span className="text-gray-500">5 Years:</span>
                  <span className="ml-1 font-semibold">12.3%</span>
                </div>
                <div>
                  <span className="text-gray-500">10 Years:</span>
                  <span className="ml-1 font-semibold">8.9%</span>
                </div>
                <div>
                  <span className="text-gray-500">TTM:</span>
                  <span className="ml-1 font-semibold">-26.8%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-xs text-gray-600 mb-2">Stock Price CAGR</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">1 Year:</span>
                  <span className="ml-1 font-semibold">15.2%</span>
                </div>
                <div>
                  <span className="text-gray-500">3 Years:</span>
                  <span className="ml-1 font-semibold">12.8%</span>
                </div>
                <div>
                  <span className="text-gray-500">5 Years:</span>
                  <span className="ml-1 font-semibold">10.5%</span>
                </div>
                <div>
                  <span className="text-gray-500">10 Years:</span>
                  <span className="ml-1 font-semibold">8.2%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-xs text-gray-600 mb-2">Return on Equity</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">1 Year:</span>
                  <span className="ml-1 font-semibold">2.11%</span>
                </div>
                <div>
                  <span className="text-gray-500">3 Years:</span>
                  <span className="ml-1 font-semibold">4.81%</span>
                </div>
                <div>
                  <span className="text-gray-500">5 Years:</span>
                  <span className="ml-1 font-semibold">6.2%</span>
                </div>
                <div>
                  <span className="text-gray-500">10 Years:</span>
                  <span className="ml-1 font-semibold">7.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Balance Sheet Table */}
        <div id="balance-sheet" ref={el => sectionRefs.current['balance-sheet'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Balance Sheet</h2>
          <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores / View Standalone</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2020</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2021</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">TTM</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Equity Capital</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                  <td className="px-3 py-2 text-right text-gray-900">15</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Reserves</td>
                  <td className="px-3 py-2 text-right text-gray-900">85</td>
                  <td className="px-3 py-2 text-right text-gray-900">115</td>
                  <td className="px-3 py-2 text-right text-gray-900">152.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">190</td>
                  <td className="px-3 py-2 text-right text-gray-900">164.41</td>
                  <td className="px-3 py-2 text-right text-gray-900">201.16</td>
                  <td className="px-3 py-2 text-right text-gray-900">201.16</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Borrowings</td>
                  <td className="px-3 py-2 text-right text-gray-900">200</td>
                  <td className="px-3 py-2 text-right text-gray-900">180</td>
                  <td className="px-3 py-2 text-right text-gray-900">160</td>
                  <td className="px-3 py-2 text-right text-gray-900">140</td>
                  <td className="px-3 py-2 text-right text-gray-900">120</td>
                  <td className="px-3 py-2 text-right text-gray-900">100</td>
                  <td className="px-3 py-2 text-right text-gray-900">110</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Other Liabilities</td>
                  <td className="px-3 py-2 text-right text-gray-900">100</td>
                  <td className="px-3 py-2 text-right text-gray-900">110</td>
                  <td className="px-3 py-2 text-right text-gray-900">122.5</td>
                  <td className="px-3 py-2 text-right text-gray-900">135</td>
                  <td className="px-3 py-2 text-right text-gray-900">150.59</td>
                  <td className="px-3 py-2 text-right text-gray-900">183.84</td>
                  <td className="px-3 py-2 text-right text-gray-900">183.84</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900 font-semibold">Total Liabilities</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">400</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">420</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">450</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">480</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">450</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">500</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">510</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Fixed Assets</td>
                  <td className="px-3 py-2 text-right text-gray-900">250</td>
                  <td className="px-3 py-2 text-right text-gray-900">270</td>
                  <td className="px-3 py-2 text-right text-gray-900">290</td>
                  <td className="px-3 py-2 text-right text-gray-900">310</td>
                  <td className="px-3 py-2 text-right text-gray-900">330</td>
                  <td className="px-3 py-2 text-right text-gray-900">350</td>
                  <td className="px-3 py-2 text-right text-gray-900">350</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">CWIP</td>
                  <td className="px-3 py-2 text-right text-gray-900">20</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">35</td>
                  <td className="px-3 py-2 text-right text-gray-900">40</td>
                  <td className="px-3 py-2 text-right text-gray-900">45</td>
                  <td className="px-3 py-2 text-right text-gray-900">45</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Investments</td>
                  <td className="px-3 py-2 text-right text-gray-900">50</td>
                  <td className="px-3 py-2 text-right text-gray-900">55</td>
                  <td className="px-3 py-2 text-right text-gray-900">60</td>
                  <td className="px-3 py-2 text-right text-gray-900">65</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">35</td>
                  <td className="px-3 py-2 text-right text-gray-900">35</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Other Assets</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">50</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900 font-semibold">Total Assets</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">400</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">420</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">450</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">480</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">450</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">500</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">510</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Cash Flows Table */}
        <div id="cash-flow" ref={el => sectionRefs.current['cash-flow'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Cash Flows</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores / View Standalone</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2020</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2021</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">TTM</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Cash from Operating Activity</td>
                  <td className="px-3 py-2 text-right text-gray-900">45</td>
                  <td className="px-3 py-2 text-right text-gray-900">55</td>
                  <td className="px-3 py-2 text-right text-gray-900">65</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">75</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-gray-900">77.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Cash from Investing Activity</td>
                  <td className="px-3 py-2 text-right text-red-600">-30</td>
                  <td className="px-3 py-2 text-right text-red-600">-35</td>
                  <td className="px-3 py-2 text-right text-red-600">-40</td>
                  <td className="px-3 py-2 text-right text-red-600">-45</td>
                  <td className="px-3 py-2 text-right text-red-600">-50</td>
                  <td className="px-3 py-2 text-right text-red-600">-55</td>
                  <td className="px-3 py-2 text-right text-red-600">-52.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Cash from Financing Activity</td>
                  <td className="px-3 py-2 text-right text-red-600">-10</td>
                  <td className="px-3 py-2 text-right text-red-600">-15</td>
                  <td className="px-3 py-2 text-right text-red-600">-20</td>
                  <td className="px-3 py-2 text-right text-red-600">-20</td>
                  <td className="px-3 py-2 text-right text-red-600">-20</td>
                  <td className="px-3 py-2 text-right text-red-600">-20</td>
                  <td className="px-3 py-2 text-right text-red-600">-20</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900 font-semibold">Net Cash Flow</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                  <td className="px-3 py-2 text-right text-gray-900 font-semibold">5</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Ratios Table */}
        <div id="ratios" ref={el => sectionRefs.current['ratios'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Ratios</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores / View Standalone</p>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2020</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2021</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">TTM</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Debtor Days</td>
                  <td className="px-3 py-2 text-right text-gray-900">45</td>
                  <td className="px-3 py-2 text-right text-gray-900">42</td>
                  <td className="px-3 py-2 text-right text-gray-900">40</td>
                  <td className="px-3 py-2 text-right text-gray-900">38</td>
                  <td className="px-3 py-2 text-right text-gray-900">36</td>
                  <td className="px-3 py-2 text-right text-gray-900">35</td>
                  <td className="px-3 py-2 text-right text-gray-900">36.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Inventory Days</td>
                  <td className="px-3 py-2 text-right text-gray-900">60</td>
                  <td className="px-3 py-2 text-right text-gray-900">58</td>
                  <td className="px-3 py-2 text-right text-gray-900">56</td>
                  <td className="px-3 py-2 text-right text-gray-900">54</td>
                  <td className="px-3 py-2 text-right text-gray-900">52</td>
                  <td className="px-3 py-2 text-right text-gray-900">50</td>
                  <td className="px-3 py-2 text-right text-gray-900">52</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Days Payables</td>
                  <td className="px-3 py-2 text-right text-gray-900">30</td>
                  <td className="px-3 py-2 text-right text-gray-900">28</td>
                  <td className="px-3 py-2 text-right text-gray-900">26</td>
                  <td className="px-3 py-2 text-right text-gray-900">24</td>
                  <td className="px-3 py-2 text-right text-gray-900">22</td>
                  <td className="px-3 py-2 text-right text-gray-900">20</td>
                  <td className="px-3 py-2 text-right text-gray-900">22</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Cash Conversion Cycle</td>
                  <td className="px-3 py-2 text-right text-gray-900">75</td>
                  <td className="px-3 py-2 text-right text-gray-900">72</td>
                  <td className="px-3 py-2 text-right text-gray-900">70</td>
                  <td className="px-3 py-2 text-right text-gray-900">68</td>
                  <td className="px-3 py-2 text-right text-gray-900">66</td>
                  <td className="px-3 py-2 text-right text-gray-900">65</td>
                  <td className="px-3 py-2 text-right text-gray-900">66.5</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Working Capital Days</td>
                  <td className="px-3 py-2 text-right text-gray-900">90</td>
                  <td className="px-3 py-2 text-right text-gray-900">88</td>
                  <td className="px-3 py-2 text-right text-gray-900">86</td>
                  <td className="px-3 py-2 text-right text-gray-900">84</td>
                  <td className="px-3 py-2 text-right text-gray-900">82</td>
                  <td className="px-3 py-2 text-right text-gray-900">80</td>
                  <td className="px-3 py-2 text-right text-gray-900">82</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">ROCE %</td>
                  <td className="px-3 py-2 text-right text-gray-900">27</td>
                  <td className="px-3 py-2 text-right text-gray-900">25</td>
                  <td className="px-3 py-2 text-right text-gray-900">23</td>
                  <td className="px-3 py-2 text-right text-gray-900">21</td>
                  <td className="px-3 py-2 text-right text-gray-900">19</td>
                  <td className="px-3 py-2 text-right text-gray-900">17</td>
                  <td className="px-3 py-2 text-right text-gray-900">5</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Shareholding Pattern Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Shareholding Pattern</h2>
              <p className="text-sm text-gray-600">Numbers in percentages</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Quarterly</button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Yearly</button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">TRADES</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2022</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2023</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Dec 2024</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Mar 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Jun 2025</th>
                  <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase">Sep 2025</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 text-gray-900">Promoters</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.62</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.65</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.68</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.70</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.72</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.75</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.78</td>
                  <td className="px-3 py-2 text-right text-gray-900">41.80</td>
                  <td className="px-3 py-2 text-right text-gray-900">42.00</td>
                  <td className="px-3 py-2 text-right text-gray-900">42.10</td>
                  <td className="px-3 py-2 text-right text-gray-900">42.15</td>
                  <td className="px-3 py-2 text-right text-gray-900">42.23</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">FIIs</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.25</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.30</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.35</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.40</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.45</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.50</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.55</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.60</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.65</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.70</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.75</td>
                  <td className="px-3 py-2 text-right text-gray-900">8.80</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-gray-900">Public</td>
                  <td className="px-3 py-2 text-right text-gray-900">50.13</td>
                  <td className="px-3 py-2 text-right text-gray-900">50.05</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.97</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.90</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.83</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.75</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.67</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.60</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.35</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.20</td>
                  <td className="px-3 py-2 text-right text-gray-900">49.10</td>
                  <td className="px-3 py-2 text-right text-gray-900">48.97</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">The classifications might have changed from Sep 2022 onwards.</p>
          </div>
        </div>

        {/* Documents Section */}
        <div id="documents" ref={el => sectionRefs.current['documents'] = el} className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Documents</h2>
          
          {/* Announcements */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">Recent</button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Important</button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Search</button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">All</button>
            </div>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-3">
                <p className="text-xs text-gray-500 mb-1">02 Jan 2026</p>
                <p className="text-sm text-gray-900">Closure of Trading Window</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <p className="text-xs text-gray-500 mb-1">30 Dec 2025</p>
                <p className="text-sm text-gray-900">Un-Audited Financial Results for The Quarter Ended 30.09.2025</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <p className="text-xs text-gray-500 mb-1">15 Dec 2025</p>
                <p className="text-sm text-gray-900">Board Meeting Intimation for Results</p>
              </div>
            </div>
          </div>

          {/* Annual Reports */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Annual reports</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Financial Year 2025</span>
                <button className="text-xs text-blue-600 hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Financial Year 2024</span>
                <button className="text-xs text-blue-600 hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Financial Year 2023</span>
                <button className="text-xs text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>

          {/* Credit Ratings */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Credit ratings</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Rating update 2024</span>
                <button className="text-xs text-blue-600 hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Rating update 2023</span>
                <button className="text-xs text-blue-600 hover:underline">View</button>
              </div>
            </div>
          </div>

          {/* Concalls */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Concalls</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Mar 2024</span>
                <div className="flex gap-2">
                  <button className="text-xs text-blue-600 hover:underline">Transcript</button>
                  <button className="text-xs text-blue-600 hover:underline">Audio</button>
                  <button className="text-xs text-blue-600 hover:underline">PPT</button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Nov 2023</span>
                <div className="flex gap-2">
                  <button className="text-xs text-blue-600 hover:underline">Transcript</button>
                  <button className="text-xs text-blue-600 hover:underline">Audio</button>
                  <button className="text-xs text-blue-600 hover:underline">PPT</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  ) 
} 
export default CompanyDetailPage;


