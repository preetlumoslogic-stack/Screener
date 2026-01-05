import { Link } from 'react-router-dom'

function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated Aug 01, 2018</p>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Screener.in</h2>
              <p>
                Welcome to Screener.in. These Terms of Service ("Terms") govern your access to and use of our website, 
                services, and applications (collectively, the "Service") provided by Mittal Analytics Private Limited 
                ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms</h2>
              <p>
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, 
                all applicable laws and regulations, and agree that you are responsible for compliance with any applicable 
                local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Screener.in's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
                license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Screener.in's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
                Screener.in at any time. Upon terminating your viewing of these materials or upon the termination of this license, 
                you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer and Warranties</h2>
              <p className="mb-4">
                The materials on Screener.in's website are provided on an 'as is' basis. Screener.in makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
              <p className="mb-4">
                Further, Screener.in does not warrant or make any representations concerning the accuracy, likely results, or 
                reliability of the use of the materials on its website or otherwise relating to such materials or on any sites 
                linked to this site.
              </p>
              <p>
                The data and information provided on Screener.in are generated through automated algorithms and may change without 
                notice. We do not guarantee the accuracy, completeness, or timeliness of any information on the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability for our Services</h2>
              <p>
                In no event shall Mittal Analytics Private Limited, its directors, employees, or agents be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on Screener.in's website, even if Screener.in or a Screener.in authorized 
                representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions 
                do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links</h2>
              <p>
                Screener.in has not reviewed all of the sites linked to its website and is not responsible for the contents of any 
                such linked site. The inclusion of any link does not imply endorsement by Screener.in of the site. Use of any such 
                linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
              <p>
                Screener.in may revise these terms of service for its website at any time without notice. By using this website you 
                are agreeing to be bound by the then current version of these terms of service. It is your responsibility to review 
                these Terms periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably 
                submit to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:support@screener.in" className="text-blue-600 hover:underline">support@screener.in</a>
              </p>
            </section>
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

export default TermsPage

