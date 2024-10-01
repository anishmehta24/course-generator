import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold  text-primary sm:text-5xl hover:text-secondary">
        AI Course Generator
        {/* <strong className="font-bold text-black sm:block"> Personalised Learning Path, Powered By AI </strong> */}
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Effortlessly generate personalized courses with AI—tailored to your learning goals, preferences, and level.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto hover:bg-secondary"
          href="/dashboard"
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