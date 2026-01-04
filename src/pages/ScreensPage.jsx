import { Link } from 'react-router-dom'
import { screens, sectors } from '../data/screens'

function ScreensPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Stock screens</h1>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
            CREATE NEW SCREEN
          </button>
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

            <button className="w-full py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              SHOW ALL SCREENS
            </button>
          </div>

          {/* Right Column - Browse Sectors */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse sectors</h2>
              <div className="space-y-2">
                {sectors.map((sector, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
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

