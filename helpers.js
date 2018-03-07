/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2); // eslint-disable-line

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`); // eslint-disable-line

// Some details about the site
exports.siteName = `New Sunshine LED Lighting Manufacturer`;

const projectsDropdown = [
  { slug: '/projects/indoor', title: 'Indoor' },
  { slug: '/projects/outdoor', title: 'Outdoor' },
];

const productsDropdown = [
  { slug: '/products/led-corn-light', title: 'LED Corn Light' },
  { slug: '/products/led-garden-light', title: 'LED Garden Light' },
  { slug: '/products/led-street-light', title: 'LED Street Light' }
];

exports.menu = [
  { slug: '/home', title: 'home' },
  { slug: '/projects', title: 'projects', dropdown: [...projectsDropdown] },
  { slug: '/products', title: 'products', dropdown: [...productsDropdown] },
  { slug: '/support', title: 'support' },
  { slug: '/about-us', title: 'about us' },
  { slug: '/contact', title: 'contact' },
];

// exports.menu = [
//   { slug: '/home', title: 'home' },
//   { slug: '/led-corn-light', title: 'corn' },
//   { slug: '/led-garden-light', title: 'garden' },
//   { slug: '/led-street-light', title: 'street' },
//   { slug: '/support', title: 'support' },
//   { slug: '/about-us', title: 'about us' },
//   { slug: '/contact', title: 'contact' },
// ];
