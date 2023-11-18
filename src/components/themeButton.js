import { useEffect, useState, useContext } from 'react';
import "../styles/mainStyle.css";
import { ReactComponent as Crescent } from "../assets/crescent.svg";
import { ThemeContext } from "../Theme";

function ThemeButton() {
    const { toggleTheme } = useContext(ThemeContext);
    const dark = "#010D18";
    const white = "#F4F4F4";

    const [color, setColor] = useState(dark)
    const click = () => {
        setColor(previous => previous === white ? dark : white);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <button className="theme-button" onClick={() => { click(); toggleTheme(); }}>
            <Crescent></Crescent>
        </button>
    );
}

export default ThemeButton;
