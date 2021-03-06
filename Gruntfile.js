module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-elm');
    grunt.loadNpmTasks('grunt-exec');

    grunt.initConfig({
        'exec': {
            'elm-github-install': {
                command: 'elm-github-install'
            }
        },

        'elm': {
            compile: {
                files: {
                    'tmp/auth.js': ['src/**/*.elm']
                }
            }
        },

        'watch': {
            'dev': {
                files: ['Gruntfile.js', 'elm-package.json', 'src/**'],
                tasks: ['build'],
                options: {
                    atBegin: true
                }
            }
        },

        'clean': {
            temp: {
                src: ['tmp', "elm-stuff"]
            }
        }
    });

    grunt.registerTask('dev', ['build', 'watch:dev']);
    grunt.registerTask('build', ['exec:elm-github-install', 'elm']);
};
