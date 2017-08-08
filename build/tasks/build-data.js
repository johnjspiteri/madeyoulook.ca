module.exports = function(grunt) {
	grunt.registerTask('build-data', [
		'minjson'
		// 'newer:minjson'
	]);
};