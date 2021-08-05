import { useEffect } from 'react';
import dekstop from '../assets/dekstop.png';
import bin from '../assets/bin.png';
import book from '../assets/book.png';
import carpet from '../assets/carpet.png';
import code from '../assets/code.png';
import dot from '../assets/dot.png';
import flower_top_big from '../assets/flower-top-big.png';
import flower_top from '../assets/flower-top.png';
import headphone from '../assets/headphone.png';
import keyboard from '../assets/keyboard.png';
import man from '../assets/man.png';
import pen from '../assets/pen.png';
import table from '../assets/table.png';
import tea_cup from '../assets/tea-cup.png';
import gsap from 'gsap';
import Header from './Header';
import BoxArea from './BoxArea';
import CloudHosting from './CloudHosting';
import DesignDevelopment from './DesignDevelopment';
import Features from './Features';
import NoofClientAndEmploye from './NoofClientAndEmploye';
const MainPageContent = () => {

    useEffect(() => {
        gsap.from(".desktop", {duration: 1, x: 100, opacity: 0, scale: 0.5});
        gsap.from(".book", {duration: 1, y: -100, opacity: 0, scale: 0.5,delay: 0.3});
        gsap.from(".pen", {duration: 1, y: -100, opacity: 0, scale: 0.5,delay: 0.2});
        gsap.from(".carpet", {duration: 1, y: 200, opacity: 0, scale: 0.5,delay: 0.2});
        gsap.from(".table", {duration: 1, y: 200, opacity: 0, scale: 0.5});
        gsap.from(".man", {duration: 1, x: -200, opacity: 0, scale: 0.5});
        gsap.from(".keyboard", {duration: 1, x: 200, opacity: 0, scale: 0.5});
        gsap.from(".tea_cup", {duration: 1, x: -200, opacity: 0, scale: 0.5});
        gsap.from(".flower_top", {duration: 1, x: 200, opacity: 0, scale: 0.5});
        gsap.from(".bin", {duration: 1, y: 200, opacity: 0, scale: 0.5});
        gsap.from(".dot", {duration: 1, x: 200, opacity: 0, scale: 0.5});
        gsap.from(".code", {duration: 1, x: -200, opacity: 0, scale: 0.5});
        gsap.from(".flower_top_big", {duration: 1, x: 200, opacity: 0, scale: 0.5});
        gsap.from(".headphone", {duration: 1, y: -200, opacity: 0, scale: 0.5});

    }, [])
    return ( 
        <>
        <Header />
        <div className="secure_its_solution">
            <div className="secure_its_solution_content">
                <h1>Secure IT Solutions for a more secure environment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                <a href="/get-started">GET STARTED</a>
            </div>
            <div className="secure_its_solution_view">
                <img className="bin" src={bin} alt="bin" />
                <img className="book" src={book} alt="book" />
                <img className="carpet" src={carpet} alt="carpet" />
                <img className="code" src={code} alt="code" />
                <img className="dot" src={dot} alt="dot" />
                <img className="desktop" src={dekstop} alt="desktop" />
                <img className="flower_top" src={flower_top} alt="flower_top" />
                <img className="flower_top_big" src={flower_top_big} alt="flower_top_big" />
                <img className="headphone" src={headphone} alt="headphone" />
                <img className="keyboard" src={keyboard} alt="keyboard" />
                <img className="man" src={man} alt="man" />
                <img className="pen" src={pen} alt="pen" />
                <img className="table" src={table} alt="table" />
                <img className="tea_cup" src={tea_cup} alt="tea_cup" />
            </div>
        </div>
        <BoxArea />
        <CloudHosting />
        <DesignDevelopment />
        <Features />
        <NoofClientAndEmploye />
        </>
     );
}
 
export default MainPageContent;