import { useParams } from 'react-router-dom'
import { screenResults } from '../data/screens'

function ScreenDetailPage() {
  const { id, slug } = useParams()
  
  // In a real app, you'd fetch this based on id/slug
  const screen = screenResults.find(s => s.id === parseInt(id)) || screenResults[0]
  const results = screen.results

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{screen.title}</h1>
          <p className="text-gray-600 mb-1">{screen.description}</p>
          <p className="text-sm text-gray-500">by {screen.author}</p>
        </div>

        {/* Results Summary */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {results.length} results found: Showing page 1 of 1
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              INDUSTRY
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              EXPORT
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
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
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CMP Rs.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P/E</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mar Cap Rs.Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Div Yld %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NP Qtr Rs.Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtr Profit Var %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Qtr Rs.Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtr Sales Var %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROCE %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg PAT 10Yrs Rs.Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Div Payout 3Yrs %</th>
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
            <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-purple-700">
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
            <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
              Detailed guide on creating screens
            </a>
            <button className="mt-4 w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-50">
              SHOW ALL RATIOS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreenDetailPage

