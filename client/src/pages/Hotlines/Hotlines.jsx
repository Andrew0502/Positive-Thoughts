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
                <h1>It's never a bad time to seek help</h1>
                <div><br/></div>
                <h1>YOU ARE NOT ALONE</h1>
                <div><br/></div>
                <div><br/></div>
                <section id="ContactInfo">
                    <div><br/></div>
                    <h3>National Suicide Prevention Lifeline Veterans Crisis Line</h3>
                    <h3 class="PhoneNumbers">1-800-273-8255</h3>
                    <div><br/></div>
                    <h3>Georgia Crisis &amp; Access Line (GCAL)</h3>
                    <h3 class="PhoneNumbers">1-800-715-4225</h3>
                    <div><br/></div>
                    <h3>TrevorLifeline</h3>
                    <h3 class="PhoneNumbers">1-866-488-7386</h3>
                    <div><br/></div>
                    <h3>BlackLifeline</h3>
                    <h3 class="PhoneNumbers">1-800-604-5841</h3>
                    <div><br/></div>
                </section>
            </div>
        </div>
    );
};

export default Hotlines;