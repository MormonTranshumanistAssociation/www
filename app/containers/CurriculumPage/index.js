/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Section from 'components/Section';
import PageWithContents from 'components/PageWithContents';
import { SingleColumn } from 'components/Columns';
import ToC from './toc';

// const Glossary = styled.span`
//   position: relative;
//   cursor: help;
//   &:before {
//     content: attr(data-tooltip);
//     position: absolute;
//     width: 10em;
//     left: -3em;
//     bottom: calc(100% + 5px);
//     text-align: center;
//     opacity: 0;
//     padding: 4px 8px;
//     color: #fff;
//     font-size: .9em;
//     background: rgba(0,0,0,.5);
//     //transition: opacity 200ms;
//     border-radius: 5px;
//   }
//   &:hover:before {
//     opacity: 1;
//   }
//   &:hover:after {
//     content: " ";
//     position: absolute;
//     top: -5px; /* At the bottom of the tooltip */
//     left: 50%;
//     margin-left: -5px;
//     border-width: 5px;
//     border-style: solid;
//     border-color: rgba(0,0,0,.5) transparent transparent transparent;
//   }
// `;

const GlossaryProvidingMarkdown = styled.div`
  img {
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
  strong {
    position: relative;
    cursor: help;
    color: rgb(100, 148, 0);
    display: inline-block;
    font-weight: 500;
    padding: 0 2px;
    margin: 0 -1px;
    border-radius: 1px;
    border-bottom: 1px dashed;
    //background: rgba(225,255,117,.7);
  }
  strong > code {
    text-shadow: none;
    box-shadow: none;
    font-family: inherit;
    font-weight: normal;
    position: absolute;
    line-height: 1.4;
    width: 12em;
    left: -2em;
    bottom: calc(100% + 5px);
    text-align: center;
    opacity: 0;
    visibility: hidden;
    padding: 12px 16px;
    color: #fff;
    font-size: 0.9em;
    background: rgba(50, 50, 50, 0.9);
    //transition: opacity 200ms;
    border-radius: 3px;
  }
  strong:hover > code {
    visibility: visible;
    opacity: 1;
  }
  strong:hover > code:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 4em;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(50, 50, 50, 0.9) transparent transparent transparent;
  }
  ul > li {
    list-style-type: disc;
  }
`;

const CurriculumPage = props => (
  <div>
    <Header />
    <article>
      <Helmet title="Primers" />
      <Section>
        <PageWithContents>
          <div>
            <ToC />
          </div>
          <SingleColumn>
            <GlossaryProvidingMarkdown>{props.children}</GlossaryProvidingMarkdown>
          </SingleColumn>
        </PageWithContents>
      </Section>
    </article>
  </div>
);

CurriculumPage.propTypes = {
  children: React.PropTypes.any,
};

export default CurriculumPage;
