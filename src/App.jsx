import "./app.scss"
import Test from './Test'
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from"./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Porfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
    <Cursor/>
   <section id="Homepage">
    <Navbar/>
    <Hero/>
    </section>
   <section><Services/></section>
<Portfolio/>
  <section id="Contact"><Contact/></section>
{/*<Test/>*/}
</div>
);
};

export default App;
