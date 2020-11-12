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
                <h2>It's never a bad time to seek help</h2>
                <div><br/></div>
                <h3>YOU ARE NOT ALONE</h3>
                <div><br/></div>
                <div><br/></div>
                <section id="ContactInfo">
                    <div><br/></div>
                    <h6>National Suicide Prevention Lifeline Veterans Crisis Line</h6>
                    <h6 class="PhoneNumbers">1-800-273-8255</h6>
                    <div><br/></div>
                    <h6>Georgia Crisis &amp; Access Line (GCAL)</h6>
                    <h6 class="PhoneNumbers">1-800-715-4225</h6>
                    <div><br/></div>
                    <h6>TrevorLifeline</h6>
                    <h6 class="PhoneNumbers">1-866-488-7386</h6>
                    <div><br/></div>
                    <h6>BlackLifeline</h6>
                    <h6 class="PhoneNumbers">1-800-604-5841</h6>
                    <div><br/></div>
                </section>
            </div>
        </div>
    );
};

export default Hotlines;