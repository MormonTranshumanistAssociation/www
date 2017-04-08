import React from 'react';
import styled from 'styled-components';
import QuotesMarkdown from './Quotes.md';

const Wrapper = styled.article`
  h1 + ul {
    list-style-type: none;
    padding: 0 0 0 2em;
    text-indent: -1em;
  }
  h3 + p > img {
    width: 150px !important;
    height: auto;
    float: right;
    margin-left: 16px;
  }
  h2 > img {
    width: 100%;
    max-width: 436px;
    height: auto;
    float: none;
    margin: 0 0 1.5em 0;
  }
  h2 {
    margin-bottom: 0;
    padding: 0;
  }
  h2 + p {
    padding: 0;
    margin: 0 0 1em 0;
  }
  h3 {
    padding-top: 1em;
    clear: right;
    margin: 0 0 0 0;
  }
  h3 + p {
    margin-top: 0.5em;
  }
  h4 {
    font-size: 0.75em;
    line-height: 1.4em;
    font-style: italic;
    padding: 0 0 0 1em;
    margin: -0.5em 0 1.5em 0;
  }
  h4:before {
    content: '—';
  }
`;

const QuotesWrapper = () => <Wrapper><QuotesMarkdown /></Wrapper>;

export default QuotesWrapper;
