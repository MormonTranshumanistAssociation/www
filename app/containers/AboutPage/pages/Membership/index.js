/* global google */
/* eslint-disable */
import React from 'react';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';
import loadjs from 'loadjs';
import messages from './messages';

const MemberLocationSpreadsheet = 'https://docs.google.com/spreadsheets/d/1RI22NUmZT8B70wHAkiJnlIqWMSKj46Bvxd-WuFeUp4E/gviz/tq?gid=540714092&headers=1';
const DefaultLocation = { latitude: '39.499741', longitude: '-111.547318' };    // Utah

class Membership extends React.Component {

  state = {
    memberCount: '…',
    countryCount: '…',
  };

  componentDidMount() {
    // console.log('drawing...');
    // <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_GOES_HERE" async="" defer="defer"></script>

    // TODO: lookup lat/lng with YQL:
    // select centroid from geo.places where text="egypt" and placetype="Country"
    // select centroid from geo.places where text="Utah" and placetype="State"
    // (see Feed component and https://developer.yahoo.com/yql/console/)

    if (typeof google === 'undefined') {
      loadjs([
          'https://www.gstatic.com/charts/loader.js',
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFkUj-L6xGl27TM7oaNifLAaJhV_s8sJA',
        ],
        'googlecharts'
      );
      loadjs.ready('googlecharts', {
        success: () => {
          // console.log('Loaded googlecharts');
          google.charts.load('current', {packages: ['corechart']});
          google.charts.setOnLoadCallback(this.drawGID);
        },
        error: (depsNotFound) => {
          console.error(depsNotFound); // eslint-disable-line no-console
        },
      });
    }
    else {
      this.drawGID();
    }
  }

  drawGID = () => {
    const queryString = encodeURIComponent('SELECT A, B');
    const query = new google.visualization.Query(`${MemberLocationSpreadsheet}`); //&tq=${queryString}`);
    query.send(this.handleQueryResponse);
  };

  handleQueryResponse = async (response) => {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    const table = response.getDataTable();
    const rowCount = table.getNumberOfRows();
    let memberCount = 0;
    const countries = {};
    let locations = []; // [['Location', 'Count']];
    for (let i=0; i < rowCount; ++i) {
      let country = table.getValue(i, 0) || 'USA';
      if (country === 'USA') {
        country = 'US';
      }
      let state = table.getValue(i, 1);
      if (state === '-') {
        state = null;
      }
      const count = table.getValue(i, 2);

      memberCount += count;
      countries[country] = true;
      locations.push({ country, state, count });
    }

    this.setState({ memberCount, countryCount: _.size(countries) });
    const usLocations = _.filter(locations, { country: 'US' });
    const usCount = _.reduce(usLocations, (result, location) => result + location.count, 0);
    const otherLocations = _.filter(locations, (location) => location.country !== 'US');

    const worldLocations = [{ country: 'US', count: usCount }, ...otherLocations];

    // console.log({ usLocations, otherLocations, worldLocations });

    const coords = [['Place', 'Members']];
    for (const coord of worldLocations) {
      const coordArray = [coord.country, coord.count];
      // console.log(coordArray);
      coords.push(coordArray);
    }

    const worldChart = new google.visualization.GeoChart(document.getElementById('membership_chart_world_div'));
    worldChart.draw(google.visualization.arrayToDataTable(coords), {
      region: 'world',
      height: 400,
      colorAxis: { minValue: 0, maxValue: 500, colors: ['#dceabc', '#659400', '#659400', '#659400'] },
      // legend: 'none',
    });

    const usaCoords = [['Place', 'Members']];
    for (const coord of locations) {
      if (coord.state) {
        usaCoords.push([coord.state, coord.count]);
      }
    }

    const usaChart = new google.visualization.GeoChart(document.getElementById('membership_chart_usa_div'));
    usaChart.draw(google.visualization.arrayToDataTable(usaCoords), {
      region: 'US',
      resolution: 'provinces',
      height: 400,
      sizeAxis: { minValue: 0, maxValue: 10 },
      colorAxis: { minValue: 0, maxValue: 200, colors: ['#dceabc', '#659400', '#659400', '#659400'] },
      // legend: 'none',
    });

    const chart = new google.visualization.GeoChart(document.getElementById('membership_chart_world_div'));
  };

  render() {
    return (
      <div>
        <h1>Members</h1>
        <p>
          <FormattedMessage
            {...messages.membership}
            values={{ memberCount: this.state.memberCount, countryCount: this.state.countryCount }}
          />
        </p>
        <div id="membership_chart_world_div" />
        <div id="membership_chart_usa_div" />
      </div>
    );
  }
}

export default Membership;
