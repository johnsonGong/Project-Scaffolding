/**
 * 实现功能: <br/>
 * 1. jshint规范检查,
 * 2. 备份文件,合并文件,
 * 3. 混淆代码( 暂时只能,单独操作 ).
 *
 *
 * @author gonglong-20170512.
 */
module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //src: 'src/<%= pkg.name %>.js',
        //  'src/allFile.dev.js',
        src: '<%= concat.all.dest %>',
        dest: 'build/test.min.js'
      }
    },
    
    // task-任务
    concat: {
        options:{
            separator: "; /* Hello */\n"
        },
        
        // target-目标: 全部文件;
        all:{
            options:{
                separator: "; /* [all files] */\n"
            },
            src: ['src/*.js'],
            dest: '<%= pkg.dest %>/all.dev.js',
        },
        
        // target-目标: 部分文件;
        most:{
            src: ['src/Dog.js', 'src/Car.js'],
            dest: '<%= pkg.dest %>/tmp.most.dev.js',
        }
   
    },
    copy:{
        dev: {
            files:[
                {expand:true, src:['<%= concat.all.dest %>'], dest:'back/', filter: 'isFile' }
            ],
            
        }
    },
    clean: {
        src : ['<%= pkg.dest %>/*', 'build/*']
    },
     jshint: {
        all: {
          src: ['src/*.js']
        },
    },
    less:{
        dev:{
            options:{
                paths:'css',
            },
            files: {
                'css/content.css':'css/content.less'
            }
        }
    }
    
  });
  
  // Load the plugin that provides the "uglify" task.
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  //grunt.registerTask('task1', ['uglify']);
  //grunt.registerTask('concatFiles', ['concat:all']);
  //grunt.registerTask('concatFilesMost', ['concat:most']);
  //grunt.registerTask('cleanBuild', ['clean']);
  
  
  // 期望: 合并文件后，执行混淆代码
  //  Destination build/test_gong.min.js not written because src files were empty
  //grunt.registerTask('build', ['concat','uglify']);
  
  grunt.registerTask('dev', ['less:dev','copy:dev','clean','jshint:all','concat:all']);
  grunt.registerTask('test', ['uglify']);
  
  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });
  
  
};