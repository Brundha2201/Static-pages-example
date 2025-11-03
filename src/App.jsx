function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="react logo" />
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Makam's development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App
