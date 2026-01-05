import React from 'react'
import Layout from '../layout/Layout'

function GuideToCreatingScreens() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guide to creating screens</h1>
          <p className="text-gray-600 mb-6">This guide walks through creating screens step-by-step, with screenshots and headings following the reference layout.</p>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Query building</h2>
            <div className="border border-gray-200 rounded-md overflow-hidden mb-3">
              <div className="h-56 bg-gray-100 flex items-center justify-center">
            
                <img
                    src="https://i.imgur.com/I2YNiSR.gif"
                    alt="Step 1 Query Building"
                    className="h-full w-auto object-contain"
                />
            
            
            {/* https://i.imgur.com/I2YNiSR.gif */}
            

                {/* Screenshot placeholder */}
                
                </div>
            
            
            </div>
            <p className="text-sm text-gray-600">Use the query editor to assemble your search using ratios and logical operators.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Add or adjust columns</h2>
            <div className="border border-gray-200 rounded-md overflow-hidden mb-3">
              <div className="h-56 bg-gray-100 flex items-center justify-center">
                
                <img
                    // src="https://i.imgur.com/I2YNiSR.gif"

                    src="https://i.imgur.com/hsQWfNq.gif"
                    
                    alt="Step 2 Add or adjust columns"
                    
                    className="h-full w-auto object-contain"
                />
                

                {/* Screenshot placeholder */}
                
                
                </div>
            
            
            </div>
            <p className="text-sm text-gray-600">Select which ratios and columns you want visible in your results table.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Save your screen</h2>
            <div className="border border-gray-200 rounded-md overflow-hidden mb-3">
              <div className="h-56 bg-gray-100 flex items-center justify-center">
                
                <img
                    // src="https://i.imgur.com/I2YNiSR.gif"
                    
                    src="https://i.imgur.com/TFORP55.png"
                    
                    alt="Step 3  Save your screen"
                    
                    className="h-full w-auto object-contain"
                />


                {/* Screenshot placeholder */}
                
                
                </div>
            </div>
            <p className="text-sm text-gray-600">Give the screen a name and description then save it for future use.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">More tips</h2>
            <p className="text-sm text-gray-600">Adjust filters, experiment with periods and growth calculations, and build from presets if needed.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default GuideToCreatingScreens
