import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyData } from '../data/companies'

function CompanyDetailPage() {
  const { symbol } = useParams()
  
  // In a real app, you'd fetch this based on symbol
  const company = companyData.find(c => c.symbol === symbol.toUpperCase()) || companyData[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <Link to={`/company/${company.symbol}`} className="px-4 py-3 text-sm font-medium text-gray-700 border-b-2 border-purple-600">
              {company.name}
            </Link>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Chart</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-purple-600">Analysis</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Peers</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Quarters</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Profit & Loss</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Balance Sheet</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Cash Flow</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Ratios</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Investors</button>
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">Documents</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Company Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                <span className="text-sm text-green-600 font-medium">{company.change}%</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{company.website}</p>
              <p className="text-sm text-gray-600">
                {company.bse} | {company.nse}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                EXPORT TO EXCEL
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700">
                + FOLLOW
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Market Cap</p>
              <p className="text-lg font-semibold text-gray-900">{company.marketCap}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Stock P/E</p>
              <p className="text-lg font-semibold text-gray-900">{company.pe}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROCE</p>
              <p className="text-lg font-semibold text-gray-900">{company.roce}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Current Price</p>
              <p className="text-lg font-semibold text-gray-900">{company.currentPrice}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">High/Low</p>
              <p className="text-lg font-semibold text-gray-900">{company.highLow}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Book Value</p>
              <p className="text-lg font-semibold text-gray-900">{company.bookValue}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Dividend Yield</p>
              <p className="text-lg font-semibold text-gray-900">{company.dividendYield}%</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ROE</p>
              <p className="text-lg font-semibold text-gray-900">{company.roe}%</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">1M</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">3M</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">6M</button>
              <button className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">1Y</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">3Y</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">5Y</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">10Y</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">Max</button>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">Price</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">P/E Ratio</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded">More</button>
            </div>
          </div>
          
          {/* Placeholder for chart */}
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-400">Chart visualization would go here</p>
          </div>
        </div>

        {/* Pros & Cons */}
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

        {/* Peer Comparison */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Peer comparison</h2>
          <p className="text-sm text-gray-600 mb-4">
            {company.sector} &gt; {company.industry}
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">S.No.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CMP Rs.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">P/E</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mar Cap Rs.Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ROCE %</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {company.peers.map((peer, index) => (
                  <tr key={index} className={peer.name === company.name ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600">{peer.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{peer.cmp}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{peer.pe}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{peer.marketCap}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{peer.roce}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quarterly Results */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Results</h2>
          <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores / View Standalone</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quarter</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operating Profit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net Profit</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">EPS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {company.quarterlyResults.map((quarter, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{quarter.period}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{quarter.sales}</td>
                    <td className={`px-4 py-3 whitespace-nowrap text-sm ${quarter.operatingProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {quarter.operatingProfit}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{quarter.netProfit}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{quarter.eps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Statements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Profit & Loss */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Profit & Loss</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Sales</span>
                <span className="font-medium">{company.annualSales}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Net Profit</span>
                <span className="font-medium">{company.annualProfit}</span>
              </div>
            </div>
          </div>

          {/* Balance Sheet */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Balance Sheet</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Assets</span>
                <span className="font-medium">{company.totalAssets}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Liabilities</span>
                <span className="font-medium">{company.totalLiabilities}</span>
              </div>
            </div>
          </div>

          {/* Cash Flow */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cash Flows</h2>
            <p className="text-sm text-gray-600 mb-4">Consolidated Figures in Rs. Crores</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Net Cash Flow</span>
                <span className="font-medium">{company.netCashFlow}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetailPage

