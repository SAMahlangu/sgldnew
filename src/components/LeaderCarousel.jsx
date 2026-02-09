import React, { useState } from 'react'

export default function LeaderCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const leaders = [
    {
      name: 'Sarah Johnson',
      role: 'SRC President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=faces',
      quote: 'Student voices matter. Together, we can create real change on campus.'
    },
    {
      name: 'Marcus Williams',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces',
      quote: 'Leadership is about listening first and acting with purpose.'
    },
    {
      name: 'Emily Chen',
      role: 'Student Rep',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=500&fit=crop&crop=faces',
      quote: 'Your concerns are our mission. Let us know what matters to you.'
    },
    {
      name: 'James Okafor',
      role: 'Community Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces',
      quote: 'Community is built on trust, transparency, and shared goals.'
    },
    {
      name: 'Lisa Martinez',
      role: 'Operations Lead',
      image: 'https://images.unsplash.com/photo-1507537362392-8bfc3b3a99d5?w=400&h=500&fit=crop&crop=faces',
      quote: 'Efficient systems, effective support—that\'s how we serve you best.'
    }
  ]

  const next = () => setCurrentIndex((currentIndex + 1) % leaders.length)
  const prev = () => setCurrentIndex((currentIndex - 1 + leaders.length) % leaders.length)

  const current = leaders[currentIndex]

  return (
    <section className="leader-carousel">
      <div className="carousel-content">
        <button className="carousel-btn prev" onClick={prev} aria-label="Previous leader">❮</button>
        
        <div className="carousel-image">
          <img src={current.image} alt={current.name} />
        </div>

        <div className="carousel-text">
          <h3>{current.name}</h3>
          <p className="role">{current.role}</p>
          <blockquote>"{current.quote}"</blockquote>
          <div className="carousel-indicators">
            {leaders.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to leader ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button className="carousel-btn next" onClick={next} aria-label="Next leader">❯</button>
      </div>
    </section>
  )
}
