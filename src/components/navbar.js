import React from "react";
import ThemeButton from "./themeButton";
import SelectableText from "./selectedText";
import LoginButton from "./loginButton";
import SignUpButton from "./SignUpButton";
import { ReactComponent as Logo } from "../assets/logo.svg";

export function Navbar() {
    return (
        <nav className="navbar">
            <Logo className="logo"></Logo>
            <SelectableText text="Home"></SelectableText>
            <SelectableText text="About us"></SelectableText>
            <SelectableText text="About us"></SelectableText>
            <SelectableText text="Our Mission"></SelectableText>
            <div className="spacer" style={{ width: "200px" }}></div>
            <LoginButton text="Login"></LoginButton>
            <SignUpButton text="Sign Up"></SignUpButton>
            <ThemeButton></ThemeButton>
        </nav>
    );
}