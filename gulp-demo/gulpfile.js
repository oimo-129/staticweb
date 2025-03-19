const gulp = require('gulp');
//1.任务的名称
gulp.task('task01',()=>{
//回调函数的书写
  // 复制到不同目录
  return gulp.src('src/js/main.js')
    .pipe(gulp.dest('src/js/copy/'));
  
  // 或者使用gulp-rename插件复制为新名称
  // return gulp.src('src/js/main.js')
  //   .pipe(rename('main.copy.js'))
  //   .pipe(gulp.dest('src/js/'));
});
 