import Body from "./components/Body";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import useBanner from "./hooks/useBanner";

function App() {
  const { addBanner, banners, clearBanner } = useBanner("testing");

  function handleCTA(evt) {
    evt.preventDefault();
    addBanner("Your call has been scheduled!");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <Banner banners={banners} clearBanner={clearBanner} />
      <Header handleCTA={handleCTA} />
      <Body handleCTA={handleCTA} />
      <Testimonials handleCTA={handleCTA} />
      <Footer />
    </div>
  );
}

export default App;
