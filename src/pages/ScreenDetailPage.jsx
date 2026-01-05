import { useParams, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { screenResults } from '../data/screens'

function ScreenDetailPage() {
  const { id, slug } = useParams()
  const navigate = useNavigate()
  const [showRatios, setShowRatios] = useState(false)
  const [showIndustry, setShowIndustry] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const containerRef = useRef(null)
  
  // In a real app, you'd fetch this based on id/slug
  const screen = screenResults.find(s => s.id === parseInt(id)) || screenResults[0]
  const results = screen.results

  // Full industry list (label shown includes counts, key used for matching)
  const industries = [
    { key: 'Finance', label: 'Finance (13)' },
    { key: 'Construction', label: 'Construction (9)' },
    { key: 'Commercial Services & Supplies', label: 'Commercial Services & Supplies (8)' },
    { key: 'Industrial Products', label: 'Industrial Products (6)' },
    { key: 'Food Products', label: 'Food Products (5)' },
    { key: 'Agricultural Food & Other Products', label: 'Agricultural Food & Other Products (4)' },
    { key: 'Consumer Durables', label: 'Consumer Durables (4)' },
    { key: 'Realty', label: 'Realty (4)' },
    { key: 'Leisure Services', label: 'Leisure Services (3)' },
    { key: 'IT – Services', label: 'IT – Services (3)' },
    { key: 'Telecom – Services', label: 'Telecom – Services (2)' },
    { key: 'Chemicals & Petrochemicals', label: 'Chemicals & Petrochemicals (2)' },
    { key: 'Paper, Forest & Jute Products', label: 'Paper, Forest & Jute Products (2)' },
    { key: 'Textiles & Apparels', label: 'Textiles & Apparels (2)' },
    { key: 'Ferrous Metals', label: 'Ferrous Metals (1)' },
    { key: 'Auto Components', label: 'Auto Components (1)' },
    { key: 'Consumable Fuels', label: 'Consumable Fuels (1)' },
    { key: 'Power', label: 'Power (1)' },
    { key: 'Fertilizers & Agrochemicals', label: 'Fertilizers & Agrochemicals (1)' },
    { key: 'Non-Ferrous Metals', label: 'Non-Ferrous Metals (1)' },
    { key: 'Industrial Manufacturing', label: 'Industrial Manufacturing (1)' },
    { key: 'Transport Infrastructure', label: 'Transport Infrastructure (1)' },
    { key: 'Transport Services', label: 'Transport Services (1)' },
    { key: 'Healthcare Services', label: 'Healthcare Services (1)' },
    { key: 'Entertainment', label: 'Entertainment (1)' },
    { key: 'IT – Software', label: 'IT – Software (1)' },
    { key: 'Capital Markets', label: 'Capital Markets (1)' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowIndustry(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isAllChecked = selectedIndustries.length === industries.length

  function toggleIndustry(key) {
    setSelectedIndustries(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])
  }

  function toggleCheckAll(checked) {
    if (checked) setSelectedIndustries(industries.map(i => i.key))
    else setSelectedIndustries([])
  }

  // Apply industry filter to results (if none selected, show all results)
  const filteredResults = selectedIndustries.length === 0 ? results : results.filter(c => selectedIndustries.includes(c.industry))

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{screen.title}</h1>
          <p className="text-gray-600 mb-1">{screen.description}</p>
          <p className="text-sm text-gray-500 mb-4">by <button onClick={() => navigate('/register')} className="text-blue-600 hover:underline">{screen.author}</button></p>
          <button
            onClick={() => navigate('/register')}
            className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
          >
            Get Email Updates
          </button>
        </div>

        {/* Results Summary */}
          <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {filteredResults.length} results found: Showing page 1 of 1
          </p>
          <div className="relative flex space-x-2">
            <div className="relative" ref={containerRef}>
              <button
                onClick={() => setShowIndustry(s => !s)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300"
              >
                INDUSTRY
              </button>

              {showIndustry && (
                <div className="absolute mt-2 right-0 w-72 max-h-80 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg z-20 p-3">
                  <div className="flex items-center mb-2">
                    <input id="check-all" type="checkbox" className="mr-2" checked={isAllChecked} onChange={(e) => toggleCheckAll(e.target.checked)} />
                    <label htmlFor="check-all" className="text-sm font-medium">Check All</label>
                  </div>
                  <div className="space-y-2 text-sm">
                    {industries.map(ind => (
                      <label key={ind.key} className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={selectedIndustries.includes(ind.key)} onChange={() => toggleIndustry(ind.key)} />
                        {ind.label}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/register')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300"
            >
              EXPORT
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover:border-blue-300"
            >
              EDIT COLUMNS
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    Name
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    CMP RS.
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    P/E
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    MAR CAP RS.CR.
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    DIV YLD %
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    NP QTR RS.CR.
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    QTR PROFIT VAR %
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    SALES QTR RS.CR.
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    QTR SALES VAR %
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    ROCE %
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    AVG PAT 10YRS RS.CR.
                  </th>
                  <th 
                    onClick={() => navigate('/register')}
                    className="px-4 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 hover:underline"
                  >
                    AVG DIV PAYOUT 3YRS %
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.map((company, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline">
                      <a href={`/company/${company.symbol}`}>{company.name}</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.cmp}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.pe}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.marketCap}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.divYield}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.npQtr}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.profitVar}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.salesQtr}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.salesVar}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.roce}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.avgPAT}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.avgDivPayout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* Search Query Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Search Query</h2>
            <p className="text-sm text-gray-600 mb-4">You can customize the query below:</p>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue={screen.query}
            />
            <div className="mt-4 flex items-center">
              <input type="checkbox" id="latest-results" className="mr-2" />
              <label htmlFor="latest-results" className="text-sm text-gray-700">
                Only companies with Sep 2025 results
              </label>
            </div>
            <button 
              onClick={() => navigate('/register')}
              className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-700"
            >
              RUN THIS QUERY
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Custom query example</h2>
            <pre className="w-full h-32 p-3 bg-gray-50 border border-gray-300 rounded-md text-xs font-mono overflow-auto">
{`Market capitalization > 500 AND
Price to earning < 15 AND
Return on capital employed > 22%`}
            </pre>
            <button onClick={() => navigate('/guides/creating-screens')} className="text-sm text-blue-600 hover:underline mt-2 inline-block">
              Detailed guide on creating screens
            </button>
            <button onClick={() => setShowRatios(s => !s)} className="mt-4 w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50">
              {showRatios ? 'CLOSE RATIOS' : 'SHOW ALL RATIOS'}
            </button>
          </div>
        </div>
    
        
        {/* All Ratios expandable panel (inline dropdown-style) */}
        {showRatios && (
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="text-xs text-gray-500">RECENT</div>
                <div className="flex flex-col space-y-2">
                  {/* sample ratio pills - replicate visual structure from reference */}
                  {['Sales', 'CAGR', 'Profit after tax', 'Market Capitalization', 'Sales growth', 'Return on capital employed', 'Debt to equity', 'EPS'].map((r, i) => (
                    <span key={i} className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-700">{r}</span>
                  ))}
                </div>
              </div>


              <div className="flex items-start justify-center">
                <div className="text-sm text-gray-400">PRECEDING</div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">HISTORICAL</div>
                <div className="flex flex-col space-y-2">
                  <span className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-700">Sales growth 5years</span>
                  <span className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-700">Sales growth 3years</span>
                  <span className="inline-block px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-700">Profit growth 5years</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ScreenDetailPage

