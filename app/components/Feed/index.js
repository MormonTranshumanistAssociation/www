import React, { PropTypes } from 'react';
import Loader from 'halogen/GridLoader';

class Feed extends React.PureComponent {
  constructor(props) {
    super(props);
    this.startListener(props);
  }

  state = {
    loading: true,
    result: null,
  };

  componentWillReceiveProps(nextProps) {
    this.startListener(nextProps);
  }

  startListener = async props => {
    const { url, limit, offset } = props;
    const params = [];
    const feedUrl = encodeURIComponent(url);
    params.push(`rss_url=${feedUrl}`);
    // TODO:
    // rs2json.com crashes when requesting a specific post.
    // use Blogger Data API instead: https://developers.google.com/blogger/docs/1.0/developers_guide_js
    const queryUrl = `https://api.rss2json.com/v1/api.json?${params.join('&')}`;
    const response = await fetch(queryUrl);
    const json = await response.json();

    const clipped = {
      ...json,
      items: _.slice(json.items, 0, limit),
    };
    this.setState({ result: clipped, loading: false });
  };

  render() {
    const { renderer } = this.props;
    if (this.state.loading) {
      return <Loader color="#525B3A" size="10px" />;
    }
    return renderer(this.state.result);
  }
}

Feed.propTypes = {
  url: PropTypes.string.isRequired,
  renderer: PropTypes.func.isRequired,
  limit: PropTypes.number,
  offset: PropTypes.number,
};

Feed.defaultProps = {
  url: 'http://news.transfigurism.org/feeds/posts/default?redirect=false',
};

export default Feed;
