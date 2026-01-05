import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ScreenerAIPage() {
  const navigate = useNavigate()
  const [expandedFaqs, setExpandedFaqs] = useState([0]) // First FAQ expanded by default

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: 'What is Screener AI? How useful is it?',
      answer: 'Screener AI is an intelligent assistant that helps you extract valuable insights from company documents like annual reports, earnings call transcripts, and regulatory filings. It saves hours of research time by providing professional-grade insights in seconds.'
    },
    {
      question: 'How is Screener AI different from other AI tools?',
      answer: 'Screener AI has direct access to company documents, eliminating the need for manual uploads. It understands financial context and provides more relevant, accurate answers specific to Indian stock market analysis.'
    },
    {
      question: 'Is Screener AI paid? What is the pricing?',
      answer: 'Screener AI uses a pay-as-you-use model. You can top up credits as needed. Premium subscribers get ₹500 worth of free credits.'
    },
    {
      question: 'How much does each answer cost?',
      answer: 'The cost depends on the complexity and length of the query. Simple questions cost less, while complex analysis requests may cost more credits.'
    },
    {
      question: 'How can I reduce the costs?',
      answer: 'You can reduce costs by asking more specific questions, using Premium subscription for free credits, and avoiding redundant queries.'
    },
    {
      question: 'How good is it?',
      answer: 'Screener AI uses advanced AI models trained on financial documents. It provides accurate, context-aware answers based on official company filings and documents.'
    },
    {
      question: 'How do I use Screener AI?',
      answer: 'Simply navigate to a company page, click on Screener AI, and ask your question in plain English. No prompt engineering needed!'
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Empower your Research.
          </h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ask Screener AI.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Screener AI has direct access to company filings such as annual reports and earning calls. Just ask and get professional-grade insights in seconds.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => navigate('/register')}
              className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700"
            >
              TRY NOW
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-50"
            >
              TOP UP
            </button>
          </div>
        </div>
      </div>



      {/* AI Interface Screenshot Placeholder - Static Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="relative">

          {/* Video Thumbnail Style Image */}

          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            
            <div
  className="relative aspect-video bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://cdn-static.screener.in/img/ai/ai-video.780622021e3d.png')"
  }}
>


            {/* <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"> */}


{/* 
            style={{
                backgroundImage: "D:\Stock Web\Screnner website\src\assets" 
    }} */}


              {/* Play button overlay to make it look like a video thumbnail */}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
                  
                  {/* <svg classname=" https://cdn-static.screener.in/img/ai/ai-video.780622021e3d.png">
                  
                  </svg>>
                   */}

{/* 
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>   
               */}

                </div>
              </div>

              {/* Preview content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Screener AI</h3>
                    <p className="text-gray-300 text-sm">RACL Geartech Ltd</p>
                  </div>
                  <div className="text-white text-sm">
                    <span className="bg-purple-600 px-3 py-1 rounded-full">5 Documents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* How it works */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Screener AI integrates the best AI models. It gives them structured access to the official documents of the companies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 rounded-lg p-8 mb-4 h-48 flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">📄</div>
              <div className="text-2xl">↑</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No uploads</h3>
            <p className="text-gray-600">We auto-upload the relevant documents.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 rounded-lg p-8 mb-4 h-48 flex flex-col items-center justify-center">
              <div className="bg-white rounded-lg p-4 text-left w-full">
                <p className="text-xs text-gray-600 mb-2">Has the auditor raised any concerns for Adani group?</p>
                <p className="text-xs text-gray-600 mb-2">What does Infosys say about its summary of latest earnings call.</p>
                <p className="text-xs text-gray-600">Give me a summary of latest earnings announcement in Bajaj Auto's AGM?</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No prompt engineering</h3>
            <p className="text-gray-600">Just ask in plain English.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 rounded-lg p-8 mb-4 h-48 flex flex-col items-center justify-center">
              <div className="text-4xl mb-4">💬</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent responses</h3>
            <p className="text-gray-600">Get accurate, context-aware answers.</p>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The assistant you wanted
              </h2>
              <p className="text-gray-600 mb-6">
                Screener AI reads through the documents intelligently and accurately. It extracts the key insights and finds answers you are looking for.
              </p>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-6xl text-center">🔍</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hours of research, done in seconds.
              </h2>
              <p className="text-gray-600 mb-6">
                Cut down the time taken to understand a company. Use the assistant to fetch details while you do the thinking.
              </p>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-6xl text-center">⏰</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Better than the rest */}
      <div className="bg-purple-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Better than the rest</h2>
            <p className="text-lg text-white/90">
              Screener AI has direct access to the company documents. This provides quicker, cheaper and more relevant answers.
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Price</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">OpenAI</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">perplexity</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Gemini</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-purple-600">screenerAI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Monthly Price</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">$200</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">$20</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">$20</td>
                  <td className="px-6 py-4 text-center text-sm text-white bg-purple-600">Pay-as-you-use</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Direct access to company documents?</td>
                  <td className="px-6 py-4 text-center text-sm text-red-500">✕</td>
                  <td className="px-6 py-4 text-center text-sm text-red-500">✕</td>
                  <td className="px-6 py-4 text-center text-sm text-red-500">✕</td>
                  <td className="px-6 py-4 text-center text-sm text-blue-500 bg-purple-600">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Prompt Engineering</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Needs Setup</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Needs Setup</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Needs Setup</span>
                  </td>
                  <td className="px-6 py-4 text-center bg-purple-600">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Just Works!</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    {expandedFaqs.includes(index) && (
                      <p className="text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="ml-4 text-gray-400 hover:text-gray-600 transition-transform"
                  >
                    <svg 
                      className={`w-6 h-6 transition-transform ${expandedFaqs.includes(index) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Credits CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Free credits worth ₹500
          </h2>
          <p className="text-lg text-white/90 mb-8">
            You can do a top-up of the amount you want. Alternatively, you can upgrade to Screener Premium and get ₹500 AI Credits free.
          </p>
          <button 
            onClick={() => navigate('/premium')}
            className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 flex items-center mx-auto"
          >
            <span className="mr-2">💎</span>
            GET PREMIUM
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScreenerAIPage

