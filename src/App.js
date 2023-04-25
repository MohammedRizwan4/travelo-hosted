import React, { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';

function App() {

    useEffect(() => {
        // const sr = scrollreveal({
        //     origin: "top",
        //     distance: "80px",
        //     duration: 2000,
        //     reset: true
        // })
        // sr.reveal(`
        //     nav,
        //     #hero,
        //     #services,
        //     #recommend,
        //     #testimonials,
        //     footer,
        // `, {
        //     opacity: 0, interval: 300
        // })

        ScrollReveal().reveal('.hero');
        ScrollReveal().reveal('.tagline', { delay: 500 });
        ScrollReveal().reveal('.punchline', { delay: 2000 });
    }, []);

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Services />
            <Recommend />
            <Testimonial />
            <Footer />
        </>
    );
}

export default App;
