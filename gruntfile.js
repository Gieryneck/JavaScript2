module.exports = function(grunt) {
  
  // Project configuration
  grunt.initConfig({


    sass: {

        options: {

            sourceMap: true
        },


        dist: {

            files: {
              'css/style.css': 'sass/sass.sass'
            }
        }

    },




    watch: {

        styles: {

            files: ['sass/*.sass'],
            tasks: ['sass'],
            options: {
                spawn: false,
            },        
        },

        scripts: {

            files: ['gruntfile.js', 'js/*.js'],
            tasks: ['jshint'],
            options: {
                spawn: false,
          },
        }

    },




    jshint: {

        all: ['gruntfile.js', 'js/*.js']
    },




    browserSync: {
        dev: {  
            bsFiles: {
                src: [
                    'js/*.js',
                    'css/*.css',
                    '*.html'
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }  
    }

  }); 


  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');



  // Default tasks
  grunt.registerTask('default', ['sass', 'jshint', 'browserSync', 'watch']);


};