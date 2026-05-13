import Hero from '../components/Hero';
import Services from '../components/Services';
import FeatureInfographic from '../components/FeatureInfographic';
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <FeatureInfographic />
            <section id="about">
                <About />
            </section>
            <Clients />
            <Contact />
        </>
    );
};

export default Home;
