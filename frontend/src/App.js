import { Toaster } from "sonner";
import "@/App.css";

import TornDivider from "./components/TornDivider";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import PhotoStrip from "./components/PhotoStrip";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Ministries from "./components/Ministries";
import Prayer from "./components/Prayer";
import Contribution from "./components/Contribution";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" theme="light" />
      <WhatsAppWidget />

      <div className="site">
        <Header />

        <main className="paper sheet-w my-3 md:my-5">
          <div className="paper-bg" aria-hidden="true" />
          <div className="grain" aria-hidden="true" />

          <div className="paper-content">
            <HeroVideo />
            <PhotoStrip />
            <TornDivider />
            <Manifesto />
            <Services />
            <Events />
            <Gallery />
            <Videos />
            <TornDivider />
            <Ministries />
            <Prayer />
            <Contribution />
            <Location />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
