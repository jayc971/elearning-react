import React, {Fragment} from 'react';
import HeroSection from "../../Components/Hero-Section/HeroSection";
import Institute from "../../Components/Institute-Section/Institute";
import './Home.module.scss';
import AboutUs from "../../Components/Institute-Section/About-Us/AboutUs";
import Courses from "../../Components/Courses-Section/Courses";
import ChooseUs from "../../Components/Choose-Us/ChooseUs";
import Features from "../../Components/Features-Section/Features";
import FreeCourses from "../../Components/Free-Courses-Section/FreeCourses";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

const Home = ()=>{
    return <>
           <Fragment>
               <HeroSection/>
               <Institute/>
               <AboutUs/>
               <Courses/>
               <ChooseUs/>
               <Features/>
               <FreeCourses/>
                <Testimonials/>
               <Newsletter/>
               <Footer/>
           </Fragment></>
    ;
}

export default Home;