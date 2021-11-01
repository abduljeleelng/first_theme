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
import imagemin from 'gulp-imagemin'
// import imagemin from 'gulp-imagemin';
import watch from "gulp-watch"
// import imagemin from "imagemin"





const PRODUCTION = yargs.argv.prod;

// export const styles = async () =>{
//     return src('src/assets/scss/bundle.scss')
//     .pipe(sass.asyn().on('error', sass.logError))
//     .pipe(gulpIf(PRODUCTION, GulpCleanCss({compatibility:'ie8'})))
//     .pipe(dest('dist/asset/css'))
// }

const paths = {
    styles:{
        src:[],
        dest:''
    },
    images:{
        src:'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest:'dist/assets/images'
    },
    other:{
        src:['src/assets/**/*', '!src/assets/{images,js,scss}', '!src/assets/{images,js,scss}/**/*'],
        dest:'src/assets'
    }
}

export const styles = () =>{
    return gulp.src(['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'])
    .pipe(gulpIf(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpIf(PRODUCTION, GulpCleanCss({compatibility:'ie8'})))
    .pipe(gulpIf(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css'))
}

export const images = () =>{
    return gulp.src(paths.images.src)
    .pipe(gulpIf(PRODUCTION,imagemin()))
    .pipe(gulp.dest(paths.images.dest))
}

export const copy = ()=>{
    return gulp.src(paths.other.src)
    .pipe(paths.other.dest)
}

export const hello = (done)=>{
    console.log({PRODUCTION});
    console.log("Runing gulp");
    done();
}

