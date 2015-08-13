var serveStatic = require('serve-static');

module.exports = {
    server: {
        options: {
            hostname: '0.0.0.0',
            port: 9000,
            middleware: function(connect, options) {
                return [
                    require('connect-livereload')(),
                    serveStatic('tmp/')
                ];
            }
        }
    }
};
