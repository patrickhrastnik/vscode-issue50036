// -------------------------------------------------------
// Script zur Erstellung von Ausgabe-Sources (./dist)
// 2017 Hrastnik Patrick
//
// hras 20180112 46317 Dokus werden in Ordner ./tmp erstellt
// -------------------------------------------------------

/// --------------------------------------------
/// Ausführbare Gulp-Pakete
/// --------------------------------------------
var gulp = require("gulp");
var path = require("path");
var gutil = require('gulp-util');
var ts = require("gulp-typescript");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var change = require("gulp-change");
var sourcemaps = require("gulp-sourcemaps");
var typedoc = require("gulp-typedoc");
var sassdoc = require("sassdoc");
var fs = require('fs');
var modernizr = require('modernizr');

/// --------------------------------------------
/// Konfigurationen
/// --------------------------------------------
var modernizr_config = require('./config/modernizr');

/// --------------------------------------------
/// Variablen für das Task-Ausführen
/// --------------------------------------------
var sourceFilesTs = ['./src/ts/**/*.ts'];
var sourceFilesSass = ['./src/sass/**/*.scss'];
var sourceFilesImages = ['./src/images/**/*'];
var sourceFilesFonts = ['./src/fonts/**/*'];

/**
 * Externe Paketquellen für JavaScript
 */
var sourceFilesPackagesJs = [
    './node_modules/requirejs/require.js',
    './tmp/modernizr-build.js',
    './node_modules/underscore/underscore.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/jquery-validation/dist/jquery.validate.js',
    './node_modules/jquery-validation/dist/additional-methods.js',
    './node_modules/print-this/printThis.js',
    './node_modules/UParams/src/UParams.js',
    './node_modules/clipboard/dist/clipboard.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/bootstrap-datepicker/js/bootstrap-datepicker.js',
    './node_modules/bootstrap-slider/dist/bootstrap-slider.js',
    './node_modules/ekko-lightbox/dist/ekko-lightbox.js',
    './node_modules/datatables.net/js/jquery.dataTables.js',
    './node_modules/datatables.net-bs/js/dataTables.bootstrap.js',
    './node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js',
    './node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js',
    './node_modules/datatables.net-responsive/js/dataTables.responsive.js',
    './node_modules/typeahead.js/dist/typeahead.bundle.js',
    './node_modules/jquery-sticky-header-footer/dist/jquery-sticky-header-footer.js',
    './node_modules/floating-scroll/src/jquery.floatingscroll.js',
    './node_modules/tippy.js/dist/tippy.all.js',
    './src/js-custom/**/*.js'
];

/**
 * Externe Paketquellen für CSS
 */
var sourceFilesPackagesCss = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
    './node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css',
    './node_modules/floating-scroll/src/jquery.floatingscroll.css',
    './src/css-custom/**/*.css'
];

/// --------------------------------------------
/// Separat ausführbare Tasks
/// --------------------------------------------

/**
 * Erstellt aus den Projekt-TS-Files JavaScript
 */
gulp.task('hon:js:app:build', function () {
    var tsProject = ts.createProject("./tsconfig.json");

    return gulp.src(sourceFilesTs)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        //.pipe(uglify()) // macht alles hässlich
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(concat("holterOnline.app.js"))
        .pipe(gulp.dest("./dist/js"));
});

/**
 * Erstellt aus den Projekt-SASS-Files CSS
 * Zuerst wird ein Task ausgeführt, der das Erstellen der CSS-Files übernimmt
 */
gulp.task('hon:css:app:build', ['hon:css:app:compile'], function () {
    // Liste der Files, die anschließend benötigt werden
    var verwendeteFiles = [
        './tmp/**/*.css'
    ];

    // Benötigte Files in Ausgabeverzeichnis kopieren
    return gulp.src(verwendeteFiles)
        //.pipe(concat("holterOnline.app.css")) // Möglichkeit, um alle Ausgabefiles zu mergen
        .pipe(gulp.dest('./dist/css'));
});

/**
 * Erstellt das JS-Rahmenwerk
 */
gulp.task('hon:js:lib:build', ["hon:js:lib:modernizr:build"], function () {
    //anonyme amd module richtig benennen => define(...) => define("name", ...)
    function sanitizeRequireJS(content) {
        var name = path.basename(this.fname)
            .replace(/\.[^/.]+$/, "")
            .replace(/-/, ".")
            .replace(/\.(min|latest)$/, "");

        // Sonderfall: datatables.net - hier heißt die Datei nicht wie das zugehörige Modul
        if (name == "jquery.dataTables") {
            name = "datatables.net";
        }

        return content
            .replace(/define\( \[/gm, `define("${name}",[`)
            .replace(/define\(\[/gm, `define("${name}",[`)
            .replace(/define\(factory/gm, `define("${name}", factory`)
            .replace(/define\(function/gm, `define("${name}", function`)
    }

    return gulp.src(sourceFilesPackagesJs)
        .pipe(change(sanitizeRequireJS))
        //.pipe(uglify()) // macht alles hässlich
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(concat("holterOnline.lib.js"))
        .pipe(gulp.dest("./dist/js"));
});

/**
 * Erstellt das CSS-Rahmenwerk
 */
gulp.task('hon:css:lib:build', function () {
    return gulp.src(sourceFilesPackagesCss)
        //.pipe(concat("holterOnline.lib.css")) // Möglichkeit, um alle Ausgabefiles zu mergen
        .pipe(gulp.dest("./dist/css"));
});

/**
 * Kopiert alle Bilder nach ./dist/images
 */
gulp.task('hon:images:build', function () {
    return gulp.src(sourceFilesImages)
        .pipe(gulp.dest('./dist/images'));
});

/**
 * Kopiert Font-Files nach ./dist/fonts
 */
gulp.task('hon:fonts:build', function () {
    return gulp.src(sourceFilesFonts)
        .pipe(gulp.dest('./dist/fonts'));
});

/**
 * Dokumentation für Projekt (TypeScript) erstellen
 */
gulp.task('hon:js:doku', ['hon:tmp'], function () {
    return gulp.src(sourceFilesTs)
        .pipe(typedoc({
            mode: "file",
            module: "amd",
            target: "es5",
            readme: "none",
            //includeDeclarations: "true", // dokumentiert alle Typings-Definitionen -> dauert lange
            out: "./tmp/docs/ts/",
            hideGenerator: "true"
        }));
});

/**
 * Dokumentation für Projekt (SASS) erstellen
 */
gulp.task('hon:css:doku', ['hon:tmp'], function () {
    return gulp.src(sourceFilesSass)
        .pipe(sassdoc({
            dest: "./tmp/docs/sass/"
        }));
});

/**
 * Buildtask - führt alle Aufgaben aus, die erforderlich sind, damit alles, was kopiert werden muss, in ./dist landet
 */
gulp.task('build', [
    'hon:js:app:build',
    'hon:css:app:build',
    'hon:js:lib:build',
    'hon:css:lib:build',
    'hon:images:build',
    'hon:fonts:build'
]);

/**
 * Task zur Erstellung der Dokumentationsdateien
 */
gulp.task('hon:doku', [
    'hon:js:doku',
    'hon:css:doku'
]);
 
/// --------------------------------------------
/// Interne Tasks
/// --------------------------------------------

/**
 * Stellt sicher, dass es ein tmp-Verzeichnis gibt
 */
gulp.task('hon:tmp', function () {
    // Sicherstellen, dass tmp-Verzeichnis existiert
    if (!fs.existsSync('./tmp')) {
        fs.mkdirSync('./tmp');
    }
});

/**
 * Erstellt anhand der Modernizr-Konfiguration das Modernizr-File für das JS-Rahmenwerk
 */
gulp.task('hon:js:lib:modernizr:build', ['hon:tmp'], function (cb) {
    return modernizr.build(modernizr_config, function (code) {
        fs.writeFile('./tmp/modernizr-build.js', code, cb);
    });
});

/**
 * Kompiliert das SASS zu CSS
 */
gulp.task('hon:css:app:compile', ['hon:tmp'], function () {
    // Files zuerst in das Temp-Verzeichnis erstellen - es werden nicht alle Files benötigt
    return gulp.src(sourceFilesSass)
        .pipe(sass({
            onError: sass.logError
            //, outputStyle: "compressed"
        }))
        .pipe(gulp.dest('./tmp'));
});