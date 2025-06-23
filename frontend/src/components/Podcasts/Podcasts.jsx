import React from 'react'
// **must** match the file above and be a default import
import PodcastCard from '../PodcastCard/PodcastCard'
import './Podcasts.css'

import kjeLogo from '../../assets/images/podcastImage.png'
import rondjeLogo from '../../assets/images/podcastImage2.png'

export default function Podcasts() {
  console.log('PodcastCard is', PodcastCard)
  return (
    <div className="podcasts-home-wrapper">
      <h2 className="carousel-heading">All Podcasts</h2>
      <div className="podcasts-list">
        <PodcastCard
          logoSrc={kjeLogo}
          titleLines={['KieftJansenEgmondGijp']}
        />
        <PodcastCard
          logoSrc={rondjeLogo}
          titleLines={['Rondje Rob']}
        />
      </div>
    </div>
  )
}
