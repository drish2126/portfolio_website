import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items=[
    {
        id:1,
        title: "food delivery app",
        img:"",
        desc:"delivery app website",
    },
];

const Single=({item})=>{

    const ref=useRef();

    const {scrollYProgress}=useScroll({
        target:ref,
        //offset:["start start","end start"],
    });

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

    return(
       <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
       </section>
    )
}

const Portfolio=()=>{

    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["end end","start start"],
    });

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style ={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Portfolio