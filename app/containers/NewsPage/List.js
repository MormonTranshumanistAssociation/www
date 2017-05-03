/* eslint-disable jsx-a11y/no-static-element-interactions, react/no-danger */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import styled from 'styled-components';
import striptags from 'striptags';
import Feed from 'components/Feed';
import Button from 'components/Button';
import { Link } from 'react-router';
import moment from 'moment';

const Thumbnail = styled.img`
  width: 64px;
  height: 64px;
  float: left;
  margin-top: 3px;
  margin-right: 12px;
  margin-bottom: 0;
  box-shadow: 0 1px 4px rgba(0,0,0,.6);
`;

const PublishedDate = styled.div`
  color: rgba(0,0,0,.5);
  font-size: 0.8rem;
  margin: 40px 0 -32px 0;
`;

const MoreButtonWrapper = styled.div`
  margin-top: 40px;
`;

const ReadMoreLink = styled(Link)`
  padding-left: 0.5em;
  white-space: nowrap;
`;

const html2text = (html, options) => {
  let text = striptags(html);
  if (options.length) {
    text = _.truncate(text, { length: options.length, separator: /\s/ });
  }
  return text;
};

class NewsPage extends React.PureComponent {
  state = {
    limit: 3,
  };

  onMorePress = () => {
    this.setState({ limit: this.state.limit + 3 });
  };

  render() {
    return (
      <div>
        <Feed
          url="http://news.transfigurism.org/feeds/posts/default?redirect=false"
          select="id, published, title, content, thumbnail"
          renderer={(result) => {
            const entries = _.get(result, 'query.results.entry', []);
            return (
              <article>
                { _.map(entries, (entry) => {
                  const match = /post-(.*)$/.exec(entry.id);
                  const shortId = match[1];
                  return (
                    <div id={entry.id} key={entry.id}>
                      <PublishedDate>{moment(entry.published).format('LL')}</PublishedDate>
                      <Link to={`/news/${shortId}`}><h2>{entry.title.content}</h2></Link>
                      { !!entry.thumbnail && <Thumbnail src={entry.thumbnail.url} /> }
                      <div>
                        <span dangerouslySetInnerHTML={{ __html: html2text(entry.content.content, { length: 400 }) }} />
                        <ReadMoreLink to={`/news/${shortId}`}>
                          <FormattedMessage id="readMore" defaultMessage="Read more" />
                        </ReadMoreLink>
                      </div>

                    </div>
                  );
                })}
              </article>
            );
          }}
          limit={this.state.limit}
        />
        <MoreButtonWrapper>
          <Button><a onClick={this.onMorePress}>More news...</a></Button>
        </MoreButtonWrapper>
      </div>
    );
  }
}
NewsPage.propTypes = {
};

export default NewsPage;
