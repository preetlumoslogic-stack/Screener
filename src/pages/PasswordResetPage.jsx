import { Link, useNavigate } from 'react-router-dom'

function PasswordResetPage() {
  const navigate = useNavigate()

  const handleEmailReset = (e) => {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Password reset</h1>
          
          <form onSubmit={handleEmailReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700"
              >
                EMAIL RESET LINK
              </button>
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="w-full bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50"
              >
                GO BACK TO LOGIN
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6">
          <Link 
            to="/login" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PasswordResetPage

