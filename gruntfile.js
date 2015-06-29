module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	require('load-grunt-config')(grunt, {
		data: {
			pkg: grunt.file.readJSON('package.json')
		}
	});

	grunt.registerTask('dev', [
		'clean',
		'copy',
		'stylus',
		'riot',
		'connect',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'copy',
		'stylus',
		'riot',
		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'usemin'
	]);

	grunt.registerTask('default', 'dev');
};
