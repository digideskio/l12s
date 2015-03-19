/**
 *
 */

//  var assets = $.useref.assets({searchPath: "serve"});
//
//  return gulp.src("serve/**/*.html")
//    .pipe(assets)
//    // Concatenate JavaScript files and preserve important comments
//    .pipe($.if("*.js", $.uglify({preserveComments: "some"})))
//    // Minify CSS
//    .pipe($.if("*.css", $.minifyCss()))
//    // Start cache busting the files
//    .pipe($.revAll({ ignore: [".eot", ".svg", ".ttf", ".woff"] }))
//    .pipe(assets.restore())
//    // Conctenate your files based on what you specified in _layout/header.html
//    .pipe($.useref())
//    // Replace the asset names with their cache busted names
//    .pipe($.revReplace())
//    // Minify HTML
//    .pipe($.if("*.html", $.htmlmin({
//      removeComments: true,
//      removeCommentsFromCDATA: true,
//      removeCDATASectionsFromCDATA: true,
//      collapseWhitespace: true,
//      collapseBooleanAttributes: true,
//      removeAttributeQuotes: true,
//      removeRedundantAttributes: true
//    })))
//    // Send the output to the correct folder
//    .pipe(gulp.dest("site"))
//    .pipe($.size({title: "optimizations"}));
