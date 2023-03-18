import React from 'react';

function GenreFilter(props) {
  const { genres, onGenreSelect } = props;

  return (
    <div>
      <p>Filter by Genre:</p>
      {genres.map((genre) => (
        <button key={genre} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
