import {useContext} from "react";
import ThemeContext from "./ThemeContext";
import './index.css';
import {useThemeContext} from "./useThemeContext";

const Home = () => {
    const context = useThemeContext();
    const {theme} = context;
    return (
       <div className={theme}>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aspernatur atque autem commodi doloremque error est ex fugit impedit ipsa iusto laborum nemo, nesciunt odit quam reprehenderit sed vel.</p>
       </div>
    )
}

export default Home;