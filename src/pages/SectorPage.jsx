import { useParams } from 'react-router-dom'
import { useState } from 'react'

function SectorPage() {
  const { sectorName } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(25)

  // Decode sector name
  const decodedSectorName = decodeURIComponent(sectorName || '').split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  // Sample construction companies data (matching Image-5)
  const constructionCompanies = [
    { name: 'Larsen & Toubro', cmp: '4163.40', pe: '23.63', marketCap: '572728.24', divYld: '0.82', npQtr: '4676.01', profitVar: '15.62', salesQtr: '67983.53', salesVar: '10.44', roce: '14.69' },
    { name: 'Rail Vikas', cmp: '365.65', pe: '67.18', marketCap: '76280.40', divYld: '0.47', npQtr: '230.52', profitVar: '-19.73', salesQtr: '5132.87', salesVar: '5.52', roce: '14.72' },
    { name: 'NBCC', cmp: '89.45', pe: '12.34', marketCap: '12345.67', divYld: '1.2', npQtr: '234.56', profitVar: '8.5', salesQtr: '3456.78', salesVar: '12.3', roce: '15.8' },
    { name: 'IRB Infra Devi', cmp: '45.20', pe: '8.90', marketCap: '5678.90', divYld: '2.1', npQtr: '123.45', profitVar: '5.2', salesQtr: '2345.67', salesVar: '8.7', roce: '12.4' },
    { name: 'Kajaria Proj', cmp: '234.56', pe: '15.67', marketCap: '12345.67', divYld: '0.9', npQtr: '345.67', profitVar: '12.8', salesQtr: '4567.89', salesVar: '15.2', roce: '18.5' },
    { name: 'PNC International', cmp: '156.78', pe: '11.23', marketCap: '8901.23', divYld: '1.5', npQtr: '189.34', profitVar: '9.1', salesQtr: '3456.78', salesVar: '11.5', roce: '16.2' },
    { name: 'ircon intl', cmp: '78.90', pe: '9.45', marketCap: '4567.89', divYld: '1.8', npQtr: '98.76', profitVar: '6.3', salesQtr: '2345.67', salesVar: '9.8', roce: '13.7' },
    { name: 'Afcons Infrastr', cmp: '123.45', pe: '13.56', marketCap: '6789.01', divYld: '1.1', npQtr: '234.56', profitVar: '10.5', salesQtr: '3456.78', salesVar: '13.2', roce: '17.3' },
    { name: 'Gensol Proj', cmp: '345.67', pe: '18.90', marketCap: '12345.67', divYld: '0.6', npQtr: '456.78', profitVar: '14.2', salesQtr: '5678.90', salesVar: '16.8', roce: '19.6' },
    { name: 'Techno Elec Engg', cmp: '67.89', pe: '7.23', marketCap: '3456.78', divYld: '2.3', npQtr: '78.90', profitVar: '4.8', salesQtr: '1234.56', salesVar: '7.5', roce: '11.9' },
    { name: 'Rites', cmp: '234.56', pe: '14.78', marketCap: '9012.34', divYld: '1.0', npQtr: '345.67', profitVar: '11.2', salesQtr: '4567.89', salesVar: '14.5', roce: '18.1' },
    { name: 'Engineers India', cmp: '189.34', pe: '12.45', marketCap: '7890.12', divYld: '1.3', npQtr: '267.89', profitVar: '8.9', salesQtr: '3456.78', salesVar: '12.1', roce: '15.4' },
    { name: 'NCC', cmp: '156.78', pe: '10.67', marketCap: '5678.90', divYld: '1.6', npQtr: '198.45', profitVar: '7.4', salesQtr: '2345.67', salesVar: '10.8', roce: '14.2' },
    { name: 'Urbangroject', cmp: '45.67', pe: '6.78', marketCap: '2345.67', divYld: '2.5', npQtr: '56.78', profitVar: '3.9', salesQtr: '1234.56', salesVar: '6.2', roce: '10.5' },
    { name: 'Dilip Buildcon', cmp: '234.56', pe: '16.23', marketCap: '10123.45', divYld: '0.8', npQtr: '378.90', profitVar: '13.5', salesQtr: '5678.90', salesVar: '17.2', roce: '20.3' },
    { name: 'KNR Construct', cmp: '345.67', pe: '19.45', marketCap: '11234.56', divYld: '0.7', npQtr: '456.78', profitVar: '15.8', salesQtr: '6789.01', salesVar: '18.5', roce: '21.7' },
    { name: 'Power Mech Proj', cmp: '123.45', pe: '11.89', marketCap: '6789.01', divYld: '1.4', npQtr: '234.56', profitVar: '9.6', salesQtr: '3456.78', salesVar: '13.4', roce: '16.8' },
    { name: 'Waapcos Ontrp', cmp: '89.12', pe: '8.34', marketCap: '4567.89', divYld: '1.9', npQtr: '112.34', profitVar: '5.7', salesQtr: '2345.67', salesVar: '9.1', roce: '12.6' },
    { name: 'ISGEC Heavy', cmp: '456.78', pe: '21.56', marketCap: '13456.78', divYld: '0.5', npQtr: '567.89', profitVar: '17.3', salesQtr: '7890.12', salesVar: '19.8', roce: '22.4' },
    { name: 'PNC Infratech', cmp: '267.89', pe: '15.12', marketCap: '10123.45', divYld: '1.1', npQtr: '389.01', profitVar: '12.4', salesQtr: '5678.90', salesVar: '15.9', roce: '19.2' },
    { name: 'Ashoka Constr', cmp: '178.90', pe: '13.67', marketCap: '8901.23', divYld: '1.2', npQtr: '278.45', profitVar: '10.1', salesQtr: '4567.89', salesVar: '14.2', roce: '17.5' },
    { name: 'Shriram Infr', cmp: '123.45', pe: '10.23', marketCap: '5678.90', divYld: '1.7', npQtr: '189.67', profitVar: '7.8', salesQtr: '2345.67', salesVar: '11.3', roce: '14.9' },
    { name: 'Man Infra', cmp: '234.56', pe: '14.89', marketCap: '9012.34', divYld: '0.9', npQtr: '345.78', profitVar: '11.9', salesQtr: '4567.89', salesVar: '15.6', roce: '18.7' },
    { name: 'Sterling & Wils', cmp: '345.67', pe: '17.34', marketCap: '11234.56', divYld: '0.6', npQtr: '456.89', profitVar: '14.7', salesQtr: '6789.01', salesVar: '18.1', roce: '21.2' },
    { name: 'JMC Projects', cmp: '189.34', pe: '12.78', marketCap: '7890.12', divYld: '1.3', npQtr: '267.12', profitVar: '9.2', salesQtr: '3456.78', salesVar: '12.8', roce: '16.4' },
    { name: 'A.G. Infra Grpp', cmp: '156.78', pe: '11.45', marketCap: '5678.90', divYld: '1.5', npQtr: '198.34', profitVar: '8.1', salesQtr: '2345.67', salesVar: '11.2', roce: '15.1' }
  ]

  // Pagination
  const totalPages = Math.ceil(constructionCompanies.length / resultsPerPage)
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const paginatedCompanies = constructionCompanies.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-600">
          <span>Industries</span>
          <span className="mx-2">/</span>
          <span>{decodedSectorName}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{decodedSectorName}</span>
        </div>

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900">{decodedSectorName} Companies</h1>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            ALL
            <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Results Summary */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {constructionCompanies.length} results found: Showing page {currentPage} of {totalPages}
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-blue-600 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50">
              EXPORT
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
              EDIT COLUMNS
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                    <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CMP Rs.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P/E</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mar Cap Rs. Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Div Yld %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NP Qtr Rs. Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtr Profit Var %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales Qtr Rs. Cr.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qtr Sales Var %</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROCE %</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedCompanies.map((company, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{startIndex + index + 1}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline">
                      <a href={`/company/${company.name.toLowerCase().replace(/\s+/g, '-')}`}>{company.name}</a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.cmp}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.pe}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.marketCap}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.divYld}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.npQtr}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.profitVar}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.salesQtr}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.salesVar}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{company.roce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map((page) => (
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
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Next &gt;
              </button>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Results per page:</span>
            {[10, 25, 50].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setResultsPerPage(num)
                  setCurrentPage(1)
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  resultsPerPage === num
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectorPage

