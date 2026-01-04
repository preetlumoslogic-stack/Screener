import { Link } from 'react-router-dom'

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Screener was born out of a simple need - to make stock analysis easier and faster. 
              Our journey began when our father, a Chartered Accountant with decades of experience 
              in financial analysis, spent countless hours manually analyzing companies using Excel.
            </p>
            
            <p>
              Ayush, one of the founders, was always fascinated by market mis-pricings and various 
              financial scenarios. He wanted a tool that could help him quickly identify investment 
              opportunities and analyze companies efficiently.
            </p>
            
            <p>
              Pratyush, the other founder, took on the challenge of automating this process. 
              What started as Excel macros evolved into a full-fledged cloud-based platform - Screener.in. 
              His coding expertise transformed the way investors analyze stocks in India.
            </p>
            
            <p>
              Both founders are Chartered Accountants, bringing deep financial knowledge to the platform. 
              We've also collaborated with{' '}
              <a href="https://www.valuepickr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                ValuePickr.com
              </a>
              {' '}to provide comprehensive stock analysis tools.
            </p>
            
            <p>
              Today, Screener continues to focus on tracking small-cap stocks and providing investors 
              with powerful tools to make informed investment decisions. Our mission is to democratize 
              stock analysis and make professional-grade tools accessible to everyone.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              You can leave us a message at{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                support page
              </Link>
              {' '}or call us at: <a href="tel:+919043192221" className="text-blue-600 hover:underline">+91-904-319-2221</a> (during office hours).
            </p>
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

export default AboutUsPage

