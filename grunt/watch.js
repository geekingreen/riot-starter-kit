module.exports = {
	options: {
		livereload: true
	},
	scripts: {
		files: ['app/**/*.js', 'app/**/*.tag'],
		tasks: ['riot']
	},
	stylus: {
		options: {
			livereload: false
		},
		files: ['app/css/**/*.styl'],
		tasks: ['stylus:dev']
	},
	bower: {
		files: ['bower_components/**/*'],
		tasks: ['copy:dev']
	},
	css: {
		files: ['tmp/css/**/*.css'],
		tasks: []
	},
	html: {
		files: ['app/index.html'],
		tasks: ['copy:dev']
	}
};
