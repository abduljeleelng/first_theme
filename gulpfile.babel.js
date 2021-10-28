// function defaultTask(cb) {
//     // place code for your default task here
//     console.log("default gulp ")
//     cb();
// }
  
// exports.default = defaultTask

import gulp, {src, dest} from "gulp"
import yargs from "yargs"
// import sass from 'sass'
import gulpsass from 'gulp-sass'
import nodeSass from 'node-sass'
const sass = gulpsass(nodeSass)
import gulpIf from "gulp-if"
import GulpCleanCss from "gulp-clean-css"
import sourcemaps from "gulp-sourcemaps"





const PRODUCTION = yargs.argv.prod;

// export const styles = async () =>{
//     return src('src/assets/scss/bundle.scss')
//     .pipe(sass.asyn().on('error', sass.logError))
//     .pipe(gulpIf(PRODUCTION, GulpCleanCss({compatibility:'ie8'})))
//     .pipe(dest('dist/asset/css'))
// }

export const styles = () =>{
    return gulp.src(['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'])
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(PRODUCTION, GulpCleanCss({compatibility:'ie8'})))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css'))
}

export const hello = (done)=>{
    console.log({PRODUCTION});
    console.log("Runing gulp");
    done();
}

