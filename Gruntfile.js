/*!
 * Tuesday - Gruntfile
 * http://shakrmedia.github.io/tuesday
 * Copyright 2015-2020 Shakr Media Co., Ltd.
 */

module.exports = function(grunt) {
  'use strict';
  
  require("load-grunt-tasks")(grunt, {
    pattern: ['grunt-*']
  });
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: ['/* ',
              ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> ',
              ' * <%= pkg.description %> ',
