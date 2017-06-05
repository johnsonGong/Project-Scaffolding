module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      
      options: {
        banner: '/*! author:gonglong. <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
        
        src: ['build/concat.js'],
        dest: 'build/concat.min.js'
      }
    },
    
    requirejs : {
        compile:{
            options:{
                baseUrl: './src',
                //mainConfigFile: 'amd/reader.js',
                optimize: 'none',
                name:'app',
                // paths: {
                //     "move": "js/libs/move.gli",
                // },
                
                //include : ['amd/network.js', 'amd/reader.js'],
                out: 'build/unwrap_amd.dev.js',
                onModuleBundleComplete: function(data) {
                    var fs = module.require('fs'),
                        amdclean = module.require('amdclean'),
                        outputFile = data.path,
                        cleanedCode = amdclean.clean({
                            'filePath': outputFile
                        });

                    fs.writeFileSync(outputFile, cleanedCode);
                }
            }
        }
    },
 
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    
    grunt.registerTask('default', ['requirejs']);

};