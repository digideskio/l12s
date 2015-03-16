//// Optimizes the images that exists
//gulp.task("images", function () {
//  return gulp.src("src/assets/images/**")
//    .pipe($.changed("site/assets/images"))
//    .pipe($.imagemin({
//      // Lossless conversion to progressive JPGs
//      progressive: true,
//      // Interlace GIFs for progressive rendering
//      interlaced: true
//    }))
//    .pipe(gulp.dest("site/assets/images"))
//    .pipe($.size({title: "images"}));
//});