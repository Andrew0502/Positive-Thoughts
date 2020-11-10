import React from 'react';
import "./Hotlines.css";
import Navbar from "../../components/Navbar"

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
                    <h2>National Suicide Prevention Lifeline Veterans Crisis Line</h2>
                    <h2 class="PhoneNumbers">1-800-273-8255</h2>
                    <div><br/></div>
                    <h2>Georgia Crisis &amp; Access Line (GCAL)</h2>
                    <h2 class="PhoneNumbers">1-800-715-4225</h2>
                    <div><br/></div>
                    <h2>TrevorLifeline</h2>
                    <h2 class="PhoneNumbers">1-866-488-7386</h2>
                    <div><br/></div>
                    <h2>BlackLifeline</h2>
                    <h2 class="PhoneNumbers">1-800-604-5841</h2>
                    <div><br/></div>
                </section>
            </div>
        </div>
    );
};

export default Hotlines;