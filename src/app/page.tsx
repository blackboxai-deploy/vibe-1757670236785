export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
          Welcome to your new Next.js application
        </p>
        
        <div className="text-base text-gray-500 space-y-2">
          <p>Built with Next.js, Tailwind CSS, and modern web technologies</p>
          <p className="text-sm">Ready to start building something amazing? 🚀</p>
        </div>
        
        <div className="pt-8">
          <div className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            Get Started
          </div>
        </div>
      </div>
    </main>
  );
}