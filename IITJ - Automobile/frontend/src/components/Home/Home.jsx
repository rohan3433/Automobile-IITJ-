import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <AboutUs />
            <WhyUs />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    );
}

export default Home;