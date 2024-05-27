import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar"

const Navbar = () => {
    return(
        <div className="navbar">
            {/*Sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                 initial={{opacity:0,scale:0.5}}
                 animate={{opacity:1,scale:1}}
                  transition={{duration:0.5}}
                  >Drishti Gurnani</motion.span>
                <div className="social">
                    {/*<a href="#"><img src="/facebook.png" alt=""/></a>*/}
                    <a href="https://www.instagram.com/_drishtii.__/?hl=en"><img src="./instagram.png" alt=""/></a>
                    <a href="https://www.linkedin.com/in/drishti-gurnani-8bb5b1222/"><img src="./linkedin.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar