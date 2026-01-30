import React, { useState, useRef } from "react";
import "./Home.css";

// Category card component
function CategoryCard({ title, logo, refProp, isActive }) {
  return (
    <div
      className={`category-card ${isActive ? "active-card" : ""}`} // highlight if active
      ref={refProp} // reference for scrolling
    >
      {title}
      {logo && <img src={logo} alt={`${title} logo`} className="category-logo" />}
    </div>
  );
}

export default function Home() {
  // List of categories with title and logo
  const categories = [
    { title: "Women Safety", logo: "./logos/women.png" },
    { title: "Child Protection", logo: "/logos/child.png" },
    { title: "Mental Health", logo: "/logos/mental.png" },
    { title: "Emergency", logo: "/logos/emergency.png" },
    { title: "Ambulance Services", logo: "/logos/ambulance.png" },
    { title: "Fire Safety", logo: "/logos/fire.png" },
    { title: "Police Assistance", logo: "/logos/police.png" },
    { title: "Elderly Support", logo: "/logos/elderly.png" },
    { title: "Domestic Violence", logo: "/logos/domestic.png" },
    { title: "Bullying & Harassment", logo: "/logos/bullying.png" },
    { title: "Substance Abuse Help", logo: "/logos/substance.png" },
    { title: "Suicide Prevention", logo: "/logos/suicide.png" },
    { title: "Disaster Management", logo: "/logos/disaster.png" },
    { title: "Traffic Accidents", logo: "/logos/traffic.png" },
    { title: "Natural Disasters", logo: "/logos/natural.png" },
    { title: "Medical Emergencies", logo: "/logos/medical.png" },
    { title: "Cyber Safety", logo: "/logos/cyber.png" },
    { title: "Animal Rescue", logo: "/logos/animal.png" },
    { title: "Lost & Found Children", logo: "/logos/lost.png" },
    { title: "Community Helpline", logo: "/logos/community.png" }
  ];

  const [searchInput, setSearchInput] = useState(""); // track search input
  const [activeIndex, setActiveIndex] = useState(null); // Track the highlighted card

  // Create refs for all category cards
  const categoryRefs = useRef(categories.map(() => React.createRef()));

  // Search function
  const find = () => {
    const inputLower = searchInput.toLowerCase();
    // find index by comparing title
    const index = categories.findIndex(cat =>
      cat.title.toLowerCase().includes(inputLower)
    );

    if (index !== -1) {
      categoryRefs.current[index].current.scrollIntoView({ behavior: "smooth" }); // scroll to category
      setActiveIndex(index); // highlight the found card
    } else {
      alert("Category not found");
      setActiveIndex(null); // remove highlight
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">
        HelpLine<sup>+</sup>
      </h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for help..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // update search input
          onKeyDown={(e) => e.key === "Enter" && find()} // Enter key triggers search
        />
        <button className="search-button" onClick={find}>Search</button>
      </div>

      <h2 className="category-title">Quick Categories</h2>

      {/* Category cards */}
      <div className="category-container">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title} // pass title
            logo={cat.logo} // pass logo
            refProp={categoryRefs.current[index]} // pass ref
            isActive={index === activeIndex} // highlight active card
          />
        ))}
      </div>
    </div>
  );
}
