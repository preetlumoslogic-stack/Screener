import { Link } from 'react-router-dom'

function ChangelogPage() {
  const changelog = [
    {
      month: 'January 2026',
      title: 'Added ISIN Codes on CSV Export',
      description: "We've added ISIN codes as a default column in screen results and watchlist CSV downloads, enabling smoother integrations with other platforms and workflows.",
      image: 'https://cdn-media.screener.in/attachments/2026-01-04/1767497750-CleanShot%202026-01-04%20at%2009.05.07@2x.png'
    },
    {
      month: 'December 2025',
      title: 'Enhanced Navigation Visibility',
      description: 'We have highlighted the rows while navigating Watchlists and Screens for better visibility.',
      image: 'https://cdn-media.screener.in/attachments/2025-12-24/1766590279-CleanShot%202025-12-24%20at%2021.00.57@2x.png'
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
      image: 'https://cdn-media.screener.in/attachments/2025-11-20/1763618085-CleanShot%202025-11-20%20at%2011.21.16@2x.png'
    },
    {
      month: 'October 2025',
      title: 'Watchlist Filter in Concalls Page',
      description: 'Now, using the new "watchlist filter", you can quickly view concalls and presentations from your Watchlist.',
      image: 'https://cdn-media.screener.in/attachments/2025-10-31/1761924675-CleanShot%202025-10-31%20at%2021.00.08@2x.png'
    },
    {
      month: 'September 2025',
      title: 'Improved Access to Transcript Notes!',
      description: 'You no longer need to visit the company page to read the transcript notes. You can now directly view and skim through the summaries right from the Concalls Page.',
      image: 'https://cdn-media.screener.in/attachments/2025-09-06/1757134467-CleanShot%202025-09-06%20at%2010.16.23@2x.png '
    },
    {
      month: 'July 2025',
      title: 'Introducing Screener AI',
      description: "We've integrated AI into our platform to help you work smarter and faster. Screener AI intelligently reads company documents - like Annual reports and Earnings call transcripts - and extracts key insights and answers to your questions in seconds. Whether you're analyzing companies or searching for specific data points, Screener AI delivers accurate, professional-grade information with ease. Empower your research with instant, AI-driven clarity.",
      image: 'https://cdn-media.screener.in/attachments/2025-07-08/1751955845-CleanShot%202025-07-08%20at%2011.53.49@2x.png'
      
    },
    {
      month: 'June 2025',
      title: 'Multi-Level Industry Classification',
      description: 'We have upgraded our industry classification to a four-level framework, providing more granular categorization of companies.',
      image: 'https://cdn-media.screener.in/attachments/2025-06-21/1750496655-CleanShot%202025-06-21%20at%2014.33.39@2x.png'
    }
  ]



  // Use direct URLs for changelog images. You can set Vite env `VITE_CHANGELOG_IMAGE_BASE`
  // to override the default base URL. If an entry's `image` is already a full URL
  // (starts with http/https) it will be used as-is.
  const IMAGE_BASE_URL = import.meta.env.VITE_CHANGELOG_IMAGE_BASE || 'https://www.screener.in/docs/changelog'

  const getImageUrl = (imageRef) => {
    if (!imageRef) return null
    // If already an absolute URL, use it directly
    if (typeof imageRef === 'string' && /^(https?:)?\/\//i.test(imageRef)) return imageRef
    // If the entry provides a path starting with '/', use it as absolute path
    if (typeof imageRef === 'string' && imageRef.startsWith('/')) return imageRef
    // Otherwise assume it's a name and build the URL from the base + .png
    return `${IMAGE_BASE_URL}/${imageRef}.png`
  }


  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Docs</Link> / <span className="text-gray-900">Change Log</span>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Change Log</h1>

         
          
          <div className="space-y-16">
            {changelog.map((entry, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">{entry.month}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      {entry.title}
                      <svg className="w-5 h-5 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </h2>
                  </div>
                </div>
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
                
                {/* Screenshot - responsive image display */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mt-6 border border-gray-200">
                  <div className="bg-white p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50">
                    {(() => {
                      const url = getImageUrl(entry.image)
                      if (!url) {
                        return (
                          <div className="p-8 flex items-center justify-center min-h-[300px] bg-gray-50">
                            <div className="text-center">
                              <p className="text-gray-400 text-sm mb-2">Screenshot: {entry.image}</p>
                              <p className="text-gray-300 text-xs">Image will appear here when uploaded</p>
                            </div>
                          </div>
                        )
                      }

                      return (
                        <img
                          src={url}
                          alt={entry.title}
                          className="w-full h-auto max-h-[480px] object-contain"
                          onError={(e) => {
                            // hide broken image and show placeholder
                            e.currentTarget.style.display = 'none'
                            const next = e.currentTarget.nextSibling
                            if (next) next.style.display = 'flex'
                          }}
                        />
                      )
                    })()}

                    <div className="p-8 flex items-center justify-center min-h-[300px] bg-gray-50 hidden">
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-2">Screenshot: {entry.image}</p>
                        <p className="text-gray-300 text-xs">Image will appear here when uploaded</p>
                      </div>
                    </div>
                  </div>
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
              {/* Prev */}
            </button>
            
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm font-medium">
                
                {/* 1 */}
                
                </button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                {/* 2 */}
                </button>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                {/* 3 */}
                </button>
              <span className="px-2 text-gray-500">
                
                {/* ... */}
                
                </span>
              <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-medium">
                {/* 14 */}
                
                </button>
            </div>
            
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              {/* Next */}
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

