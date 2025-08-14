import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsJSON = [];

const ReviewSection = () => {
  const [reviews, setReviews] = useState(reviewsJSON);
  const [star, setStar] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const distribution = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const r of reviews) {
      if (r?.stars >= 1 && r?.stars <= 5) counts[r.stars] += 1;
    }
    const total = reviews.length;
    const entries = Object.entries(counts).map(([stars, count]) => ({
      stars: Number(stars),
      count,
      pct: total ? Math.round((count / total) * 100) : 0,
    }));
    entries.sort((a, b) => b.count - a.count || b.stars - a.stars);
    return { total, entries };
  }, [reviews]);

  useEffect(() => {
    if (reviews.length === 0) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [current, reviews.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (star && comment && name) {
      // Submit to Netlify
      const formData = new FormData();
      formData.append('form-name', 'reviews');
      formData.append('name', name);
      formData.append('email', ''); // Optional field
      formData.append('rating', star);
      formData.append('message', comment);
      formData.append('date', new Date().toLocaleDateString());

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });
        
        // Also add to local state for immediate display
        setReviews([
          {
            name,
            stars: star,
            comment,
            date: new Date().toLocaleDateString(),
          },
          ...reviews,
        ]);
        
        // Reset form
        setStar(0);
        setHoverStar(0);
        setComment('');
        setName('');
        setCurrent(0);
        
        alert('Thank you for your review! It has been submitted successfully.');
      } catch (error) {
        console.error('Error submitting review:', error);
        alert('There was an error submitting your review. Please try again.');
      }
    }
  };

  const nextReview = () => reviews.length && setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () => reviews.length && setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-dark-bg rounded-xl shadow-2xl max-w-2xl mx-auto">
      <form className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg mb-10" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-primary mb-4">Leave a Review</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[1,2,3,4,5].map((s) => (
            <span
              key={s}
              className={`text-3xl cursor-pointer ${s <= (hoverStar || star) ? 'text-yellow-400' : 'text-gray-400'} hover:scale-110 transition-transform`}
              onClick={() => setStar(s)}
              onMouseEnter={() => setHoverStar(s)}
              onMouseLeave={() => setHoverStar(0)}
              aria-label={`Rate ${s} star${s > 1 ? 's' : ''}`}
              role="button"
              tabIndex={0}
            >★</span>
          ))}
        </div>
        <input
          className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          rows="3"
          placeholder="Share your thoughts..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-primary text-dark-bg px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition mt-2"
          disabled={!star || !comment || !name}
        >
          Submit Review
        </button>
      </form>

      <div className="mb-4 flex items-center justify-center gap-3">
        <h3 className="text-xl font-semibold text-white">Reviews</h3>
        {reviews.length > 0 ? (
          <span aria-live="polite" className="inline-flex items-center rounded-full bg-white/10 text-white text-xs px-3 py-1 border border-white/10">
            {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </span>
        ) : (
          <span aria-live="polite" className="text-sm text-gray-400">No reviews yet — be the first!</span>
        )}
      </div>
      {reviews.length > 0 && (
        <div className="max-w-xl mx-auto w-full mb-6 space-y-2">
          {distribution.entries.map((e) => (
            <div key={e.stars} className="flex items-center gap-3">
              <span className="w-10 text-sm text-gray-300">{e.stars}★</span>
              <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${e.pct}%` }} />
              </div>
              <span className="w-10 text-right text-xs text-gray-400">{e.count}</span>
            </div>
          ))}
        </div>
      )}
      <div className="relative flex flex-col items-center">
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-primary text-white rounded-full p-2 shadow-lg z-10"
          aria-label="Previous Review"
          disabled={reviews.length === 0}
        >
          &#8592;
        </button>
        <div className="w-full max-w-xl flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg w-full"
            >
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className={`text-xl ${s <= (reviews[current]?.stars || 0) ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                ))}
                <span className="ml-2 text-sm text-gray-400">{reviews[current]?.date || ''}</span>
              </div>
              <p className="text-lg text-white mb-2">{reviews[current]?.comment || 'No reviews yet. Be the first to leave a review.'}</p>
              <div className="text-right text-primary font-bold">{reviews[current]?.name || ''}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-primary text-white rounded-full p-2 shadow-lg z-10"
          aria-label="Next Review"
          disabled={reviews.length === 0}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
