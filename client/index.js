/* Create an instance of CSInterface. */
var csInterface = new CSInterface();
var extensionPath = csInterface.getSystemPath(SystemPath.EXTENSION);

var jamFilesPath = [
    'jamEngine-min.jsxinc',
    'jamJSON-min.jsxinc',
    'jamActions-min.jsxinc'
];

jamFilesPath.map(fileName => {
    var absFilePath = extensionPath + '/host/lib/jam/' + fileName;
    csInterface.evalScript('$.evalFile("' + absFilePath + '");');
});

var helpersJSX = extensionPath + '/host/helpers.jsx';
csInterface.evalScript('$.evalFile("' + helpersJSX + '");');

var scanJSX = extensionPath + '/host/actionSteps/scan.jsx';
csInterface.evalScript('$.evalFile("' + scanJSX + '");');

var productsForWebJSX = extensionPath + '/host/actionSteps/productsForWeb.jsx';
csInterface.evalScript('$.evalFile("' + productsForWebJSX + '");');

var indexJSX = extensionPath + '/host/index.jsx';
csInterface.evalScript('$.evalFile("' + indexJSX + '");');


var metadataForm = document.querySelector("#metadataForm");
var setMetadataButton = document.querySelector("#setMetadata");
setMetadataButton.addEventListener("click", function(e){
    e.preventDefault();
    var elements = metadataForm.elements;
    var obj = {};
    for(var i = 0; i < elements.length; i++) {
        var key = elements[i].getAttribute('name');
        var value = elements[i].value;
        obj[key] = value;
    }
    var stringified = JSON.stringify(obj);
    csInterface.evalScript("setFormMetadata("+stringified+")");
    unfocus();
});


var messageArea = document.querySelector("#messageArea");

var playButton = document.querySelector("#play");
playButton.addEventListener("click", function(){
    $('.fa-cogs').show(); $('.fa-exclamation-circle').hide();
    csInterface.evalScript("playAgainActionFile()");
});

var continueButton = document.querySelector("#continue");
continueButton.addEventListener("click", function(){
    displayProcessingState(true);
    csInterface.evalScript("continueActionFile()");
});

var stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", function(){
    displayProcessingState(false);
    messageArea.value = 'Play again';
    csInterface.evalScript("stopAction()");
});

var revertButton = document.querySelector("#revert");
revertButton.addEventListener("click", function(){
    // $('.fa-cogs').hide(); $('.fa-exclamation-circle').show();
    csInterface.evalScript("revertAction()");
});

$('#selectActionButton').click(function(){
    var actionPath = $('#select-actions').val();
    //$('.play-buttons').show();
    $('.play-buttons button').prop('disabled', false);
    csInterface.evalScript("selectAction('"+escape(actionPath)+"')");
});

$('#hideDialogs').change(function(){
    var val = $(this).prop('checked');
    csInterface.evalScript("toggleActionDialogs("+val+")");
});


var scanButton = document.querySelector("#scan");
scanButton.addEventListener("click", function(){
    messageArea.value = 'Please fill the Paths';
    $('#select-action-wrapper').hide();
    $('#patterns-wrapper').hide();
    csInterface.evalScript("scan()");
});

var nextButton = document.querySelector("#next");
nextButton.addEventListener("click", function(){
    var type = $('.top-buttons button.selected').attr('id');
    csInterface.evalScript("nextStep('"+type+"')");
});

var productForWebButton = document.querySelector("#web");
productForWebButton.addEventListener("click", function(){
    messageArea.value = 'Import DESIRED Patterns';

    csInterface.evalScript("productsForWeb()");
    $('#patterns-wrapper').show();

    // deactivate all Tools
    focusTool('');

});

var productsForPrintButton = document.querySelector("#print");
productsForPrintButton.addEventListener("click", function(){
    messageArea.value = 'products for print';
    $('#select-action-wrapper').show();
    $('#metadata').hide();
    $('#patterns-wrapper').hide();

    csInterface.evalScript("productsForPrint()");
});

$('.path-buttons .selectPath').click(function(){
    var type = $(this).closest('.path-select').data('type');
    csInterface.evalScript("selectPath('"+type+"')");
});

$('.top-buttons button').click(function(){
    $('.top-buttons button').removeClass('selected');
    $(this).addClass("selected");
    $('.play-buttons button').prop('disabled', false);

    $('#next').prop('disabled', false);

});

function focusTool(tool) {
    $('.ps-icon, .topcoat-toggle').attr('disabled', true).prop('checked', false);
    $('.topcoat-toggle[id="'+tool+'"], .ps-icon[for="'+tool+'"').attr('disabled', false).prop('checked', true).css('z-index', '1');
}

function displayProcessingState(run) {
    if(run) {
        $('.fa-cogs').show();
        $('.fa-exclamation-circle').hide();
    } else {
        $('.fa-cogs').hide();
        $('.fa-exclamation-circle').show();
    }
}

$(document).on('resize scroll', function(e) {
    $('#overlay').css('top', $(window).scrollTop());
});

function focusByID(id, submitMeta) {
    $('.ps-icon, .topcoat-icon-button').css('z-index', '-1');
    $('#overlay').show();
    $(id).addClass('popup');
    if(submitMeta) {
        $('#submitMeta').addClass('popup');
    }
}

function unfocus() {
    $('.ps-icon, .topcoat-toggle').attr('disabled', false);
    $('.ps-icon, .topcoat-icon-button').css('z-index', '0');
    $('*').removeClass('popup');
    $('#overlay').hide();
}


csInterface.addEventListener("displayMessage", function(event){
    messageArea.value = event.data;
    handleStopMessages(event.data);
});

csInterface.addEventListener("setMetadataValue", function(event){
    var [field, value] = event.data.split('|||');
    $('#metadata *[name="'+field+'"]').val(value);
});


csInterface.addEventListener("playedAction", function(event){
    if(event.data.indexOf('[stop]') > -1) {
        var splitted = event.data.split('[stop]');
        var stopMessage = splitted[1];
        displayProcessingState(false);
        handleStopMessages(stopMessage);
    } else {
        displayProcessingState(true);
        unfocus();
    }
    messageArea.value = event.data.replace('[stop]', "\n");
});

function handleStopMessages(message) {
    switch(message) {

        case 'Make SELECTION':
            // Ctrl + Alt + T / Transform
            focusTool('marqueeRectTool');
            break;

        case 'Select COLOR':
            focusTool('eyedropperTool');
            break;

        case 'Fill METADATA':
            focusByID('#metadata', true);
            $('#metadata').show();
            break;

        case 'SEAMLESS PATTERN':
            unfocus();
            break;

        case 'Select an ACTION':
            $('#select-action-wrapper').show();
            //$('.play-buttons').show();
            break;

        default:

    }
}

csInterface.addEventListener("displayPatterns", function(event){
    if(!event.data) return;
    var patterns = event.data.split(',');
    if(Object.keys(patterns).length) {
        document.querySelector('#select-patterns').innerHTML = '';
        patterns.map(function (filePath, index) {
            var displayName = decodeURIComponent(filePath.split('PATTERNS').slice(-1)[0]);
            document.querySelector('#select-patterns').innerHTML += '<option value="' + filePath + '">' + displayName + '</option>';
        });
    }
});

csInterface.addEventListener("displayActions", function(event){
    if(!event.data) return;
    var actionFiles = event.data.split(',');

    if(Object.keys(actionFiles).length) {
        $('#selectActionButton').prop('disabled', false);
        $('#select-action-wrapper').show();

        document.querySelector('#select-actions').innerHTML = '';
        actionFiles.map(function (filePath, index) {
            var displayName = decodeURIComponent(filePath.split('PATTERNS').slice(-1)[0]);
            document.querySelector('#select-actions').innerHTML += '<option value="' + filePath + '">' + displayName + '</option>';
        })
    }
});

csInterface.addEventListener("selectedPath", function(event){
    var splitted = event.data.split('::');
    var type = splitted[0];
    var path = decodeURIComponent(splitted[1]);

    $('.path-select[data-type="'+type+'"] .textPath').val(path);

});

function setInitialPaths() {
    var paths = localStorage.paths === undefined ? {} : JSON.parse(localStorage.paths);
    $('.path-select[data-type]').each(function(){
        var type = $(this).data('type');
        $(this).find('.textPath').val(paths[type]);
    });
}


$('#select-patterns').change(function(){
    if($(this).val()) {
        $('#web, #print').prop('disabled', false);
    }
});


var loadPatternsButton = document.querySelector("#load-patterns");
loadPatternsButton.addEventListener("click", function(){
    messageArea.value = 'Loaded patterns';
    csInterface.evalScript("loadPatterns()");
});

var loadActionsButton = document.querySelector("#load-actions");
loadActionsButton.addEventListener("click", function(){
    messageArea.value = 'Loaded actions';
    csInterface.evalScript("loadActions()");
});