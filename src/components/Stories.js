import React from 'react';
import Story from './Story';
import storyData from '../data/stories.json'; // Crie um JSON com os dados das stories

function Stories() {
  return (
    <div className="stories">
      {storyData.map(story => (
        <Story key={story.user} user={story.user} image={story.image} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;
