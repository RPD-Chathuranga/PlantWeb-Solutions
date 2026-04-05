import { useState, useEffect } from "react";

export default function useBreakpoint() {
  // Initialize with current width
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setW(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    // Clean up to prevent memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { 
    isMobile: w < 640, 
    isTablet: w < 900, 
    isDesktop: w >= 900, 
    width: w 
  };
}