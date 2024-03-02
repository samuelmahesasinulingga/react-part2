import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import About from "./assets/About";
import Menu from "./assets/Menu";
import Footer from "./assets/Footer";
import FooterSocialMedia from "./assets/FooterSocialMedia";

function App() {
  return (
    <>
      <body className="min-h-screen bg-primary">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Footer />
          <FooterSocialMedia />
        </main>
      </body>
    </>
  )
}

export default App