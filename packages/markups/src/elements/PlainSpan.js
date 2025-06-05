import React from 'react';
import PropTypes from 'prop-types';

const highlightText = (text, keyword) => {
  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const PlainSpan = ({ contents, searchText }) => (
  <>{highlightText(contents, searchText)}</>
);

PlainSpan.propTypes = {
  contents: PropTypes.string,
  searchText: PropTypes.string,
};

export default PlainSpan;
