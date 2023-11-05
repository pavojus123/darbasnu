import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="link">
        <button className="hamburger">☰</button>
      </div>
    </nav>
  );
}

export default Navigation;
