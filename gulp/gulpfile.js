const gulp = require("gulp");
const copy = require("gulp-copy");
const imageMin = require("gulp-imagemin");
const minify = require("gulp-uglify");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");

/*
    ----常用方法
    1.gulp.task   :定义任务
    2.gulp.src    :输入文件路径
    3.gulp.dest   :输出文件路径
    4.gulp.watch  :监听文件变化

    ----node反法
    1.pipe          :管道
*/

// 定义默认任务
gulp.task("default",() => {
	console.log("hello gulp");
});

// 定义具体任务
gulp.task("message",() => {
	console.log("执行具体任务需要在终端运行gulp message(任务名)");
});

// ------------------------------

//定义拷贝任务
gulp.task("copy",() => {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

//定义压缩文件任务
gulp.task("imageMin",() => {
	gulp.src("src/images/*")
	    .pipe(imageMin())
	    .pipe(gulp.dest("dist/images"));
});

// -------------------------------

/*
   ----定义压缩js代码任务
   1.下载模块  -- gulp-uglify
   2. 引入模块 -- require()
   3. 定义任务 -- task
   4. 在src下创建一个js文件夹，并创建一个js文件
   5. 实现任务
*/
gulp.task("minify",() => {
	gulp.src("src/js/*.js")
	    .pipe(minify())
	    .pipe(gulp.dest("dist/js"));
});

// -------------------------------

// 定义sass转css任务
gulp.task("sass",() => {
	gulp.src("src/sass/*.scss")
	    .pipe(sass())
	    .pipe(gulp.dest("dist/css"));
});

//---------------------------------

// 默认执行以上任务
gulp.task("default",["message","copy","imageMin","minify","sass"]);

// 监听任务
gulp.task("watch",() => {
	gulp.watch("src/*.html",["copy"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/js/*.js",["minify"]);
	gulp.watch("src/images/*",["imageMin"]);
});

// webserver :实时刷新服务器
gulp.task("webserver",() => {
    return gulp.src("app")
               .pipe(webserver({
               	   port:4000,
               	   livereload:true,
               	   open:true
               }))
});















