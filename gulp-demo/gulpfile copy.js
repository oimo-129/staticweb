const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const del = require('del');

// 定义文件路径
const paths = {
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  },
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/images/'
  }
};

// 清理dist目录
function clean() {
  return del(['dist']);
}

// 处理HTML文件
function html() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// 处理SCSS文件
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// 处理JavaScript文件
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// 处理图片文件
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

// 监听文件变化
function watch() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });
  
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// 导出任务
exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;

// 默认任务：清理目录，构建所有文件，然后监视变化
exports.default = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, images),
  watch
);
