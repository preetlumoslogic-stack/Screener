import { Link } from 'react-router-dom'

function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              We're here to help! If you have any questions, feedback, or need assistance with Screener, 
              please don't hesitate to reach out to us.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                You can leave us a message using the form below or call us directly.
              </p>
              <p className="text-gray-700">
                Phone: <a href="tel:+919043192221" className="text-blue-600 hover:underline">+91-904-319-2221</a> (during office hours)
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-700 mb-4">
                Before contacting us, you might find answers to common questions in our{' '}
                <Link to="/premium" className="text-blue-600 hover:underline">Premium page</Link> or{' '}
                <Link to="/about" className="text-blue-600 hover:underline">About page</Link>.
              </p>
            </div>
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

export default SupportPage

