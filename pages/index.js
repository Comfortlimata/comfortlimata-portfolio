import Head from 'next/head';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Portfolio from '../src/components/Portfolio';
import AnimatedPortfolio from '../src/components/AnimatedPortfolio';
import Testimonials from '../src/components/Testimonials';
import ReviewSection from '../src/components/ReviewSection';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="bg-dark-bg text-white font-sans overflow-x-hidden">
      <Head>
        <title>Comfort Limata | Creative Developer</title>
        <meta name="description" content="A visually striking portfolio for a modern developer." />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* Hidden Netlify form for reviews */}
      <form name="reviews" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="number" name="rating" />
        <textarea name="message"></textarea>
        <input type="text" name="date" />
      </form>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <AnimatedPortfolio />
        <Testimonials />
        <ReviewSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}