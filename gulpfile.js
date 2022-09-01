const gulp = require("gulp");
const mocha = require("gulp-mocha");

// gulp.task("set-local-node-env", (done) => {
//   process.env.ENV = "local";
//   done();
// });

const srcVal = "src/test/authtest.spec.js";

const mochaOptions = {
  reporter: "list",
  timeout: 5000,
  exit: true,
};

gulp.task("local", (done) => {
  gulp.src(srcVal).pipe(mocha(mochaOptions));
  done();
});
