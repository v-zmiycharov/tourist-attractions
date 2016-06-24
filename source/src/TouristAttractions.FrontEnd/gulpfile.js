var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = '../TouristAttractions/wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("../TouristAttractions/wwwroot/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('../TouristAttractions/wwwroot/libs/css'));
});

gulp.task("contentAndHtml", () => {
    gulp.src([
        'content/**'
    ]).pipe(gulp.dest('../TouristAttractions/wwwroot/content'));

    gulp.src([
        '**/*.html'
    ]).pipe(gulp.dest('../TouristAttractions/wwwroot'));
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "scripts/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('../TouristAttractions/wwwroot/scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/**/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'contentAndHtml', 'watch']);