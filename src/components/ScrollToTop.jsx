import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Obtenir la route actuelle

    useEffect(() => {
        // Défilement fluide vers le haut de la page
        window.scrollTo({
            top: 0,
            // behavior: "smooth", // Transition fluide
        });
    }, [pathname]); // Réagir à chaque changement de route

    return null; // Pas de rendu pour ce composant
};

export default ScrollToTop;
