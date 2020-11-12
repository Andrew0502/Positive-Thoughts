import React from 'react';
import "./Hotlines.css";
import Navbar from "../../components/Navbar"
import "../assets/main.css"

const Hotlines = () => {
    return (
        <div>
            <Navbar/>
            <div id="HotlineInfo">
                <div><br/></div>
                <h2 id="seek-help">It's never a bad time to seek help</h2>
                <div><br/></div>
                <h3 id="not-alone">YOU ARE NOT ALONE</h3>
                <div><br/></div>
                <div><br/></div>
                <section id="ContactInfo">
                    <div><br/></div>
                    <h3 className="hotline-info">National Suicide Prevention Lifeline</h3>
                    <h3 className="hotline-info">&</h3>
                    <h3 className="hotline-info"> Veterans Crisis Line</h3>
                    <h3 className="PhoneNumbers hotline-info">1-800-273-8255</h3>
                    <div><br/></div>
                    <h3 className="hotline-info">Georgia Crisis &amp; Access Line (GCAL)</h3>
                    <h3 className="PhoneNumbers hotline-info">1-800-715-4225</h3>
                    <div><br/></div>
                    <h3 className="hotline-info">TrevorLifeline</h3>
                    <h3 className="PhoneNumbers hotline-info">1-866-488-7386</h3>
                    <div><br/></div>
                    <h3 className="hotline-info">BlackLifeline</h3>
                    <h3 className="PhoneNumbers hotline-info">1-800-604-5841</h3>
                    <div><br/></div>
                </section>
            </div>
        </div>
    );
};

export default Hotlines;