/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default ({ show, episodes }) => {
  const renderEpisodes = (ep) => (
    <div key={ep.id}>
      <Link className="link" to={`/episodes/${ep.id}`}>
        <button type="button">s:{ep.season}e:{ep.number} - {ep.name}</button>
      </Link>
    </div>
  );

  return (
    <div>
      <h1 className="title">{show.name}</h1>
      <div className="content">
        <img src={show.image.medium} alt={show.name} />
        {/* dangerouslySetInnerHTML is React’s replacement for using innerHTML... */}
        <div className="info">
          <h3>Summary</h3>
          <div className="summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className="episodeList">
            <h3>Episodes</h3>
            {episodes.map(renderEpisodes)}
          </div>
        </div>
      </div>
    </div>
  );
};
