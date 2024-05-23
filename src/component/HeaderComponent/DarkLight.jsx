"use client";

import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

import { FiSun } from "react-icons/fi";
const DarkLight = () => {
  const [brTheme, setBrTheme] = useState(true);
  function setDarkTheme() {
    localStorage.theme = "dark";
    setBrTheme(!brTheme);
  }

  function setLightTheme() {
    localStorage.theme = "light";
    setBrTheme(!brTheme);
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [brTheme]);
  return (
    <div>
      {" "}
      <div
        className="p-2 cursor-pointer text-2xl "
        onClick={brTheme ? setLightTheme : setDarkTheme}
      >
        {brTheme ? <FiSun /> : <FaRegMoon />}
      </div>
    </div>
  );
};

export default DarkLight;
