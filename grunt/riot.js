module.exports = {
	options: {
		concat: true
	},
	dev: {
		src: ['app/mixins/**/*.js', 'app/tags/**/*.tag'],
		dest: 'tmp/tags.js'
	}
}
