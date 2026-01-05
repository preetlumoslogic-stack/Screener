import { Link } from 'react-router-dom'

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last updated July 01, 2018</p>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <p className="mb-6">
                Thank you for being part of the Screener.in community (Mittal Analytics Private Limited). We are committed to 
                protecting your personal information and your right to privacy. If you have any questions or concerns about this 
                privacy notice or our practices with regard to your personal information, please contact us at{' '}
                <a href="mailto:support@screener.in" className="text-blue-600 hover:underline">support@screener.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>What information do we collect?</li>
                <li>How do we use your information?</li>
                <li>Will your information be shared with anyone?</li>
                <li>Do we use cookies and other tracking technologies?</li>
                <li>How long do we keep your information?</li>
                <li>How do we keep your information safe?</li>
                <li>Do we collect information from minors?</li>
                <li>What are your privacy rights?</li>
                <li>Controls for do-not-track features</li>
                <li>Do we make updates to this policy?</li>
                <li>How can you contact us about this policy?</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What information do we collect?</h2>
              <p>
                We collect limited information from public databases, marketing partners, and other outside sources. This includes 
                social media profile information. We use this information to improve our services and provide you with a better 
                experience on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How do we use your information?</h2>
              <p className="mb-4">
                We process your information for purposes based on legitimate business interests, the fulfillment of our contract 
                with you, compliance with our legal obligations, and/or your consent. We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process</li>
                <li>To send administrative information to you</li>
                <li>To fulfill and manage your orders</li>
                <li>To request feedback</li>
                <li>To protect our Sites</li>
                <li>To enforce our terms, conditions and policies for business purposes</li>
                <li>To respond to legal requests and prevent harm</li>
                <li>To deliver targeted advertising to you</li>
                <li>To improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Will your information be shared with anyone?</h2>
              <p className="mb-4">
                We only share information with your consent, to comply with laws, to provide you with services, to protect your 
                rights, or to fulfill business obligations. We may process or share your data that we hold based on the following 
                legal basis:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Compliance with Laws:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li><strong>Vital Interests and Legal Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
                <li><strong>Vendors, Consultants and Other Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy.</li>
                <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Do we use cookies and other tracking technologies?</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our 
                Cookie Notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How long do we keep your information?</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this 
                privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or 
                other legal requirements). No purpose in this policy will require us keeping your personal information for longer 
                than the period of time in which users have an account with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How do we keep your information safe?</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of 
                any personal information we process. However, please also remember that we cannot guarantee that the internet itself 
                is 100% secure. Although we will do our best to protect your personal information, transmission of personal 
                information to and from our Sites is at your own risk. You should only access the services within a secure environment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do we collect information from minors?</h2>
              <p>
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you 
                represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such 
                minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age 
                has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from 
                our records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. What are your privacy rights?</h2>
              <p className="mb-4">
                In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. 
                These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request 
                rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, 
                to data portability. In certain circumstances, you may also have the right to object to the processing of your 
                personal information.
              </p>
              <p>
                <strong>Opting out of emails:</strong> You can unsubscribe from our marketing email list at any time by clicking 
                on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will 
                then be removed from the marketing email list – however, we will still need to send you service-related emails 
                that are necessary for the administration and use of your account. To otherwise opt-out, you may:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your account settings and update your preferences.</li>
                <li>Contact us using the contact information provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Controls for do-not-track features</h2>
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature 
                or setting you can activate to signal your privacy preference not to have data about your online browsing activities 
                monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals 
                has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that 
                automatically communicates your choice not to be tracked online.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Do we make updates to this policy?</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" 
                date and the updated version will be effective as soon as it is accessible. If we make material changes to this 
                privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you 
                a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting 
                your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. How can you contact us about this policy?</h2>
              <p className="mb-4">
                If you have questions or comments about this policy, you may email us at{' '}
                <a href="mailto:support@screener.in" className="text-blue-600 hover:underline">support@screener.in</a> or contact us by post at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="font-semibold mb-2">Mittal Analytics Private Limited</p>
                <p>4F-403, Shalimar Iridium,</p>
                <p>Vibhuti Khand, Gomtinagar,</p>
                <p>Lucknow, UP - 226010</p>
                <p>India</p>
              </div>
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

export default PrivacyPage

