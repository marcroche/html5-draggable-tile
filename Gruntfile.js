module.exports = function(grunt) {
  grunt.initConfig({
  	copy: {
	  build: {
	    files: [
	      { src:"lib/jquery/dist/jquery.js", dest:"src/js/vendor/jquery.js" }
	    ]
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask(
	  'build', 
	  'Copies JS dependencies to the src/js directory.', 
	  [ 'copy:build' ]
	);
};