import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // To access location state
import Header from "./Header";  // Header Component
import Hero from "./Hero";      // Hero Section Component
import FashionPage from "./FashionPage"; // FashionPage Component
import ContactUs from "./ContactUs";     // ContactUs Component

const Layout = () => {
  // Create refs for the sections
  const reviews1Ref = useRef(null);
  const service1Ref = useRef(null);

  const location = useLocation();

  // Scroll to the appropriate section based on the URL
  useEffect(() => {
    if (location.hash === "#reviews1" && reviews1Ref.current) {
      reviews1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#service1" && service1Ref.current) {
      service1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* Header with navigation functionality */}
      <Header />

      {/* Main content */}
      <Hero />

      {/* FashionPage with refs for reviews and service */}
      <FashionPage reviews1Ref={reviews1Ref} service1Ref={service1Ref} />

      {/* ContactUs section */}
      <ContactUs />
    </div>
  );
};

export default Layout;
