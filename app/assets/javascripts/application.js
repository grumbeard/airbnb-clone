// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// import mapboxgl from 'mapbox-gl';

const lattitude = document.querySelector('.flat-details').dataset.lat;
const longitude = document.querySelector('.flat-details').dataset.lng;

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J1bWJlYXJkIiwiYSI6ImNqejNuenJmMzAzeGMzYmxtdGw2aHQxNXkifQ.fTcihIVVVpOJjB7__u8ugg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [ longitude, lattitude ],
  zoom: 12
});

new mapboxgl.Marker()
  .setLngLat([ longitude, lattitude ])
  .addTo(map);
