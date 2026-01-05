import { Link, useNavigate, useLocation } from 'react-router-dom'
import { screens, sectors } from '../data/screens'
import { useState, useEffect } from 'react'

function ScreensPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSector, setActiveSector] = useState(null)
  
  // Set active sector based on URL if on sector page
  useEffect(() => {
    const pathParts = location.pathname.split('/')
    if (pathParts[1] === 'sector' && pathParts[2]) {
      const sectorFromUrl = decodeURIComponent(pathParts[2]).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
      setActiveSector(sectorFromUrl)
    }
  }, [location])

  // Popular stock screens data
  const popularStockScreens = [
    { id: 6997, slug: 'fii-buying', title: 'FII Buying', description: 'Companies where Foreign Institutional Investors are increasing their stake.' },
    { id: 7008, slug: 'the-bull-cartel', title: 'The Bull Cartel', description: 'Companies with strong quarterly results.' },
    { id: 7001, slug: 'magic-formula', title: 'Magic Formula', description: 'Joel Greenblatt\'s magic formula for finding good companies at good prices.' },
    { id: 6995, slug: 'companies-creating-new-high', title: 'Companies creating new high', description: 'Stocks that are making new 52-week highs.' },
    { id: 6994, slug: 'low-on-10-year-average-earnings', title: 'Low on 10 year average earnings', description: 'Graham liked to value stocks based on average earnings of multiple years.' },
    { id: 7012, slug: 'highest-dividend-yield-shares', title: 'Highest Dividend Yield Shares', description: 'Companies offering the highest dividend yields.' },
    { id: 8000, slug: 'growth-stocks', title: 'Growth Stocks', description: 'Companies with consistent revenue and profit growth.' },
    { id: 6998, slug: 'capacity-expansion', title: 'Capacity expansion', description: 'Companies that are expanding their production capacity.' },
    { id: 7005, slug: 'golden-crossover', title: 'Golden Crossover', description: 'Stocks where 50-day moving average crosses above 200-day moving average.' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Stock screens</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Screens */}
          <div className="lg:col-span-2 space-y-8">
            {/* Popular Themes */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular themes</h2>
              <div className="space-y-3">
                {screens.popularThemes.map((screen, index) => (
                  <Link
                    key={index}
                    to={`/screens/${screen.id}/${screen.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                    <p className="text-xs text-gray-600">{screen.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Popular Formulas */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular formulas</h2>
              <div className="space-y-3">
                {screens.popularFormulas.map((screen, index) => (
                  <Link
                    key={index}
                    to={`/screens/${screen.id}/${screen.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                    <p className="text-xs text-gray-600">{screen.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Price or Volume */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Price or Volume</h2>
              <div className="space-y-3">
                {screens.priceVolume.map((screen, index) => (
                  <Link
                    key={index}
                    to={`/screens/${screen.id}/${screen.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                    <p className="text-xs text-gray-600">{screen.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Quarterly Results */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quarterly results</h2>
              <div className="space-y-3">
                {screens.quarterlyResults.map((screen, index) => (
                  <Link
                    key={index}
                    to={`/screens/${screen.id}/${screen.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                    <p className="text-xs text-gray-600">{screen.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Valuation Screens */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Valuation Screens</h2>
              <div className="space-y-3">
                {screens.valuationScreens.map((screen, index) => (
                  <Link
                    key={index}
                    to={`/screens/${screen.id}/${screen.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                    <p className="text-xs text-gray-600">{screen.description}</p>
                  </Link>
                ))}
              </div>
            </section>


            {/* Popular stock screens */}
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular stock screens</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-4">Popular screens commonly used by investors.</p>
                <div className="grid grid-cols-1 gap-3">
                  {popularStockScreens.map((screen, index) => (
                    <Link
                      key={index}
                      to={`/screens/${screen.id}/${screen.slug}`}
                      className="block bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{screen.title}</h3>
                      <p className="text-xs text-gray-600">{screen.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <button 
              onClick={() => navigate('/screens')}
              className="w-full py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              SHOW ALL SCREENS &gt;
            </button>
          </div>

          {/* Right Column - Browse Sectors */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <button 
                onClick={() => navigate('/register')}
                className="w-full mb-6 bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                CREATE NEW SCREEN
              </button>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse sectors</h2>
              <div className="space-y-2">
                {sectors.map((sector, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveSector(sector)
                      navigate(`/sector/${encodeURIComponent(sector.toLowerCase().replace(/\s+/g, '-'))}`)
                    }}
                    className={`w-full px-3 py-2 text-left text-sm rounded border transition-all ${
                      activeSector === sector 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreensPage

