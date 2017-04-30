/* global google */
/* eslint-disable */
import React from 'react';
import _ from 'lodash';
import loadjs from 'loadjs';

const MemberLocationSpreadsheet = 'https://docs.google.com/spreadsheets/d/1RI22NUmZT8B70wHAkiJnlIqWMSKj46Bvxd-WuFeUp4E/gviz/tq?gid=540714092&headers=1';
const DefaultLocation = { latitude: '39.499741', longitude: '-111.547318' };    // Utah

class Membership extends React.Component {

  componentDidMount() {
    console.log('drawing...');
    // <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_GOES_HERE" async="" defer="defer"></script>

    // TODO: lookup lat/lng with YQL:
    // select centroid from geo.places where text="egypt" and placetype="Country"
    // select centroid from geo.places where text="Utah" and placetype="State"
    // (see Feed component and https://developer.yahoo.com/yql/console/)

    loadjs([
      'https://www.gstatic.com/charts/loader.js',
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFkUj-L6xGl27TM7oaNifLAaJhV_s8sJA',
      ],
      'googlecharts'
    );
    loadjs.ready('googlecharts', {
      success: () => {
        // console.log('Loaded googlecharts');
        google.charts.load('current', { packages:['corechart'] });
        google.charts.setOnLoadCallback(this.drawGID);
      },
      error: (depsNotFound) => {
        console.error(depsNotFound); // eslint-disable-line no-console
      },
    });
  }

  getCoordinates = async (location) => {
    const params = location.state
      ? { type: 'State', text: location.state }
      : { type: 'Country', text: location.country };
    const query = `select centroid from geo.places where text="${params.text}" and placetype="${params.type}" limit 1`;
    const yqlUrl = `https://query.yahooapis.com/v1/public/yql?q=${encodeURIComponent(query)}&format=json&diagnostics=false&callback=`;
    const response = await fetch(yqlUrl);
    const json = await response.json();
    const centroid = _.get(json, 'query.results.place.centroid', DefaultLocation);
    return { latitude: parseFloat(centroid.latitude), longitude: parseFloat(centroid.longitude), ...location };
  };

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
    let locations = [['Location', 'Count']];
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
      locations.push({ country, state, count });
    }

    // const coords = [['Latitude', 'Longitude', 'Description', 'Value']];
    const coords = [['Place', 'Members']];
    const coordsPromises = locations; //_.map(locations, (location) => this.getCoordinates(location));
    for (const promise of coordsPromises) {
      const coord = await promise;
      // coords.push([coord.latitude, coord.longitude, coord.state || coord.country, coord.count]);
      const coordArray = [coord.state ? `${coord.state}, ${coord.country}` : coord.country, coord.count];
      console.log(coordArray);
      coords.push(coordArray);
    }

    const worldChart = new google.visualization.GeoChart(document.getElementById('membership_chart_world_div'));
    worldChart.draw(google.visualization.arrayToDataTable(coords), {
      region: 'world',
      height: 400,
      sizeAxis: { minValue: 0, maxValue: 10 },
      colorAxis: { minValue: 0, maxValue: 70, colors: ['#dceabc', '#659400'] },
      legend: 'none',
    });

    const usaCoords = [['Place', 'Members']];
    const usaPromises = locations; //_.map(locations, (location) => this.getCoordinates(location));
    for (const promise of usaPromises) {
      const coord = await promise;
      // coords.push([coord.latitude, coord.longitude, coord.state || coord.country, coord.count]);
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
      colorAxis: { minValue: 0, maxValue: 100, colors: ['#dceabc', '#659400'] },
      legend: 'none',
    });

    const chart = new google.visualization.GeoChart(document.getElementById('membership_chart_world_div'));
  };

  render() {
    return (
      <div>
        <h1>Membership</h1>
        <div id="membership_chart_world_div" />
        <div id="membership_chart_usa_div" />
      </div>
    );
  }
}

export default Membership;
