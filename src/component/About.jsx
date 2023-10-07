import React from 'react'


function About() {
    return (
        <div id="about" className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="text-gray-700">
              We are a team of passionate individuals dedicated to creating amazing web applications.
            </p>
            <div className="mt-4">
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      );
    
}

export default About;