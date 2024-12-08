import { SignUp } from '@clerk/nextjs'


export default function Page() {
  return (
    <section className="bg-gray-50">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Hero Section */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Background"
            src="/background.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
          <div className="relative hidden lg:block lg:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Welcome to MSM 🦑
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Create Your Own Free Courses and Share with Friends.
            </p>
          </div>
        </section>

        {/* Sign-up Section */}
        <main className="flex items-center justify-center px-8 py-16 sm:px-12 lg:col-span-7 lg:px-16 lg:py-24 xl:col-span-6 bg-gradient-to-r from-gray-800  to-black">
          <div className="w-full max-w-md space-y-6">
            {/* Mobile Hero Text */}
            <div className="lg:hidden text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome to MSM 🦑
              </h1>
              <p className="mt-4 text-gray-600">
                Create Your Own Free Courses and Share with Friends.
              </p>
            </div>    
              <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
