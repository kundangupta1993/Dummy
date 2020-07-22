var gulp = require("gulp");
var htcompile = require("gulp-htmlmin");
var plumber = require("gulp-plumber");
var rp = require("gulp-replace");
var debug = require("gulp-debug");

const S3_BUCKET_PRODUCTION = "//ddppor7579eia.cloudfront.net/";
const S3_BUCKET_STAGING = "//d4kcggv2s2ep2.cloudfront.net/";

gulp.task("st", function() {
  return gulp
    .src("local/*.html")
    .pipe(plumber())
    .pipe(debug({ title: "production compile" }))
    .pipe(
      rp(
        "https://s3-eu-west-1.amazonaws.com/studio.gf.staging/",
        S3_BUCKET_STAGING
      )
    )
    .pipe(rp("//d4kcggv2s2ep2.cloudfront.net/", S3_BUCKET_STAGING))
    .pipe(gulp.dest("build-staging/html/"));
});


gulp.task("pt", function() {
  return gulp
    .src("local/*.html")
    .pipe(plumber())
    .pipe(debug({ title: "production compile" }))
    .pipe(
      rp(
        "https://s3-eu-west-1.amazonaws.com/studio.gf.staging/",
        S3_BUCKET_PRODUCTION
      )
    )
	.pipe(htcompile({ collapseWhitespace: true }))
    .pipe(rp("//ddppor7579eia.cloudfront.net/", S3_BUCKET_PRODUCTION))
    .pipe(gulp.dest("build-production/html/"));
});
