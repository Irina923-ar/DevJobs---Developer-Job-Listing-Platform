import React from "react";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    };

    const selectedTheme = localStorage.getItem("selectedTheme");

    setLightMode();
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    if(selectedTheme === "dark") {
        setDarkMode();
    }

    return (
        <div className="switch-wrap">
            <label htmlFor="toggle" className="toggle-label">
                <img className="icon-sun" src="assets/desktop/icon-sun.svg" alt="sun" />
                <input type="checkbox" id="toggle" onClick={toggleTheme} defaultChecked={selectedTheme === "dark"} className="toggle" />
                <div className="switch"></div>
                <img className="icon-moon" src="assets/desktop/icon-moon.svg" alt="moon" />
            </label>
        </div>
    );
};

export default DarkMode;