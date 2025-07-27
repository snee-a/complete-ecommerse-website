import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      heading: "Who We Are",
      text: "We are a passionate team committed to building intuitive and modern web solutions. Our mission is to bring ideas to life with design, development, and innovation.",
      image: "https://images.unsplash.com/photo-1582004531564-50f300aae039?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://source.unsplash.com/800x600/?team,people",
    },
    {
      heading: "What We Do",
      text: "From e-commerce platforms to interactive web apps, we offer full-stack development, UI/UX design, and digital branding for modern businesses.",
      image: "https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Our Mission",
      text: "Our mission is to empower individuals and businesses with technology that is accessible, scalable, and sustainable.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Our Vision",
      text: "To be recognized globally as a trusted tech partner for digital transformation and innovation.",
      image: "https://media.istockphoto.com/id/2061836383/photo/items-purchased-through-online-shopping-are-delivered-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=0IJscID8QzuLCXO_3g5qnwrYGX1vynaXJlhivU2e0Qc=",
    },
    {
      heading: "Join Us",
      text: "We’re always looking for creative minds. Whether you're a developer, designer, or marketer – join our journey to build the future!",
      image: "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title" data-aos="fade-down">About Us</h1>
      {sections.map((sec, index) => (
        <div
          key={index}
          className={`about-section ${index % 2 === 0 ? 'left' : 'right'}`}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
        >
          {index % 2 === 0 ? (
            <>
              <div className="about-text">
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
              </div>
              <div className="about-image">
                <img src={sec.image} alt={sec.heading} />
              </div>
            </>
          ) : (
            <>
              <div className="about-image">
                <img src={sec.image} alt={sec.heading} />
              </div>
              <div className="about-text">
                <h2>{sec.heading}</h2>
                <p>{sec.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
