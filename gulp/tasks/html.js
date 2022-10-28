import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-html";
import versionNumber from "gulp-version-number";
import svgInclude from "gulp-embed-svg";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    
    
    
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
