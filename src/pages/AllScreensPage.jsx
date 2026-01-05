import { Link } from 'react-router-dom'
import { useState } from 'react'
import { screens } from '../data/screens'

function AllScreensPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 20

  // Combine all screens
  const allScreens = [
    ...screens.popularThemes,
    ...screens.popularFormulas,
    ...screens.priceVolume,
    ...screens.quarterlyResults,
    ...screens.valuationScreens,
    // Additional popular screens
    { id: 8001, slug: 'buying-fii-buying', title: 'Buying FII buying', description: 'The Bull Cartel Companies with a good quarterly growth. Specially made to keep a track of latest quarterly results. For best results, set an email alert for the screen.' },
    { id: 8002, slug: 'high-growth-high-roe-low-pe', title: 'High Growth High ROE Low PE', description: 'Undervalued companies' },
    { id: 8003, slug: 'benjamin-graham-warren-buffett', title: 'Benjamin Graham and Warren Buffett', description: 'In an article in ET, Dr Vikas V Gupta has explained the rigorous filter that he put the stocks through to identify the value stocks: Step 1: Filter out all companies with sales less than Rs 250 cr. Companies with sales lower than this are...' },
    { id: 8004, slug: 'bluest-of-blue-chips', title: 'Bluest of the Blue Chips', description: 'Large Caps (Mkt Cap > 30000 Cr) with solid profit growth, return of equity and trading at attractive valuations.' },
    { id: 8005, slug: 'value-stocks', title: 'Value Stocks High OPM ROCE Low D/E', description: 'High OPM, ROCE, Low D/E' },
    { id: 8006, slug: 'multibagger-stocks', title: 'Multibagger Stocks', description: 'Stocks having huge potential to be multibaggers' },
    { id: 8007, slug: 'top-100-stocks', title: 'Top 100 stocks', description: 'Top 100 stocks' },
    { id: 8008, slug: 'breakout-stocks', title: 'Breakout stocks', description: 'Within 10% of 52w High, 100% of 52w Low, Volume > 100000 & Price > 10' }
  ]

  // Filter screens based on search term
  const filteredScreens = allScreens.filter(screen =>
    screen.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    screen.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Pagination
  const totalPages = Math.ceil(filteredScreens.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const paginatedScreens = filteredScreens.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Popular Stock Screens</h1>
          
          {/* Search */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search term
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder="e.g. Low PE"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mt-6">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
                Q SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* Screens List */}
        <div className="space-y-6">
          {paginatedScreens.map((screen, index) => (
            <div key={screen.id || index} className="border-b border-gray-200 pb-6">
              <Link
                to={`/screens/${screen.id}/${screen.slug}`}
                className="text-blue-600 hover:underline text-lg font-semibold mb-2 block"
              >
                {screen.title}
              </Link>
              <p className="text-sm text-gray-600">{screen.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <div className="flex space-x-2">
              {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? 'bg-purple-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              {totalPages > 4 && (
                <>
                  <span className="px-2 py-2 text-gray-500">...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentPage === totalPages
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Next &gt;
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllScreensPage

