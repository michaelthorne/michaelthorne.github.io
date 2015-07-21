module.exports = function (grunt) {

    grunt.initConfig({
        csslint: {
            all: {
                src: [
                    '_site/assets/css/style.css'
                ],
                options: {
                    csslintrc: '.csslintrc',
                    import: 2
                }
            }
        },
        htmllint: {
            all: ['_site/**/*.html', '!_site/styleguide/**/*.html']
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['csslint', 'eslint', 'htmllint']);
};
