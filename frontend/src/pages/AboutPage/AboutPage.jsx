import React from "react";
import './AboutPage.css';
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

export default function AboutPage() {
    return (
        <div className='about'>
            <header className='about-header'>
                <h1>About<br />The Mancave<br />Studios</h1>
            </header>
            <main className='content'>
                <About />
            </main>

            <footer className='footer'>
            <div>
                <Footer />
            </div>
            </footer>
        </div>
    );
}
