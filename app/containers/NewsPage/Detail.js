/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import Link from 'components/Link';
import _ from 'lodash';
import styled from 'styled-components';
import Feed from 'components/Feed';
import Button from 'components/Button';
import moment from 'moment';

const PublishedDate = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  margin: 40px 0 0 0;
`;

const MoreButtonWrapper = styled.div`
  margin-top: 40px;
`;

const Article = styled.article`
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
`;

class NewsPage extends React.PureComponent {
  render() {
    const { params } = this.props;
    return (
      <div>
        <MoreButtonWrapper>
          <Button>
            <Link to="/news">Back</Link>
          </Button>
        </MoreButtonWrapper>
        <Feed
          url={`http://news.transfigurism.org/feeds/posts/default/${params.id}?redirect=false`}
          renderer={result => {
            const entry = _.get(result, 'query.results.entry');
            return (
              entry && (
                <Article>
                  <div id={entry.id} key={entry.id}>
                    <PublishedDate>{moment(entry.published).format('LL')}</PublishedDate>
                    <h1>{entry.title.content}</h1>
                    <div dangerouslySetInnerHTML={{ __html: entry.content.content }} />
                  </div>
                </Article>
              )
            );
          }}
        />
        <MoreButtonWrapper>
          <Button>
            <Link to="/news">Back</Link>
          </Button>
        </MoreButtonWrapper>
      </div>
    );
  }
}
NewsPage.propTypes = {
  params: PropTypes.object,
};

export default NewsPage;
