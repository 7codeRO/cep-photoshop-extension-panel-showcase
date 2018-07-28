var customOptions = {};

try {
    new ExternalObject( "lib:" + "PlugPlugExternalObject" );
} catch (e) {
    alert(e);
}

var actionLocator = 0;
var fromCommandIndex = 0;
var actionsFilePath;
var inFileData;

var metaData = {};
var patternPath;

var paths = {
    loading: {
        scan: "/F/8. SCAN/",
        actions: "/g/SCAN",
        patterns: '/J/3. PATTERNS',
        presets: "/J/4. PRESETS/1. Frames",
        sample: "/J/4. PRESETS/1. Frames/Samples.psd"
    },
    exporting: {
        samples: '/F/7. SAMPLES',
        patterns: '/J/3. PATTERNS',
    }
};

var currentStep = 1;
var steps = {};

var stateOnWebComplete;
var hideDialogMode = false;