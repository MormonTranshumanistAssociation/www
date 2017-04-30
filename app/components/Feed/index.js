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

  startListener = async (props) => {
    const { url, limit, offset, table, select } = props;
    const params = [];
    if (limit) {
      params.push(`limit ${limit}`);
    }
    if (offset) {
      params.push(`offset ${offset}`);
    }
    const query = encodeURIComponent(`select ${select} from ${table} where url='${url}' ${params.join(' ')} `);
    const yqlUrl = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json&diagnostics=false&callback=`;
    const response = await fetch(yqlUrl);
    const json = await response.json();
    this.setState({ result: json, loading: false });
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
  table: PropTypes.string,
  select: PropTypes.string,
};

Feed.defaultProps = {
  select: '*',
  url: 'http://news.transfigurism.org/feeds/posts/default?redirect=false',
  table: 'atom',

};

export default Feed;
