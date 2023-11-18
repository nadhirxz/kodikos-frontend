import { useContext } from 'react'
import { Navbar } from './components/navbar';
import LoginButton from '../src/components/loginButton';
import { ReactComponent as Phone } from '../src/assets/phone1.svg';
import { ReactComponent as Tablet } from '../src/assets/tablet.svg'
import LogoSlider from './components/slider';
import { ThemeContext } from "./Theme";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Navbar></Navbar>
      <div className='title-container'>
        <h1 className='title'>
          Et nihil autem. Eligendi est qui aliquid mollitia rerum explicabo consectetur perspiciatis.
        </h1>
        <LoginButton text="Submit"></LoginButton>
        <div className='phone-container>'>
          <Phone></Phone>
          <Tablet></Tablet>
          <Phone></Phone>
        </div>
      </div>
      <LogoSlider className='logo-slider'></LogoSlider>
    </div>
  );
}

export default App;
