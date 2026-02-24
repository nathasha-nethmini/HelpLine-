import React, { useState, useRef } from "react";
import "./Home.css";


export default function Home() {

  const categories = [
  {
    title: "Women Safety",
    logo: "/logos/women.png",
    emergencyNumber: "1938",
    description: "24/7 confidential support and protection services for women facing violence or abuse."
  },
  {
    title: "Child Protection",
    logo: "/logos/child.png",
    emergencyNumber: "1929",
    description: "National Child Protection Authority hotline for reporting child abuse or neglect."
  },
  {
    title: "Mental Health Support",
    logo: "/logos/mental.png",
    emergencyNumber: "1926",
    description: "Emotional support and mental health crisis assistance available nationwide."
  },
  {
    title: "Police Emergency",
    logo: "/logos/police.png",
    emergencyNumber: "119",
    description: "Immediate police assistance for crimes, threats, or dangerous situations."
  },
  {
    title: "Ambulance Service",
    logo: "/logos/ambulance.png",
    emergencyNumber: "1990",
    description: "Suwa Seriya free ambulance service for urgent medical emergencies."
  },
  {
    title: "Fire & Rescue",
    logo: "/logos/fire.png",
    emergencyNumber: "110",
    description: "Fire brigade emergency response for fires and rescue situations."
  },
  {
    title: "Domestic Violence",
    logo: "/logos/domestic.png",
    emergencyNumber: "1938",
    description: "Confidential support for victims of domestic violence and family abuse."
  },
  {
    title: "Suicide Prevention",
    logo: "/logos/suicide.png",
    emergencyNumber: "1926",
    description: "Immediate emotional crisis intervention and suicide prevention support."
  },
  {
    title: "Disaster Management",
    logo: "/logos/disaster.png",
    emergencyNumber: "117",
    description: "Emergency coordination during floods, landslides, and national disasters."
  },
  {
    title: "Traffic Accidents",
    logo: "/logos/traffic.png",
    emergencyNumber: "119",
    description: "Report road accidents and request urgent police assistance."
  },
  {
    title: "Cyber Crime",
    logo: "/logos/cyber.png",
    emergencyNumber: "011-2421451",
    description: "Report cyber harassment, online fraud, and digital crimes."
  },
  {
    title: "Elderly Support",
    logo: "/logos/elderly.png",
    emergencyNumber: "1938",
    description: "Support services for elderly individuals facing neglect or abuse."
  },
  {
    title: "Substance Abuse Help",
    logo: "/logos/substance.png",
    emergencyNumber: "1984",
    description: "National Dangerous Drugs Control Board helpline for addiction support."
  },
  {
    title: "Medical Emergency",
    logo: "/logos/medical.png",
    emergencyNumber: "1990",
    description: "Immediate medical transport and emergency healthcare assistance."
  },
  {
    title: "Natural Disasters",
    logo: "/logos/natural.png",
    emergencyNumber: "117",
    description: "Emergency help during floods, cyclones, and other natural disasters."
  },
  {
    title: "Animal Rescue",
    logo: "/logos/animal.png",
    emergencyNumber: "011-2446181",
    description: "Report injured or dangerous animals requiring rescue assistance."
  },
  {
    title: "Lost & Found Children",
    logo: "/logos/lost.png",
    emergencyNumber: "1929",
    description: "Immediate reporting and assistance for missing children cases."
  },
  {
    title: "Community Helpline",
    logo: "/logos/community.png",
    emergencyNumber: "1919",
    description: "Government information and general public assistance hotline."
  }
];
  const callnow = (number) => {
    window.location.href = `tel:${number}`;
  }
  return (<>
    <h1>Help Line<sup>+</sup></h1>
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.logo} alt={category.title} className="logo"/>
          <p><b>{category.title}</b><br />{category.description}</p>
          <button onClick={() => callnow(category.emergencyNumber)}>call</button>
          
        </div>
      ))}
      <div ></div>
    </div>
    </>);
    
}
