// generated on 2017-02-13 using generator-gulp-webapp 1.1.1
import fs from "fs-extra";
import path from "path";
import browserSync from "browser-sync";
import del from "del";
import gulp from "gulp";
// import { stream as wiredep } from "wiredep";
import concatMulti from "gulp-concat-multi";
import deploy from "gulp-gh-pages";
import babel from "gulp-babel";
import cleanCSS from "gulp-clean-css";
import stylus from "gulp-stylus";
import sourcemaps from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import useref from "gulp-useref";
import pug from "gulp-pug";
import uglify from "gulp-uglify";
import react from "gulp-react";
// import gulpIf from "gulp-if";
import imagemin from "gulp-imagemin";
import cache from "gulp-cache";
import watch from "gulp-watch";

const { src, dest, series, parallel } = gulp;

const browsersync = browserSync.create();

const deployOptions = {};
const scriptsPath = "app/scripts";

function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

// console.log({ reload });

export const deployToGh = (cb) => {
  src("dist/**/*").pipe(deploy(deployOptions));
  cb();
};

const styles = (cb) => {
  src("app/styles/main.styl")
    .pipe(sourcemaps.init())
    .pipe(
      stylus({
        paths: ["."],
      })
    )
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest("dist/styles"))
    .pipe(browserSync.reload({ stream: true }));
  cb();
};

const scripts = (cb) => {
  let pageScriptsPath = `${scriptsPath}/page_scripts`;
  getFolders(pageScriptsPath).forEach((dir) => {
    return concatMulti({
      [`${dir}.js`]: [
        `${scriptsPath}/vendor/*.js`,
        `${scriptsPath}/components/*.js`,
        `${scriptsPath}/*.js`,
        `${pageScriptsPath}/${dir}/**/*.js`,
      ],
    })
      .pipe(plumber())
      .pipe(react())
      .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(uglify())
      .pipe(dest("dist/scripts/"))
      .pipe(browserSync.reload({ stream: true }));
  });
  cb();
};

const views = () =>
  src("app/**/*.pug")
    .pipe(useref())
    .pipe(plumber())
    .pipe(pug({ pretty: false }))
    .pipe(dest("dist/"))
    .pipe(browsersync.reload({ stream: true }));

const images = () => {
  return src("app/images/**/*")
    .pipe(
      cache(
        imagemin({
          progressive: true,
          interlaced: true,
          // don't remove IDs from SVGs, they are often used
          // as hooks for embedding and styling
          svgoPlugins: [{ cleanupIDs: false }],
        })
      ).on("error", function (err) {
        console.log(err);
        this.end();
      })
    )
    .pipe(dest("dist/images"));
};

const fonts = () => {
  return src("app/fonts/*.{eot,svg,ttf,woff,woff2}").pipe(dest("dist/fonts"));
};

const extras = () => {
  return src(["app/*.*", "!app/*.html", "!app/*.pug", "app/CNAME"], {
    dot: true,
  }).pipe(dest("dist"));
};

export const build = parallel(styles, scripts, views, images, fonts, extras);

export const clean = (cw) => {
  del.bind(null, [".tmp", "dist"]);
  cw();
};

const browserSyncReload = (cb) => {
  browsersync.reload();
  cb();
};

const browserSyncTask = (cb) => {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  cb();
};

export const _watch = () => {
  watch(
    [
      "app/**/*.pug",
      "app/images/**/*",
      "app/scripts/**/*.js",
      "app/styles/**/*.styl",
    ],
    series(styles, scripts, views, images, fonts, extras, browserSyncReload)
  );
};

export const serve = series(
  styles,
  scripts,
  views,
  images,
  fonts,
  extras,
  browserSyncTask,
  _watch
);

// inject bower components
// task("wiredep", () => {
//   src("app/*.html")
//     .pipe(
//       wiredep({
//         ignorePath: /^(\.\.\/)*\.\./,
//       })
//     )
//     .pipe(dest("app"));
// });
