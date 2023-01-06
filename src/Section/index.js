import React from "react";
import "./style.css";

const Section = ({ title, body,extraHeaderContent }) => (
    <section className="section">
        <header className="section__header section__header--grid">
            <h2 className="section__h2">{title}</h2>
           {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>

);

export default Section;