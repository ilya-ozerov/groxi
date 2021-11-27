import React from 'react';
import './VideoSection.scss';

import background from '../../../../assets/images/aboutPage/video/background.png';
import playButton from '../../../../assets/images/aboutPage/video/playButton.png';

export const VideoSection: React.FC<VideoSectionPropsType> = (props) => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-section__body">
          <div className="video-section__image">
            <img src={background} alt="video preview" />
          </div>
          <div className="video-section__button">
            <img src={playButton} alt="play button" />
          </div>
        </div>
      </div>
    </section>
  );
}

type VideoSectionPropsType = {

}