import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { TacheContext } from "../contexts/TacheContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function AppLayout() {

  const { taches } = useContext(TacheContext);
  const tacheCount = taches.length;

  const{ theme, toggleTheme } = useContext(ThemeContext);

  const buttons = [
    {
        variant: "rounded" ,
        title: theme === "light" ? "light" : "dark" ,
        onClick: toggleTheme,
    },
    ]

  return (
    <div>
      My To do list
      <Button  title={"Home"} component={Link} to="/" />
      <Button
        title={`Taches${tacheCount !== null ? `(${tacheCount})` : ""} `}
        component={Link}
        to="/Taches"
      />
      {buttons.map((button) => (
        <Button key={button.title} {...button}></Button>
      ))}
      <br />
      <Outlet />
    </div>
  );
}