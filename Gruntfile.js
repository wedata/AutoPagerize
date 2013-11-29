/* jshint node: true */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg    : grunt.file.readJSON('package.json'),
    jshint : {
      all     : [
        'items.json'
      ],
      options : {
        jshintrc : '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);
};
