import React from 'react';
import { AppContext } from './context';

function Stories() {
  const { hits, removeStory } = React.useContext(AppContext);

  return (
    <div className="stories">
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;

        return (
          <div key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}
            </p>
            <a href={url} className='read-link' target='_blank' rel='noopener noreferrer'>
              read more
            </a>
            <button onClick={()=>removeStory(objectID) } className='remove-btn'>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
