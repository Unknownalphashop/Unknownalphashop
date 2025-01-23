import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTags, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link

// Import the local images
import localImage from "./IMG_5598.JPG"; // Adjust the path as needed
import localImage1 from "./IMG_5595.JPG"; // Adjust the path as needed
import localImage2 from "./IMG_5590.JPG"; // Adjust the path as needed
import localImage3 from "./IMG_5691.JPG"; // Adjust the path as needed
import localImage4 from "./IMG_5590.JPG"; // Adjust the path as needed

// Animations
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF8F2;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
  }
`;

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Include the local images in the mainImages array
  const mainImages = [localImage, localImage1, localImage2,localImage3];

  useEffect(() => {
    const mainImageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 3000);

    return () => clearInterval(mainImageInterval);
  }, [mainImages.length]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        {/* Gradient Background */}
        <GradientBackground />

        {/* Content Wrapper */}
        <ContentWrapper>
          {/* Image Box with Shadow and Overlay Text */}
          <ImageBox>
            {/* Sale Badge */}
            <SaleBadge>
              <FontAwesomeIcon icon={faTags} /> 50% Off!
            </SaleBadge>

            <img
              src={mainImages[currentImageIndex]}
              alt="Main Hero"
            />
            <OverlayText>
              <Heading>
                Elevate Your Style with <br />
                <Highlight>Timeless Elegance</Highlight>
              </Heading>
              <Button onClick={togglePopup}>
                <FontAwesomeIcon icon={faShoppingBag} /> Explore Collection
              </Button>
            </OverlayText>
          </ImageBox>
        </ContentWrapper>

        {/* Popup Modal */}
        {isPopupVisible && (
          <PopupModal>
            <PopupContent>
              <CloseButton onClick={togglePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
              <h2>New Collection Alert!</h2>
              <p>
                Discover our latest collection of timeless fashion. Limited stock
                available, so grab your favorites before they're gone!
              </p>
              {isPopupVisible && (
  <PopupModal>
    <PopupContent>
      <CloseButton onClick={togglePopup}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
      <h2>New Collection Alert!</h2>
      <p>
        Discover our latest collection of timeless fashion. Limited stock
        available, so grab your favorites before they're gone!
      </p>
      <Link to="#reviews1">
        <PopupButton onClick={togglePopup}>Shop Now</PopupButton>
      </Link>
    </PopupContent>
  </PopupModal>
)}
            </PopupContent>
          </PopupModal>
        )}
      </HeroContainer>
    </>
  );
}

export default Hero;

// Styled Components
const HeroContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduced padding for mobile */
    min-height: auto; /* Remove fixed height for mobile */
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FBF8F2;
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease infinite;
  z-index: -1;
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ff6f61;
  color: #fff;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 16px;
    top: 10px; /* Adjusted for mobile */
    right: 10px; /* Adjusted for mobile */
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    margin-top: 50px; /* Added margin to push content down */
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 590px;
  border-radius: 15px;
  margin-top: -100px; /* Adjusted to move the image down */
  box-shadow: 0 20px 50px rgba(36, 35, 35, 0.4);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(1.1); /* Increase brightness to make images lighter */
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-top: 0; /* Reset margin for mobile */
    border-radius: 20px;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); // Darker overlay for better text contrast
  color: #fff;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  animation: ${scaleIn} 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Highlight = styled.span`
  color: #ff6f61;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #ff6f61;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #ff6f61;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #ff4a3d;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const PopupModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${scaleIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PopupButton = styled.button`
  background-color: #ff6f61;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4a3d;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;