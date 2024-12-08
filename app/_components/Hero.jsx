import React from 'react'

const Hero = () => {
  return (
    <div>
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
    >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl hover:text-purple-300">
            AI Course Generator
          </h1>
  
          <p className="mt-4 text-lg text-purple-100 sm:text-xl/relaxed">
            Effortlessly generate personalized courses with AI—tailored to your learning goals, preferences, and level.
          </p>
  
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow-lg hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 sm:w-auto"
              href="/dashboard/explore"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Hero