var gulp = require('gulp');
var sass = require('gulp-sass');

function sassy(){
    return gulp.src('src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
}

gulp.task('default', sassy);

gulp.task('watch', ()=>{
    gulp.watch('src/assets/sass/*.scss', gulp.series(sassy));
});