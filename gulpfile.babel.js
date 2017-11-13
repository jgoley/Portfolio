// generated on 2017-02-13 using generator-gulp-webapp 1.1.1
import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import concat from 'gulp-concat'
import concatMulti from 'gulp-concat-multi'
import minify from 'gulp-minify'
import deploy from 'gulp-gh-pages'
import babel from 'gulp-babel'
import debug from 'gulp-debug'
import tap from 'gulp-tap'
import cleanCSS from 'gulp-clean-css'

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const options = {};
const scriptsPath = 'app/scripts'


function getFolders(dir) {
  return fs.readdirSync(dir).filter(function(file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

gulp.task('deploy', ['build'], () => {
  return gulp.src('dist/**/*')
    .pipe(deploy(options));
});

gulp.task('styles', () => {
  return gulp.src('app/styles/main.styl')
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.stylus({
      paths: ['.']
    }))
    .pipe(cleanCSS())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  let pageScriptsPath = `${scriptsPath}/page_scripts`
  getFolders(pageScriptsPath).forEach((dir) => {
    return concatMulti(
        {
          [`${dir}.js`]: [
            `${scriptsPath}/vendor/*.js`,
            `${scriptsPath}/components/*.js`,
            `${scriptsPath}/*.js`,
            `${pageScriptsPath}/${dir}/**/*.js`,
          ]
        }
      )
      .pipe($.plumber())
      .pipe($.react())
      .pipe(babel({presets: ['es2015']}))
      .pipe($.uglify())
      .pipe(gulp.dest('dist/scripts/'))
      .pipe(reload({stream: true}));
  })
});

gulp.task('views', () => {
  return gulp.src('app/**/*.pug')
    .pipe($.useref())
    .pipe($.plumber())
    .pipe($.pug({pretty: false}))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/*.pug',
    'app/CNAME'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['views', 'styles', 'scripts','images', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist', 'app'],
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules': 'node_modules'
      }
    }
  });

  gulp.watch([
    'app/**/*.pug',
    '.tmp/styles/**/*.styl',
    '.tmp/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/**/*.pug', ['views']);
  gulp.watch('app/styles/**/*.styl', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch('app/images/**/*.js', ['images']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['views', 'styles', 'scripts','images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
