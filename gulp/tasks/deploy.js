//  // Generate the needed credentials (bucket, secret key etc) from a "hidden" JSON file
//  var credentials = JSON.parse(fs.readFileSync("aws-credentials.json", "utf8"));
//  var publisher = $.awspublish.create(credentials);
//  // Give your files the proper headers
//  var headers = {
//    "Cache-Control": "max-age=0, no-transform, public",
//    "Content-Encoding": "gzip"
//  };
//
//  gulp.src("site/**/*")
//    .pipe($.awspublishRouter({
//      routes: {
//        "^assets/(?:.+)\\.(?:js|css)$": {
//          key: "$&",
//          headers: {
//            "Cache-Control": "max-age=315360000, no-transform, public",
//            "Content-Encoding": "gzip"
//          }
//        },
//
//        "^assets/(?:.+)\\.(?:jpg|png|gif)$": {
//          key: "$&",
//          headers: {
//            "Cache-Control": "max-age=315360000, no-transform, public",
//            "Content-Encoding": "gzip"
//          }
//        },
//
//        "^assets/fonts/(?:.+)\\.(?:eot|svg|ttf|woff)$": {
//          key: "$&",
//          headers: {
//            "Cache-Control": "max-age=315360000, no-transform, public"
//          }
//        },
//
//        "^.+\\.html": {
//          key: "$&",
//          headers: {
//            "Cache-Control": "max-age=0, no-transform, public",
//            "Content-Encoding": "gzip"
//          }
//        },
//        "^.+$": "$&"
//      }
//    }))
//    // Gzip the files for moar speed
//    .pipe($.awspublish.gzip())
//    // Parallelize the number of concurrent uploads, in this case 30
//    .pipe(parallelize(publisher.publish(), 30))
//    // Have your files in the system cache so you don"t have to recheck all the files every time
//    .pipe(publisher.cache())
//    // Synchronize the contents of the bucket and local (this deletes everything that isn"t in local!)
//    .pipe(publisher.sync())
//    // And print the ouput, glorious
//    .pipe($.awspublish.reporter())
//    // And update the default root object
//    .pipe($.cloudfront(credentials));