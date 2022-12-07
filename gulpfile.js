const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
// const twbsStylelintFormatter = require('stylelint-config-twbs-bootstrap');
const purgecss = require("gulp-purgecss");

/* SCSS Task */
function scssTask() {
  return src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(postcss([autoprefixer, cssnano()]))
    .pipe(dest("./dist/css/", { sourcemaps: "." }))
    // .pipe(browserSync.stream());
}

/* Watch Task */
function watchTask() {
  watch(["./scss/**/*.scss", "*.html"], scssTask);
}

exports.default = series(scssTask, watchTask);
