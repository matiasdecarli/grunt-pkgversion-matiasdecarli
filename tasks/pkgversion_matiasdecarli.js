/*
 * grunt-pkgversion-matiasdecarli
 * https://github.com/matiasdecarli/grunt-pkgversion-matiasdecarli
 *
 * Copyright (c) 2014 Matias De Carli
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	grunt.registerMultiTask('version', 'Add build number to the package.json', function() {
	    var package = JSON.parse(grunt.file.read('./package.json'));
	    var version = package.version.split('.');
	    version[2] = this.data.buildNumber;

	    package.version = version.join('.');

	    grunt.file.write('./dist/package.json', JSON.stringify(package, null, 2));
	  });
};
