import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import { companies } from '../data/companies'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-gray-900">screener</span>
            <span className="ml-2 text-green-500 text-5xl">|</span>
          </div>
          <p className="text-gray-600 text-lg">
            Stock analysis and screening tool for investors in India.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Or analyse section */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 mb-4">Or analyse:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {companies.map((company, index) => (
              <Link
                key={index}
                to={`/company/${company.symbol}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 rounded-full transition-colors"
              >
                {company.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

