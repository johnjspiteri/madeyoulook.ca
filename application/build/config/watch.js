module.exports = {
	options: {
		livereload: 35729
	},
	data: {
		files: 'source/data/source/**/*.json',
		tasks: 'build-data'
	},
	partials: {
		files: 'source/partials/**/*.pug',
		tasks: 'build-partials'
	},
	scripts: {
		files: ['!node_modules/**', '!source/scripts/vendor/**', 'gruntfile.js', 'server.js', 'source/scripts/**/*.js', 'api/**/*.js'],
		tasks: 'build-scripts',
		options: {
			reload: true,
			spawn: false
		}
	},
	styles: {
		files: 'source/styles/**/*.styl',
		tasks: 'build-styles'
	},
	gruntfile: {
		files: ['gruntfile.js']
	}
};