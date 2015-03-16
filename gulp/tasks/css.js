//// Compiles the SASS files and moves them into the "assets/stylesheets" directory
//gulp.task("styles", function () {
//  // Looks at the style.scss file for what to include and creates a style.css file
//  return gulp.src("src/assets/scss/style.scss")
//    .pipe($.sass())
//    // AutoPrefix your CSS so it works between browsers
//    .pipe($.autoprefixer("last 1 version", { cascade: true }))
//    // Directory your CSS file goes to
//    .pipe(gulp.dest("src/assets/stylesheets/"))
//    .pipe(gulp.dest("serve/assets/stylesheets/"))
//    // Outputs the size of the CSS file
//    .pipe($.size({title: "styles"}))
//    // Injects the CSS changes to your browser since Jekyll doesn"t rebuild the CSS
//    .pipe(reload({stream: true}));
//});