import React from "react";
import Podcasts from "../../components/Podcasts/Podcasts";
import Footer from "../../components/Footer/Footer";

export default function PodcastsPage() {
    return (
        <div className='podcasts'>
            <main className='content'>
              <Podcasts />
            </main>
            <footer className='footer'>
            <div>
                <Footer />
            </div>
            </footer>
        </div>
    );
}
