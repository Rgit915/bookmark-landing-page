import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
  <main>
    <div className="main-content">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
    </div>
  </main>
  <Footer />
</>

  );
};

export default App;
