import React from 'react';
import Navbar from "../../components/Navbar";
import "./About.css";
import "../assets/main.css"

const About = () => {
    return (
        <div>
            <Navbar/>
        <main className="content">
            <div className="container">
                <div className="row">
                    <section className="col-sm-12">
                        <h1 id="about-title">ABOUT POSITIVE THOUGHTS</h1>
                        <h4 className="border" id="about-desc">Welcome to Positive Thoughts! Positive Thoughts is an app made for the you to use to help deal with the struggles of the world. Sometimes life gets away from us and we find ourselves lying in bed all day long not knowing where the day went.
                            Positive thoughts sends you a daily reminder to DO SOMETHING! From just going outside to interacting with others, it's a great way to get up and feel better! This is a great app for those of us with depression, or anxiety, or just need a reminder
                            to enjoy simple things in life. </h4>
                    </section>
                </div>
            </div>
        </main>
        </div>
    );
};

export default About;