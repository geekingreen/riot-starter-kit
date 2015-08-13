module.exports = {
    bower: {
        files: [{
            expand: true,
            src: 'bower_components/**/*',
            dest: 'tmp/'
        }]
    },
    dev: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: ['index.js', 'index.html'],
            dest: 'tmp/'
        }]
    },
    build: {
        files: [{
            expand: true,
            cwd: 'app/',
            src: 'index.html',
            dest: 'dist/'
        }]
    }
};
