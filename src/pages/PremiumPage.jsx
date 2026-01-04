import { Link } from 'react-router-dom'

function PremiumPage() {
  const features = {
    companyAnalysis: [
      { name: 'Screener AI', free: false, premium: 'Unlimited*' },
      { name: 'Follow Companies', free: 'Up to 50 Companies', premium: 'Unlimited*' },
      { name: 'Excel Automation', free: false, premium: true },
      { name: 'Detailed Peer Comparison', free: true, premium: true },
      { name: 'Fundamental Charts', free: true, premium: true },
      { name: 'Stock Alerts', free: '10', premium: '800' },
      { name: 'Key Insights', free: '20 per month', premium: 'Unlimited*' },
      { name: 'Concall Notes', free: '10 per month', premium: 'Unlimited*' },
      { name: 'Segment Results', free: true, premium: true },
      { name: 'Quick Ratios', free: true, premium: true }
    ],
    screening: [
      { name: 'Stock Screens', free: true, premium: true },
      { name: 'Custom Ratios', free: true, premium: true },
      { name: 'Screen Alerts', free: '2', premium: '75' },
      { name: 'Comparison Columns', free: '15', premium: '55' },
      { name: 'Download Results', free: false, premium: true },
      { name: 'Industry Filter', free: false, premium: true }
    ],
    others: [
      { name: 'Search Everywhere', free: true, premium: true },
      { name: 'Phrase Alerts', free: '2', premium: '50' },
      { name: 'Follow People', free: true, premium: '300' },
      { name: 'One-Click Filters', free: true, premium: true },
      { name: 'Emails Delivery', free: 'Delayed', premium: 'Prioritised' },
      { name: 'Multiple Watchlists', free: false, premium: 'Unlimited*' },
      { name: 'Trends of 10,000+ products', free: false, premium: 'Unlimited*' },
      { name: 'Priority Support', free: false, premium: true }
    ]
  }

  const faqs = [
    {
      question: 'How is premium useful?',
      answer: 'Premium gives you unlimited access to advanced features like Screener AI, unlimited company follows, detailed peer comparisons, and priority support to help you make better investment decisions.'
    },
    {
      question: 'Is price inclusive of GST? How can I provide my GST details?',
      answer: 'Yes, the price includes GST. You can provide your GST details during the checkout process or update them later in your account settings.'
    },
    {
      question: 'Can I cancel the purchase and get a refund?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with Premium, you can cancel within 30 days of purchase for a full refund.'
    },
    {
      question: 'What happens if I don\'t renew the subscription?',
      answer: 'If you don\'t renew, your account will revert to the free Hobby Investor plan. You will lose access to premium features but can continue using free features.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Save hours spent in getting data
          </h1>
          <p className="text-lg text-gray-600">
            Get unlimited access to all the features
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {/* Features Column */}
            <div className="p-6">
              <div className="space-y-8">
                {/* Company Analysis */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Company Analysis</h3>
                  <div className="space-y-3">
                    {features.companyAnalysis.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-700">{feature.name}</span>
                          <span className="text-gray-400 cursor-help">ⓘ</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screening */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Screening</h3>
                  <div className="space-y-3">
                    {features.screening.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-700">{feature.name}</span>
                          <span className="text-gray-400 cursor-help">ⓘ</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Others */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Others</h3>
                  <div className="space-y-3">
                    {features.others.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-700">{feature.name}</span>
                          <span className="text-gray-400 cursor-help">ⓘ</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hobby Investor (Free) */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hobby Investor</h3>
                <p className="text-sm text-gray-600">₹0 /year</p>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-600 mb-6">
                CREATE A FREE ACCOUNT
              </button>
              <div className="space-y-8">
                {/* Company Analysis */}
                <div className="space-y-3">
                  {features.companyAnalysis.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.free === false ? (
                        <span className="text-red-500">✕</span>
                      ) : feature.free === true ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-xs text-gray-600">{feature.free}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Screening */}
                <div className="space-y-3">
                  {features.screening.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.free === false ? (
                        <span className="text-red-500">✕</span>
                      ) : feature.free === true ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-xs text-gray-600">{feature.free}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Others */}
                <div className="space-y-3">
                  {features.others.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.free === false ? (
                        <span className="text-red-500">✕</span>
                      ) : feature.free === true ? (
                        <span className="text-green-500">✓</span>
                      ) : (
                        <span className="text-xs text-gray-600">{feature.free}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Investor (Premium) */}
            <div className="p-6 bg-purple-600 text-white relative">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded">
                  Premium Plan
                </span>
              </div>
              <div className="text-center mb-6 mt-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">👑</span>
                  <h3 className="text-lg font-bold">Active Investor</h3>
                </div>
                <p className="text-sm text-white/90">₹4,999 /year</p>
              </div>
              <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 mb-2">
                LOGIN TO BUY
              </button>
              <p className="text-xs text-center text-white/80 mb-6">
                Free Credits worth ₹500
              </p>
              <div className="space-y-8">
                {/* Company Analysis */}
                <div className="space-y-3">
                  {features.companyAnalysis.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.premium === true ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-xs text-white/90">{feature.premium}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Screening */}
                <div className="space-y-3">
                  {features.screening.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.premium === true ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-xs text-white/90">{feature.premium}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Others */}
                <div className="space-y-3">
                  {features.others.map((feature, index) => (
                    <div key={index} className="flex justify-center">
                      {feature.premium === true ? (
                        <span className="text-green-400">✓</span>
                      ) : (
                        <span className="text-xs text-white/90">{feature.premium}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mb-12">
          *Unlimited access: Though there are internal limits on few resource intensive features such as emails and columns, these limits are set pretty high.
        </p>

        {/* FAQs Section */}
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-6 mb-8">
            <div className="text-6xl text-purple-600">?</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Frequently asked questions
              </h2>
              <p className="text-gray-600">Questions that are commonly asked.</p>
            </div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Have more questions?{' '}
              <a href="#" className="text-blue-600 hover:underline">Contact us</a>
            </p>
          </div>
        </div>

        {/* Contribution Section */}
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your contribution keeps us going
              </h2>
              <p className="text-gray-600 mb-6">
                Your support helps us continue building and improving Screener for all investors.
              </p>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  We're currently working on
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Conc</li>
                  <li>• More ratios for screening</li>
                  <li>• Qualitative data</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-400 w-32 h-32 rounded-lg flex items-center justify-center mb-4 relative">
                <span className="text-4xl">↑</span>
                <div className="absolute -top-4 -right-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <div className="absolute -top-2 -left-4">
                  <span className="text-2xl">❤️</span>
                </div>
              </div>
              <button className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">
                LOGIN TO UPGRADE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumPage

