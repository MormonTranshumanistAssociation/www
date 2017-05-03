/* eslint-disable jsx-a11y/no-static-element-interactions, react/no-danger */
import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Feed from 'components/Feed';
import { Link } from 'react-router';

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;
const NewsItem = styled.div`
  display: flex;
  flex: 0 0 calc((768px - 4rem) / 3);
  margin: 0;
  padding: 8px 8px 8px 0;
  box-sizing: border-box;
  h3 {
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 1.1rem;
  }
  h3, a {
    color: white;
  }
`;

const Thumbnail = styled.img`
  box-shadow: 0 1px 4px rgba(0,0,0,.6);
  flex: 0 0 62px;
  width: 62px;
  height: 62px;
  float: left;
  margin: 0 11px 0 0;
`;

const Headlines = () => (
  <Wrapper>
    <Feed
      url="http://news.transfigurism.org/feeds/posts/default?redirect=false"
      select="id, title, thumbnail"
      limit={3}
      renderer={(result) => {
        const entries = _.get(result, 'query.results.entry', []);
        return (
          <NewsList>
            { _.map(entries, (entry) => {
              const match = /post-(.*)$/.exec(entry.id);
              const shortId = match[1];
              return (
                <NewsItem id={entry.id} key={entry.id}>
                  { !!entry.thumbnail && <Thumbnail src={entry.thumbnail.url} /> }
                  <Link to={`/news/${shortId}`}><h3>{entry.title.content}</h3></Link>
                </NewsItem>
              );
            })}
          </NewsList>
        );
      }}
    />
  </Wrapper>
);

export default Headlines;
