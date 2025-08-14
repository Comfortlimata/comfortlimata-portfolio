import Head from 'next/head';
import Header from '../src/components/Header';
import ReviewSection from '../src/components/ReviewSection';
import Footer from '../src/components/Footer';

export default function Reviews() {
  return (
    <div className="bg-dark-bg text-white font-sans min-h-screen">
      <Head>
        <title>Reviews | Comfort Limata</title>
        <meta name="description" content="Leave a review for Comfort Limata's work and services." />
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
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Share Your Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your feedback helps me grow and improve. Please take a moment to share your thoughts about working with me.
            </p>
          </div>
          <ReviewSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}