const fs = require('fs');
const { cylinder, difference, sphere } = require('@dotcore64/scad-js');

const size = 50;
const hole = size / 2;
const cylinderHeight = size * 2.5;

const output = difference(
  sphere(size),
  cylinder(cylinderHeight, hole).rotate([0, 0, 0]),
  cylinder(cylinderHeight, hole).rotate([0, 90, 0]).debug(),
  cylinder(cylinderHeight, hole).rotate([90, 0, 0]),
);

fs.writeFileSync('./dist/output.scad', output.serialize({ $fn: 100 }));
