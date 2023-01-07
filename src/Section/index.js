import "./style.css";

const Section = ({ title, body,extraHeaderContent }) => (
    <section className="section">
        <header className="section__header section__header--grid">
            <h2 className="section__h2">{title}</h2>
           {extraHeaderContent}
        </header>
    </section>

);

export default Section;