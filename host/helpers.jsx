function s2t(s) { return app.stringIDToTypeID(s); }
function t2s(t) { return app.typeIDToStringID(t); }

// Select the Tool corresponding to the passed stringID
function selectTool(stringID){
    var d = new ActionDescriptor();
    var r = new ActionReference();
    r.putClass( s2t(stringID) );
    d.putReference( s2t("target"), r);
    d.putBoolean( s2t("dontRecord"), true );
    d.putBoolean( s2t("forceNotify"), true );
    executeAction( s2t("select"), d, DialogModes.NO );
}

// Returns the StringID of the selected Tool
function getCurrentTool() {
    var r = new ActionReference();
    r.putProperty( s2t("property"), s2t("tool") );
    r.putEnumerated( s2t("application"), s2t("ordinal"), s2t("targetEnum") );
    var d = executeActionGet(r);
    return t2s( d.getEnumerationType( s2t("tool") ) );
}

function definePattern(patternName) {
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Ptrn'));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Prpr'), sTID("selection"));
    ref2.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('Usng'), ref2);
    desc1.putString(cTID('Nm  '), patternName);
    executeAction(cTID('Mk  '), desc1, dialogMode);
}

function exportPattern(patternIndex, patternPath) {
    var idsetd = charIDToTypeID("setd");
    var desc74 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    desc74.putPath(idnull, new File(patternPath));
    var idT = charIDToTypeID("T   ");
    var list10 = new ActionList();

    var ref31 = new ActionReference();
    var idPtrn = charIDToTypeID("Ptrn");

    ref31.putIndex(idPtrn, patternIndex);
    list10.putReference(ref31);
    desc74.putList(idT, list10);
    executeAction(idsetd, desc74, DialogModes.NO);
}


function getPatternIndexByName(match) {
    try {
        var r = new ActionReference();
        r.putProperty(charIDToTypeID("Prpr"), stringIDToTypeID("presetManager"));
        r.putEnumerated(charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));

        var list = executeActionGet(r).getList(stringIDToTypeID("presetManager"));

        for (var i = 0; i < list.count; i++) {
            if (list.getObjectType(i) == charIDToTypeID("PttR")) {
                var list2 = list.getObjectValue(i).getList(stringIDToTypeID("name"));

                for (var x = 0; x < list2.count; x++) {
                    var name = list2.getString(x);
                    if (name.indexOf(match) >= 0) return x + 1;
                }

                break;
            }
        }

        return -1;
    }
    catch (e) {
        alert(e);
        return -1;
    }
}

function selectLayerForward() {
    var idslct = charIDToTypeID( "slct" );
    var desc360 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref127 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idFrwr = charIDToTypeID( "Frwr" );
    ref127.putEnumerated( idLyr, idOrdn, idFrwr );
    desc360.putReference( idnull, ref127 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc360.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
    var list55 = new ActionList();
    list55.putInteger( 2 );
    desc360.putList( idLyrI, list55 );
    executeAction( idslct, desc360, DialogModes.NO );
}

function selectLayerBackward() {
    var idslct = charIDToTypeID( "slct" );
    var desc443 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref157 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idBckw = charIDToTypeID( "Bckw" );
    ref157.putEnumerated( idLyr, idOrdn, idBckw );
    desc443.putReference( idnull, ref157 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc443.putBoolean( idMkVs, false );
    var idLyrI = charIDToTypeID( "LyrI" );
    var list67 = new ActionList();
    list67.putInteger( 43 );
    desc443.putList( idLyrI, list67 );
    executeAction( idslct, desc443, DialogModes.NO );
}

function getLoadedPresets()
{
    // List all presets available in Photoshop in JSON format
    var categories =
        {
            "'PttR'": "patterns",
        };
    var presetsObj = { };
    jamEngine.meaningfulIds = true;
    jamEngine.parseFriendly = true;
    var resultDescriptorObj = jamEngine.jsonGet
    (
        [
            [ "property", [ "<property>", "presetManager" ] ],
            [ "application", [ "<enumerated>", [ "ordinal", "targetEnum" ] ] ]
        ]
    );

    var presetManagerArr = resultDescriptorObj["presetManager"][1];
    for (var i = 0; i < presetManagerArr.length; i++)
    {
        var preset = presetManagerArr[i][1];
        var namesArr = preset[1]["name"][1];
        var names = [ ];
        for (var j = 0; j < namesArr.length; j++)
        {
            var nameString = namesArr[j][1];
            names.push (nameString);
        }
        presetsObj[categories[preset[0]]] = names;
    }
    return presetsObj;
}


function loadNewAppFile(filePath) {
    var patternFile = new File(filePath);
    try {
        app.load(patternFile);
    } catch(e) {
        alert(e);
    }
}


function displayPatterns() {
    var presetObj = getLoadedPresets();
    var patterns = presetObj.patterns;

    var event = new CSXSEvent();
    event.type = "displayPresets";
    event.data = jamJSON.stringify(patterns);
    event.dispatch();
}

function isSelectionActive() {
    var selected;
    try {
        selected = app.activeDocument.selection.bounds;
    } catch(e) {
        selected = false;
    }
    return selected;
}


function stopOrContinue (message, command, allowContinue)
{

    var desc = new ActionDescriptor ();
    desc.putString (app.stringIDToTypeID ("message"), message);

    message = command.dictionaryName + ': ' + message + " \r\n ";
    message += '[stop]' + command.stopMessage;

    var event = new CSXSEvent();
    event.type = "playedAction";
    event.data =  message;
    event.dispatch();

    if (typeof allowContinue !== 'undefined')
    {
        desc.putBoolean (app.stringIDToTypeID ("continue"), allowContinue);
    }

    app.executeAction (app.stringIDToTypeID ("stop"), desc, DialogModes.NO);
}

function sendMessageToClient(message)
{
    var event = new CSXSEvent();
    event.type = "displayMessage";
    event.data =  message;
    event.dispatch();
}

function sendMetadataValueToClient(field, value)
{
    var event = new CSXSEvent();
    event.type = "setMetadataValue";
    event.data = field + '|||' + value;
    event.dispatch();
}


function waitForRedraw ()
{
    var desc = new ActionDescriptor ();
    desc.putEnumerated (app.stringIDToTypeID ("state"), app.stringIDToTypeID ("state"), app.stringIDToTypeID ("redrawComplete"));
    app.executeAction (app.stringIDToTypeID ("wait"), desc, DialogModes.NO);
}


function parseCommand (command)
{
    var resultDescriptorObj = jamEngine.eventIdAndActionDescriptorToJson (command.eventId, command.actionDescriptor);
    command.event = resultDescriptorObj["<event>"];
    command.descriptor = resultDescriptorObj["<descriptor>"];
    command.stopMessage = '';

    try {
        if (typeof resultDescriptorObj["<descriptor>"]['\'Msge\''] !== 'undefined') {
            command.stopMessage = resultDescriptorObj["<descriptor>"]['\'Msge\'']['<string>'];
        } else if (typeof resultDescriptorObj["<descriptor>"]['message'] !== 'undefined') {
            command.stopMessage = resultDescriptorObj["<descriptor>"]['message'][1];
        }
    } catch(e) {
        // alert('parseCommand: ' + e);
    }
}

function scanSubFolders(tFolder, mask) { // folder object, RegExp or string
    var sFolders = new Array();
    var allFiles = new Array();
    sFolders[0] = tFolder;
    for (var j = 0; j < sFolders.length; j++){ // loop through folders
        var procFiles = sFolders[j].getFiles();
        for (var i=0;i<procFiles.length;i++){ // loop through this folder contents
            if (procFiles[i] instanceof File ){
                if(mask==undefined) allFiles.push(procFiles[i]);// if no search mask collect all files
                if (procFiles[i].fullName.search(mask) != -1) allFiles.push(procFiles[i]); // otherwise only those that match mask
            }else if (procFiles[i] instanceof Folder){
                sFolders.push(procFiles[i]);// store the subfolder
                scanSubFolders(procFiles[i], mask);// search the subfolder
            }
        }
    }
    return [allFiles,sFolders];
};

function executeCommand (command)
{
    fromCommandIndex++;

    parseCommand(command);

    try
    {
        if (command.enabled)
        {

            var event = new CSXSEvent();
            event.type = "playedAction";
            event.data = command.dictionaryName;
            event.dispatch();

            var localPlayCommand = jamActions.isLocalPlayCommand (command, inFileData.actionSet.name);
            if (localPlayCommand !== null)
            {
                jamActions.traverseAction (inFileData.actionSet, localPlayCommand[0], localPlayCommand[1], localPlayCommand[2]);
            }
            else
            {
                var dialogMode = jamActions.determineDialogMode (command);
                if(hideDialogMode === true) {
                    dialogMode = DialogModes.NO;
                }

                app.executeAction (command.eventId, command.actionDescriptor, dialogMode);
                if (customOptions.stepByStep)
                {
                    waitForRedraw ();
                }
            }
        }
    }
    catch (e)
    {
        if (e.number === 8007) {  // User cancel error
            stopOrContinue (e.message.replace (/^.*\n- /, ""), command, customOptions.allowContinue);
        }
    }
}


function getPatternsFileInfo (inFile)
{
    var info = null;
    function isPatFile (f)
    {
        return ((f.type === '8BPT') || f.name.match (/\.pat$/i)) || f.name.match (/^Patterns.psp$/i);
    }
    var patFilter =
        (File.fs === "Macintosh") ?
            function (f) { return (f instanceof Folder) || isPatFile (f) } :
            "Patterns Files:*.pat,Patterns Preferences File:Patterns.psp,All Files:*.*";
    var defaultInFolder = new Folder (customOptions.defaultInFolder);
    if (inFile)
    {
        customOptions.defaultInFolder = inFile.parent.fsName;
        if (inFile.open ('r'))
        {
            function readBEInt (file, byteCount)
            {
                var bytes = file.read (byteCount);
                var intValue = 0;
                for (var index = 0; index < byteCount; index++)
                {
                    intValue = (intValue << 8) + bytes.charCodeAt (index);
                }
                return intValue;
            }
            function readUnicodeString (file)
            {
                var unicodeString = "";
                var unicodeLength = readBEInt (file, 4);	// Includes terminating null
                for (var index = 0; index < unicodeLength; index++)
                {
                    var unicodeChar = readBEInt (file, 2);
                    if (unicodeChar !== 0)
                    {
                        unicodeString += String.fromCharCode (unicodeChar);
                    }
                }
                return unicodeString;
            }
            function readBytes (file, byteCount)
            {
                return file.read (byteCount);
            }
            function readPascalString (file)
            {
                var stringLength = readBEInt (file, 1);
                return readBytes (file, stringLength);
            }
            function skipBytes (file, byteCount)
            {
                file.seek (byteCount, 1);
            }
            //
            info = { };
            inFile.encoding = 'BINARY';
            var magicNumber = readBytes (inFile, 4);
            if (magicNumber === '8BPT')
            {
                var formatVersion = readBEInt (inFile, 2);
                if (formatVersion === 1)
                {
                    var imageModes = [ "Bitmap", "Grayscale", "Indexed", "RGB", "CMYK", null, null, "Multichannel", "Duotone", "Lab" ];
                    var patterns = [ ];
                    var patternCount = readBEInt (inFile, 4);
                    for (var index = 0; index < patternCount; index++)
                    {
                        var pattern = { };
                        var patternVersion = readBEInt (inFile, 4);
                        if (patternVersion === 1)
                        {
                            pattern["version"] = patternVersion;
                            pattern["imageMode"] = imageModes[readBEInt (inFile, 4)];
                            pattern["height"] = readBEInt (inFile, 2);
                            pattern["width"] = readBEInt (inFile, 2);
                            pattern["name"] = localize (readUnicodeString (inFile));
                            pattern["ID"] = readPascalString (inFile);
                            if (pattern["imageMode"] === "Indexed")
                            {
                                skipBytes (inFile, 256 * 3);	// Color table
                                skipBytes (inFile, 4);		    // ??
                            }
                            // Virtual Memory Array List
                            var vmalVersion = readBEInt (inFile, 4);
                            if (vmalVersion === 3)
                            {
                                var vmalLength = readBEInt (inFile, 4);
                                skipBytes (inFile, vmalLength);
                            }
                            else
                            {
                                pattern["error"] = "Unsupported VMAL version: " + vmalVersion;
                            }
                        }
                        else
                        {
                            pattern["error"] = "Unsupported pattern version: " + patternVersion;
                        }
                        patterns.push (pattern);
                        if ("error" in pattern)
                        {
                            break;
                        }
                    }
                    info["patterns"] = patterns;
                }
                else
                {
                    info["error"] = "Unsupported patterns file format version: " + formatVersion;
                }
            }
            inFile.close ();
        }
        else
        {
            alert ("Error: cannot open patterns file.");
        }
    }
    return info;
}