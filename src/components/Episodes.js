/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import { useParams } from 'react-router-dom';

export default ({ show, episodes }) => {
  const { id } = useParams();
  const episode = episodes.find((ep) => ep.id === Number(id));

  return (
    <div className="content">
      <h1 className="title">{show.name}</h1>
      {episode.image != null
        && <img src={episode.image.original} alt={episode.name} />}
      <div className="info">
        <h2>{episode.name}</h2>
        {/* dangerouslySetInnerHTML is React’s replacement for using innerHTML the browser DOM */}
        <span dangerouslySetInnerHTML={{ __html: episode.summary }} />
      </div>
    </div>
  );
};
