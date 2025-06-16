import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton } from "../../redux/navbarSlice";
import { Link } from "react-router-dom";

const NavbarButton = ({ href, text }) => {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.navbar.activeButton);

  const handleClick = (e) => {
    // Si el href es un ancla interna, evita la navegación por defecto y haz scroll suave
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    dispatch(setActiveButton(href));
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`text-gray-300 hover:text-blue-500 transition duration-300 ${
        activeButton === href ? "rainbow-text" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default NavbarButton;
