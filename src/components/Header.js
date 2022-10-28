import React, { useEffect } from "react";
import { useGlobalContext } from "./ThemeContext";

export default function Header() {
    const { theme, changeTheme } = useGlobalContext();

    useEffect(() => {
        if (theme !== "light") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <header className={`header container ${theme === "light" ? "" : "dark"}`}>
            <div className="header-content">
                <h2>React Basics</h2>
                <button onClick={changeTheme} className="btn">
                    {theme === "light" ? "dark" : "light"}
                </button>
            </div>
        </header>
    )
}
