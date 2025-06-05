import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/react';
import InlineElements from '../elements/InlineElements';

const ParagraphBlock = ({ contents, searchText }) => (
  <p
    css={css`
      margin: 0;
    `}
  >
    <InlineElements contents={contents} searchText={searchText} />
  </p>
);

export default ParagraphBlock;

ParagraphBlock.propTypes = {
  contents: PropTypes.any,
  searchText: PropTypes.string,
};
