function App() {
  return (
    <div className="min-h-screen">
      <header className="py-6">
        <div className="container">
          <h1 className="text-4xl font-bold">Jaypaul Barrow</h1>
        </div>
      </header>

      <main>
        <div className="container">
          {/* Sections will be added here */}
        </div>
      </main>

      <footer className="py-6 mt-auto">
        <div className="container">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jaypaul Barrow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
