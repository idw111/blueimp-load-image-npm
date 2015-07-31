'use strict';

var loadImage = require('./load-image');
var injectExifMap = require('./load-image-exif-map');
var injectIos = require('./load-image-ios');
var injectOrientation = require('./load-image-orientation');

injectExifMap(loadImage);
injectIos(loadImage);
injectOrientation(loadImage);

module.exports = loadImage;
