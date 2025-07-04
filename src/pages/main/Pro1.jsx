import React from "react";
import { useNavigate } from "react-router-dom";
import ComButton from '../../components/common/ComButton';

export const Pro1 = () => {
const navigate = useNavigate();
const handleDiscoverRedirect = () => {
  navigate("/Discover");
};

  return (
    <div className="tech-hero-container">
      <div className="tech-blob tech-blob1"></div>
      <div className="tech-blob tech-blob2"></div>
      <div className="tech-blob tech-blob3"></div>

      <div className="tech-particle particle1"></div>
      <div className="tech-particle particle2"></div>
      <div className="tech-particle particle3"></div>
      <div className="tech-particle particle4"></div>

      <div className="circuit-line line1"></div>
      <div className="circuit-line line2"></div>
      <div className="circuit-line line3"></div>
      <div className="circuit-line line4"></div>

      <div className="data-grid"></div>

      <div className="company-content">
        <h1>S9r Technologies</h1>
        <h2>Next-Gen Innovation Solutions</h2>
        <p>
          Experience revolutionary, futuristic technology solutions that
          transform how businesses operate in the digital landscape.
        </p>
        <div className="p-[2vh]"><ComButton customStyle={" px-10 py-4"} onClick={handleDiscoverRedirect} title={"Discover More"}/></div>
      </div>
    </div>
  );
};

export default Pro1;
