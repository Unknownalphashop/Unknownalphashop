// import React from "react";
// import { useCart } from "./CartContext"; // Import the custom hook
// import { ToastContainer, toast } from "react-toastify";
// import { FaStar, FaCheckCircle, FaShieldAlt } from "react-icons/fa"; // Example icons
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
// import localImage from "./productimages/IMG_5600.JPG"; // Adjust the path as needed
// import localImage2 from "./productimages/IMG_5597.JPG"; // Adjust the path as needed
// import localImage3 from "./productimages/IMG_5598.JPG"; // Adjust the path as needed
// import localImage4 from "./productimages/IMG_5604.JPG"; // Adjust the path as needed
// import localImage5 from "./productimages/IMG_5605.JPG"; // Adjust the path as needed
// import localImage6 from "./productimages/IMG_5612.JPG"; // Adjust the path as needed
// import logoImage from "./productimages/IMG_5603.JPG"; // Adjust the path according to your folder structure

// const FashionPage = ({ reviews1Ref, service1Ref }) => {
//   const { addToCart } = useCart(); // Get addToCart function from context

//   // Define the carouselItems array with 6 unique items
//   const carouselItems = [
//     { id: 1, name: "Item 1", price: "$49.99", image: localImage },
//     { id: 2, name: "Item 2", price: "$59.99", image: localImage2 },
//     { id: 3, name: "Item 3", price: "$39.99", image: localImage3 },
//     { id: 4, name: "Item 4", price: "$69.99", image: localImage4 },
//     { id: 5, name: "Item 5", price: "$79.99", image: localImage5 },
//     { id: 6, name: "Item 6", price: "$89.99", image: localImage6 },
//   ];

//   const features = [
//     { title: "High Quality", text: "We ensure top-notch quality in everything we deliver.", icon: <FaStar /> },
//     { title: "Trusted Service", text: "Thousands of customers trust us for our reliability.", icon: <FaCheckCircle /> },
//     { title: "Secure Platform", text: "Your data is safe with our state-of-the-art security measures.", icon: <FaShieldAlt /> },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Fashion Page Section */}
//       <div style={styles.fashionSection}>
//         <div style={styles.fashionContent}>
//           <img
//            src={logoImage}
//             alt="Fashion"
//             style={styles.fashionImage}
//           />
//           <div style={styles.fashionText}>
//             <div style={styles.shadowBox}>
//               <h1 style={styles.fashionHeading}>Discover Your Unique Style</h1>
//               <p style={styles.fashionParagraph}>
//                 Discover fashion that fits your personality. Crafted with passion,
//                 designed for impact—our pieces make you shine.
//               </p>
//               <button
//                 style={styles.buyNowButton}
//                 onClick={() => {
//                   const productsSection = document.getElementById("products");
//                   if (productsSection) {
//                     productsSection.scrollIntoView({ behavior: "smooth" });
//                   }
//                 }}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div style={styles.additionalContent}>
//         <h3 ref={reviews1Ref} style={styles.additionalHeading}>Products</h3>
//         <div style={styles.reviewsWrapper}>
//           {carouselItems.map((item) => (
//             <div style={styles.featureCard1} key={item.id}>
//               <img src={item.image} alt={item.name} style={styles.cardImage} />
//               <p style={styles.itemPrice}>{item.price}</p>
//               <div style={styles.buttonGroup}>
//                 <button
//                   style={styles.shopNowButton}
//                   onClick={() => {
//                     addToCart(item);
//                     toast.success(`${item.name} added to your cart successfully!`, {
//                       position: "top-right",
//                       autoClose: 3000,
//                     });
//                   }}
//                 >
//                   Shop Now &rarr;
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <ToastContainer />
//       </div>

//       {/* Why We Choose Us Section */}
//       <div style={styles.additionalContent}>
//         <h3 ref={service1Ref} style={styles.additionalHeading}>Why We</h3>
//         <div style={styles.reviewsWrapper1}>
//           {features.map((feature, index) => (
//             <div style={styles.featureCard} key={index}>
//               <div style={styles.featureIcon}>{feature.icon}</div>
//               <h3 style={styles.featureTitle}>{feature.title}</h3>
//               <p style={styles.featureText}>{feature.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles (same as before)
// const styles = {
//   container: {
//     padding: "0 1rem",
//     backgroundColor: "#FBF8F2",
//   },
//   additionalContent: {
//     padding: "0.1rem",
//     textAlign: "center",
//   },
//   additionalHeading: {
//     fontSize: "2rem",
//     marginBottom: "1.5rem",
//     color: "#333",
//     fontWeight: "bold",
//   },
//   reviewsWrapper1: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "1rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     marginBottom: "2rem",
//   },
//   featureCard: {
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     padding: "1.5rem",
//     textAlign: "center",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.2s ease",
//     border: "1px solid rgba(30, 11, 28, 0.3)",
//   },
//   featureIcon: {
//     fontSize: "2.5rem",
//     color: "#eb2f45",
//     marginBottom: "1rem",
//   },
//   featureTitle: {
//     fontSize: "1.25rem",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//   },
//   featureText: {
//     fontSize: "1rem",
//     color: "#666",
//   },
//   reviewsWrapper: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "2rem",
//     maxWidth: "1200px",
//     marginBottom: "1rem",
//     margin: "0 auto",
//   },
//   cardImage: {
//     width: "100%",
//     height: "250px",
//     objectFit: "cover",
//     borderRadius: "8px",
//     marginBottom: "0.75rem",
//   },
//   shopNowButton: {
//     backgroundColor: "#2e0611",
//     background: "linear-gradient(45deg,rgb(28, 23, 25)20, 20, 23))", // Gradient background
//     color: "#fff",
//     padding: "0.75rem 1.5rem",
//     fontSize: "1rem",
//     border: "none",
//     borderRadius: "30px", // Rounded corners
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "0.5rem", // Space between text and icon
//     transition: "all 0.3s ease", // Smooth transition
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
//   },


  
//   featureCard1: {
//     backgroundColor: "#fff",
//     padding: "1.5rem",
//     borderRadius: "15px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "left",
//     border: "1px solid rgba(30, 11, 28, 0.3)",
//   },
//   fashionSection: {
//     marginBottom: "2rem",
//   },
//   fashionContent: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "2rem",
//     justifyContent: "center",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   fashionImage: {
//     width: "30%",
//     maxWidth: "500px",
//     height: "20%",
//     borderRadius: "20px",
//     boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
//   },
//   fashionText: {
//     flex: "1",
//     maxWidth: "600px",
//     textAlign: "left",
//   },
//   shadowBox: {
//     backgroundColor: "rgba(28, 3, 21, 0.9)",
//     color: "#fff",
//     padding: "2rem",
//     borderRadius: "10px",
//     boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
//   },
//   fashionHeading: {
//     fontSize: "2.5rem",
//     marginBottom: "1rem",
//   },
//   fashionParagraph: {
//     fontSize: "1.2rem",
//   },
//   buyNowButton: {
//     backgroundColor: "#8686F7",
//     color: "#fff",
//     padding: "0.75rem 1.5rem",
//     fontSize: "1rem",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//   },
// };

// export default FashionPage;

import React from "react";
import { useCart } from "./CartContext"; // Import the custom hook
import { ToastContainer, toast } from "react-toastify";
import { FaStar, FaCheckCircle, FaShieldAlt } from "react-icons/fa"; // Example icons
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify
import localImage from "./IMG_5595.JPG"; // Adjust the path as needed
import localImage2 from "./productimages/IMG_5598.JPG"; // Adjust the path as needed
import localImage3 from "./productimages/IMG_5598.JPG"; // Adjust the path as needed
import localImage4 from "./productimages/IMG_5604.JPG"; // Adjust the path as needed
import localImage5 from "./productimages/IMG_5605.JPG"; // Adjust the path as needed
import localImage6 from "./productimages/IMG_5612.JPG"; // Adjust the path as needed
import logoImage from "./IMG_5609.JPG"; // Adjust the path according to your folder structure
import { Link } from "react-router-dom"; // Import Link
const FashionPage = ({ reviews1Ref, service1Ref }) => {
  const { addToCart } = useCart(); // Get addToCart function from context

  // Define the carouselItems array with 6 unique items
  const carouselItems = [
    { id: 1, name: "Unknown Alpha Frock 1", price: "1132 £", image: localImage },
    { id: 2, name: "Unknown Alpaha panties", price: "90 £", image: localImage2 },
  
  ];

  const features = [
    { title: "High Quality", text: "We ensure top-notch quality in everything we deliver.", icon: <FaStar /> },
    { title: "Trusted Service", text: "Thousands of customers trust us for our reliability.", icon: <FaCheckCircle /> },
    { title: "Secure Platform", text: "Your data is safe with our state-of-the-art security measures.", icon: <FaShieldAlt /> },
  ];

  return (
    <div style={styles.container}>
      {/* Fashion Page Section */}
      <div style={styles.fashionSection}>
        <div style={styles.fashionContent}>
          <img src={logoImage} alt="Fashion" style={styles.fashionImage} />
          <div style={styles.fashionText}>
            <div style={styles.shadowBox}>
              <h1 style={styles.fashionHeading}>Discover Your Unique Style</h1>
              <p style={styles.fashionParagraph}>
                Discover fashion that fits your personality. Crafted with passion, designed for impact—our pieces make you
                shine.
              </p>
              <Link to="#reviews1">
              <button
                style={styles.buyNowButton}
                onClick={() => {
                  const productsSection = document.getElementById("products");
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Buy Now
              </button>

       
      </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div style={styles.additionalContent}>
        <h3 ref={reviews1Ref} style={styles.additionalHeading}>
          Products
        </h3>
        <div style={styles.reviewsWrapper}>
          {carouselItems.map((item) => (
            <div style={styles.featureCard1} key={item.id}>
              <img src={item.image} alt={item.name} style={styles.cardImage} />
              <p style={styles.itemPrice}><b>{item.price}</b></p>
              <div style={styles.buttonGroup}>
                <button
                  style={styles.shopNowButton}
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.name} added to your cart successfully!`, {
                      position: "top-right",
                      autoClose: 3000,
                    });
                  }}
                >
                  Shop Now &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>

      {/* Why We Choose Us Section */}
      <div style={styles.additionalContent}>
        <h3 ref={service1Ref} style={styles.additionalHeading}>
          Why We
        </h3>
        <div style={styles.reviewsWrapper1}>
          {features.map((feature, index) => (
            <div style={styles.featureCard} key={index}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "0 1rem",
    backgroundColor: "#FBF8F2",
  },
  additionalContent: {
    padding: "0.1rem",
    textAlign: "center",
  },
  additionalHeading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#333",
    fontWeight: "bold",
  },
  reviewsWrapper1: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "2rem",
  },
  featureCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "1.5rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease",
    border: "1px solid rgba(30, 11, 28, 0.3)",
  },
  featureIcon: {
    fontSize: "2.5rem",
    color: "#eb2f45",
    marginBottom: "1rem",
  },
  featureTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  featureText: {
    fontSize: "1rem",
    color: "#666",
  },
  reviewsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem", // Decreased gap between product images
    maxWidth: "900px",
    marginBottom: "1rem",
    margin: "0 auto",
  },
  cardImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "0.75rem",
  },
  shopNowButton: {
    backgroundColor: "#2e0611",
    background: "linear-gradient(45deg, rgb(28, 23, 25), rgb(20, 20, 23))",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  featureCard1: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Added shadow box
    textAlign: "left",
    border: "1px solid rgba(30, 11, 28, 0.1)", // Light border for better contrast
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  fashionSection: {
    marginBottom: "2rem",
  },
  fashionContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
  },
  fashionImage: {
    width: "100%",
    maxWidth: "500px",
    height: "400px", // Fixed height for larger screens
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
    marginBottom: "-1rem",
    transition: "all 0.3s ease",
    objectFit: "cover",
  },
  fashionText: {
    flex: "1",
    maxWidth: "600px",
    textAlign: "left",
    padding: "1rem",
  },
  shadowBox: {
    backgroundColor: "rgba(28, 3, 21, 0.9)",
    color: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
  },
  fashionHeading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  fashionParagraph: {
    fontSize: "1.2rem",
  },
  buyNowButton: {
    backgroundColor: "#FFFF",
    color: "#000",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  "@media (max-width: 768px)": {
    fashionImage: {
      maxWidth: "100%",
      height: "200px", // Decreased height for smaller screens
      borderRadius: "15px",
    },
    fashionContent: {
      flexDirection: "column",
      gap: "1rem",
    },
    fashionText: {
      textAlign: "center",
    },
  },
};

export default FashionPage;