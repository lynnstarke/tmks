import React from 'react';
import './About.css';
import Footer from '../../components/Footer/Footer';
import AboutCard from '../../components/AboutCard/AboutCard';

export default function About() {
  return (
    <div className='about'>
      <main className='content'>
        <AboutCard title="Wie wij zijn">
            <p>
                The Mancave Studios is een onafhankelijk voetbalmediaplatform dat echte gesprekken centraal stelt. Geen oppervlakkige analyses of gescripte interviews, maar eerlijke, scherpe en soms chaotische content die voortkomt uit passie voor het spel.
            </p>
            <p>
                Wij zijn een groep makers, voetballiefhebbers, journalisten en persoonlijkheden uit de voetbalwereld die geloven dat het tijd is voor een ander soort sportmedia — persoonlijker, directer en menselijker.
            </p>
        </AboutCard>

        <AboutCard title="Wat we doen">
            <p>
                Wij ontwikkelen en produceren originele voetbalpodcasts en videocontent op YouTube. Elke show binnen The Mancave Studios heeft zijn eigen stijl, toon en dynamiek, maar alles valt onder één herkenbare identiteit: echt, eigenwijs en met een rauw randje.
            </p>
            <p>
                Onze content is gemaakt voor fans die verder willen kijken dan de samenvatting. We brengen verhalen, meningen en momenten die normaal gesproken buiten beeld blijven.
            </p>
        </AboutCard>
        <AboutCard title="Waar we voor staan">
            <p>
                Onze missie is om een nieuw geluid te brengen in de voetbalmedia.
            </p>
            <p>
                We willen ruimte creëren voor verschillende stemmen uit de sport, vanuit oprechte interesse en met respect voor het spel.
            </p>
        </AboutCard>
      </main>
    </div>
  );
}
