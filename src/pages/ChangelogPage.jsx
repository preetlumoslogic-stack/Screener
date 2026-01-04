import { Link } from 'react-router-dom'

function ChangelogPage() {
  const changelog = [
    {
      month: 'January 2026',
      title: 'Added ISIN Codes on CSV Export',
      description: "We've added ISIN codes as a default column in screen results and watchlist CSV downloads, enabling smoother integrations with other platforms and workflows.",
      image: 'csv-export'
    },
    {
      month: 'December 2025',
      title: 'Enhanced Navigation Visibility',
      description: 'We have highlighted the rows while navigating Watchlists and Screens for better visibility.',
      image: 'highlighted-rows'
    },
    {
      month: 'November 2025',
      title: 'Screener AI Enhancements',
      description: 'We have made several AI enhancements since our launch of Screener AI.',
      subsections: [
        {
          title: 'Significant Cost Reduction',
          description: "Screener AI is now 30% more cheaper and 20% smarter than before. With these improvements, you'll probably find it hard to even spend your credits now! 😊"
        },
        {
          title: 'Share your AI responses',
          description: 'Got an interesting insight from Screener AI? You can now make AI responses public and share them instantly across WhatsApp, Twitter, and more — simply by sharing the link.'
        }
      ],
      image: 'ai-responses'
    },
    {
      month: 'October 2025',
      title: 'Watchlist Filter in Concalls Page',
      description: 'Now, using the new "watchlist filter", you can quickly view concalls and presentations from your Watchlist.',
      image: 'watchlist-filter'
    },
    {
      month: 'September 2025',
      title: 'Improved Access to Transcript Notes!',
      description: 'You no longer need to visit the company page to read the transcript notes. You can now directly view and skim through the summaries right from the Concalls Page.',
      image: 'transcript-notes'
    },
    {
      month: 'July 2025',
      title: 'Introducing Screener AI',
      description: "We've integrated AI into our platform to help you work smarter and faster. Screener AI intelligently reads company documents - like Annual reports and Earnings call transcripts - and extracts key insights and answers to your questions in seconds. Whether you're analyzing companies or searching for specific data points, Screener AI delivers accurate, professional-grade information with ease. Empower your research with instant, AI-driven clarity.",
      image: 'screener-ai'
    },
    {
      month: 'June 2025',
      title: 'Multi-Level Industry Classification',
      description: 'We have upgraded our industry classification to a four-level framework, providing more granular categorization of companies.',
      image: 'industry-classification'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Change Log</h1>
          
          <div className="space-y-16">
            {changelog.map((entry, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
                <div className="text-sm text-gray-500 mb-2">{entry.month}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  {entry.title}
                  <svg className="w-5 h-5 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{entry.description}</p>
                
                {entry.subsections && (
                  <div className="space-y-4 mb-6">
                    {entry.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{subsection.title}</h3>
                        <p className="text-gray-700">{subsection.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[200px] mt-6">
                  <p className="text-gray-400 text-sm">Screenshot: {entry.image}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">2</button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">14</button>
            </div>
            
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Next
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-8 text-right">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangelogPage

