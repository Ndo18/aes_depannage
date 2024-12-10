import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -30; // Définir le padding (ex : 100px)
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [location]);
}

export default useScrollToAnchor;
