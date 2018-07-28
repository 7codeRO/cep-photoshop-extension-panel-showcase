steps.scan = {
    1: step1,               // WIA Support
    2: 'Make SELECTION',    // STOP
    3: step3,               // Make
    4: step4,               // Select
    5: step5,               // Set
    6: step6,               // Delete
    7: step7,               // Clear All Guides
    8: step8,               // Trim

    9: 'Make SELECTION',    // STOP
    10: step3,               // Make
    11: step4,               // Select
    12: step5,               // Set
    13: step6,               // Delete
    14: step7,               // Clear All Guides
    15: step8,               // Trim

    16: step9,               // Convert Mode
    17: step10,             // Convert to Profile
    18: 'Select COLOR',     // STOP
    19: 'Fill METADATA',    // STOP
    20: step13,             // Offset
    21: 'SEAMLESS PATTERN', // STOP
    22: step14,             // Dust & Scratches
    23: step15,             // Box Blur
    24: step16,             // Image Size
    25: step17,             // Image Size
    26: step18,             // Make
    27: step19,             // Close
    28: step20,             // Open
    29: step21,             // Fill
    30: step22,             // Convert Mode
    31: step23,             // Image Size
    32: step24,             // Export
    33: step25,             // Close
};

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

// WIA Support
function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(cTID('OpPS'), true);
    desc1.putBoolean(cTID('CrUF'), false);
    executeAction(sTID('WIAWizard0001'), desc1, dialogMode);
};


// Make
function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    if(!isSelectionActive()) {
        throw new Error('No Selection');
        return false;
    }

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc1.putObject(cTID('Nw  '), cTID('Lyr '), desc2);
    desc1.putEnumerated(cTID('Usng'), cTID('ArSl'), cTID('Slct'));
    desc1.putBoolean(cTID('Cpy '), true);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};


// Select
function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);

    selectLayerForward();

};

// Set
function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;


    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();

    // ref1.putProperty(cTID('Lyr '), cTID('Bckg'));
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref1.putEnumerated( idLyr, idOrdn, idTrgt );

    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc2.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
    desc1.putInteger(cTID('LyrI'), 3);
    executeAction(cTID('setd'), desc1, dialogMode);
};


// Delete
function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;


    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('Dlt '), desc1, dialogMode);

};

// Clear All Guides
function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('clearAllGuides'), undefined, dialogMode);
};


// Trim
function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(sTID("trimBasedOn"), sTID("trimBasedOn"), cTID('Trns'));
    desc1.putBoolean(cTID('Top '), true);
    desc1.putBoolean(cTID('Btom'), true);
    desc1.putBoolean(cTID('Left'), true);
    desc1.putBoolean(cTID('Rght'), true);
    executeAction(sTID('trim'), desc1, dialogMode);
};

// Convert Mode
function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;


    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Dpth'), 16);
    desc1.putBoolean(cTID('Mrge'), false);
    executeAction(sTID('convertMode'), desc1, dialogMode);
};

// Convert to Profile
function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('T   '), "ProPhoto RGB");
    desc1.putEnumerated(cTID('Inte'), cTID('Inte'), cTID('Clrm'));
    desc1.putBoolean(cTID('MpBl'), true);
    desc1.putInteger(cTID('sdwM'), 2);

    executeAction(sTID('convertToProfile'), desc1, dialogMode);

};


// Offset
function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    withDialog = true;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Hrzn'), 59);
    desc1.putInteger(cTID('Vrtc'), 16);
    desc1.putEnumerated(cTID('Fl  '), cTID('FlMd'), cTID('Rpt '));
    executeAction(cTID('Ofst'), desc1, dialogMode);
};


// Dust & Scratches
function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Rds '), 1);
    desc1.putInteger(cTID('Thsh'), 0);
    executeAction(sTID('dustAndScratches'), desc1, dialogMode);
};

// Box Blur
function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 1);
    executeAction(sTID('boxblur'), desc1, dialogMode);
};

// Image Size
function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 600);
    desc1.putBoolean(sTID("scaleStyles"), true);
    desc1.putBoolean(cTID('CnsP'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), sTID("deepUpscale"));
    desc1.putInteger(cTID('Nose'), 0);
    executeAction(sTID('imageSize'), desc1, dialogMode);
};

// Image Size
function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Wdth'), cTID('#Prc'), 50);
    desc1.putBoolean(sTID("scaleStyles"), true);
    desc1.putBoolean(cTID('CnsP'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), sTID("deepUpscale"));
    desc1.putInteger(cTID('Nose'), 0);
    executeAction(sTID('imageSize'), desc1, dialogMode);
};

// Define and Export Pattern
function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var patternName = metaData.denumire + '_' + metaData.cod_furnizor;
    patternPath = paths.exporting.patterns + '/' + patternName + '.pat';

    definePattern(patternName);

    var lastPatternIndex = getPatternIndexByName(patternName);

    exportPattern(lastPatternIndex, patternPath);

    return 'The pattern was saved at: ' + patternPath;
};

// Close
function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 307);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, dialogMode);
};

// Open
function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var file = new File(paths.loading.sample);
    app.load(file);

};

// Fill
function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var patternFilePath = new File(patternPath);
    var patternInfo = getPatternsFileInfo(patternFilePath);
    var patternID = patternInfo.patterns[0].ID;

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();

    desc2.putString(cTID('Nm  '), app.activeDocument.name);
    desc2.putString(cTID('Idnt'), patternID);
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));

    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Convert Mode
function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('Dpth'), 8);
    desc1.putBoolean(cTID('Mrge'), false);
    executeAction(sTID('convertMode'), desc1, dialogMode);
};

// Image Size
function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);
    desc1.putBoolean(sTID("scaleStyles"), true);
    desc1.putBoolean(cTID('CnsP'), true);
    desc1.putEnumerated(cTID('Intr'), cTID('Intp'), sTID("deepUpscale"));
    desc1.putInteger(cTID('Nose'), 0);
    executeAction(sTID('imageSize'), desc1, dialogMode);

};


// Export
function step24(enabled, withDialog) {

    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);


    var sampleName = metaData.denumire + '_' + metaData.cod_furnizor + '.gif';
    var samplePath = paths.exporting.samples + '/' + sampleName;


    var idExpr = charIDToTypeID( "Expr" );
    var desc36 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var desc37 = new ActionDescriptor();
    var idOp = charIDToTypeID( "Op  " );
    var idSWOp = charIDToTypeID( "SWOp" );
    var idOpSa = charIDToTypeID( "OpSa" );
    desc37.putEnumerated( idOp, idSWOp, idOpSa );
    var idDIDr = charIDToTypeID( "DIDr" );
    desc37.putBoolean( idDIDr, true );
    var idIn = charIDToTypeID( "In  " );
    desc37.putPath( idIn, new File( paths.exporting.samples ) );
    var idovFN = charIDToTypeID( "ovFN" );
    desc37.putString( idovFN, sampleName );
    var idFmt = charIDToTypeID( "Fmt " );
    var idIRFm = charIDToTypeID( "IRFm" );
    var idGIFf = charIDToTypeID( "GIFf" );
    desc37.putEnumerated( idFmt, idIRFm, idGIFf );
    var idIntr = charIDToTypeID( "Intr" );
    desc37.putBoolean( idIntr, false );
    var idRedA = charIDToTypeID( "RedA" );
    var idIRRd = charIDToTypeID( "IRRd" );
    var idSltv = charIDToTypeID( "Sltv" );
    desc37.putEnumerated( idRedA, idIRRd, idSltv );
    var idRChT = charIDToTypeID( "RChT" );
    desc37.putBoolean( idRChT, false );
    var idRChV = charIDToTypeID( "RChV" );
    desc37.putBoolean( idRChV, false );
    var idAuRd = charIDToTypeID( "AuRd" );
    desc37.putBoolean( idAuRd, false );
    var idNCol = charIDToTypeID( "NCol" );
    desc37.putInteger( idNCol, 32 );
    var idDChS = charIDToTypeID( "DChS" );
    desc37.putInteger( idDChS, 0 );
    var idDCUI = charIDToTypeID( "DCUI" );
    desc37.putInteger( idDCUI, 0 );
    var idDChT = charIDToTypeID( "DChT" );
    desc37.putBoolean( idDChT, false );
    var idDChV = charIDToTypeID( "DChV" );
    desc37.putBoolean( idDChV, false );
    var idWebS = charIDToTypeID( "WebS" );
    desc37.putInteger( idWebS, 0 );
    var idTDth = charIDToTypeID( "TDth" );
    var idIRDt = charIDToTypeID( "IRDt" );
    var idNone = charIDToTypeID( "None" );
    desc37.putEnumerated( idTDth, idIRDt, idNone );
    var idTDtA = charIDToTypeID( "TDtA" );
    desc37.putInteger( idTDtA, 100 );
    var idLoss = charIDToTypeID( "Loss" );
    desc37.putInteger( idLoss, 0 );
    var idLChS = charIDToTypeID( "LChS" );
    desc37.putInteger( idLChS, 0 );
    var idLCUI = charIDToTypeID( "LCUI" );
    desc37.putInteger( idLCUI, 100 );
    var idLChT = charIDToTypeID( "LChT" );
    desc37.putBoolean( idLChT, false );
    var idLChV = charIDToTypeID( "LChV" );
    desc37.putBoolean( idLChV, false );
    var idTrns = charIDToTypeID( "Trns" );
    desc37.putBoolean( idTrns, true );
    var idMtt = charIDToTypeID( "Mtt " );
    desc37.putBoolean( idMtt, true );
    var idDthr = charIDToTypeID( "Dthr" );
    var idIRDt = charIDToTypeID( "IRDt" );
    var idDfsn = charIDToTypeID( "Dfsn" );
    desc37.putEnumerated( idDthr, idIRDt, idDfsn );
    var idDthA = charIDToTypeID( "DthA" );
    desc37.putInteger( idDthA, 88 );
    var idMttR = charIDToTypeID( "MttR" );
    desc37.putInteger( idMttR, 255 );
    var idMttG = charIDToTypeID( "MttG" );
    desc37.putInteger( idMttG, 255 );
    var idMttB = charIDToTypeID( "MttB" );
    desc37.putInteger( idMttB, 255 );
    var idSHTM = charIDToTypeID( "SHTM" );
    desc37.putBoolean( idSHTM, false );
    var idSImg = charIDToTypeID( "SImg" );
    desc37.putBoolean( idSImg, true );
    var idSWsl = charIDToTypeID( "SWsl" );
    var idSTsl = charIDToTypeID( "STsl" );
    var idSLAl = charIDToTypeID( "SLAl" );
    desc37.putEnumerated( idSWsl, idSTsl, idSLAl );
    var idSWch = charIDToTypeID( "SWch" );
    var idSTch = charIDToTypeID( "STch" );
    var idCHsR = charIDToTypeID( "CHsR" );
    desc37.putEnumerated( idSWch, idSTch, idCHsR );

    desc37.putEnumerated( cTID('SWmd'), cTID('STmd'), cTID('MDAl') );

    var idohXH = charIDToTypeID( "ohXH" );
    desc37.putBoolean( idohXH, false );
    var idohIC = charIDToTypeID( "ohIC" );
    desc37.putBoolean( idohIC, true );
    var idohAA = charIDToTypeID( "ohAA" );
    desc37.putBoolean( idohAA, true );
    var idohQA = charIDToTypeID( "ohQA" );
    desc37.putBoolean( idohQA, true );
    var idohCA = charIDToTypeID( "ohCA" );
    desc37.putBoolean( idohCA, false );
    var idohIZ = charIDToTypeID( "ohIZ" );
    desc37.putBoolean( idohIZ, true );
    var idohTC = charIDToTypeID( "ohTC" );
    var idSToc = charIDToTypeID( "SToc" );
    var idOCzerothree = charIDToTypeID( "OC03" );
    desc37.putEnumerated( idohTC, idSToc, idOCzerothree );
    var idohAC = charIDToTypeID( "ohAC" );
    var idSToc = charIDToTypeID( "SToc" );
    var idOCzerothree = charIDToTypeID( "OC03" );
    desc37.putEnumerated( idohAC, idSToc, idOCzerothree );
    var idohIn = charIDToTypeID( "ohIn" );
    desc37.putInteger( idohIn, -1 );
    var idohLE = charIDToTypeID( "ohLE" );
    var idSTle = charIDToTypeID( "STle" );
    var idLEzerothree = charIDToTypeID( "LE03" );
    desc37.putEnumerated( idohLE, idSTle, idLEzerothree );
    var idohEn = charIDToTypeID( "ohEn" );
    var idSTen = charIDToTypeID( "STen" );
    var idENzerozero = charIDToTypeID( "EN00" );
    desc37.putEnumerated( idohEn, idSTen, idENzerozero );
    var idolCS = charIDToTypeID( "olCS" );
    desc37.putBoolean( idolCS, false );
    var idolEC = charIDToTypeID( "olEC" );
    var idSTst = charIDToTypeID( "STst" );
    var idSTzerozero = charIDToTypeID( "ST00" );
    desc37.putEnumerated( idolEC, idSTst, idSTzerozero );
    var idolWH = charIDToTypeID( "olWH" );
    var idSTwh = charIDToTypeID( "STwh" );
    var idWHzeroone = charIDToTypeID( "WH01" );
    desc37.putEnumerated( idolWH, idSTwh, idWHzeroone );
    var idolSV = charIDToTypeID( "olSV" );
    var idSTsp = charIDToTypeID( "STsp" );
    var idSPzerofour = charIDToTypeID( "SP04" );
    desc37.putEnumerated( idolSV, idSTsp, idSPzerofour );
    var idolSH = charIDToTypeID( "olSH" );
    var idSTsp = charIDToTypeID( "STsp" );
    var idSPzerofour = charIDToTypeID( "SP04" );
    desc37.putEnumerated( idolSH, idSTsp, idSPzerofour );
    var idolNC = charIDToTypeID( "olNC" );
    var list1 = new ActionList();
    var desc38 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCzerozero = charIDToTypeID( "NC00" );
    desc38.putEnumerated( idncTp, idSTnc, idNCzerozero );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc38 );
    var desc39 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNConenine = charIDToTypeID( "NC19" );
    desc39.putEnumerated( idncTp, idSTnc, idNConenine );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc39 );
    var desc40 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwoeight = charIDToTypeID( "NC28" );
    desc40.putEnumerated( idncTp, idSTnc, idNCtwoeight );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc40 );
    var desc41 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc41.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc41 );
    var desc42 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc42.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc42 );
    var desc43 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc43.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list1.putObject( idSCnc, desc43 );
    desc37.putList( idolNC, list1 );
    var idobIA = charIDToTypeID( "obIA" );
    desc37.putBoolean( idobIA, false );
    var idobIP = charIDToTypeID( "obIP" );
    desc37.putString( idobIP, "" );
    var idobCS = charIDToTypeID( "obCS" );
    var idSTcs = charIDToTypeID( "STcs" );
    var idCSzeroone = charIDToTypeID( "CS01" );
    desc37.putEnumerated( idobCS, idSTcs, idCSzeroone );
    var idovNC = charIDToTypeID( "ovNC" );
    var list2 = new ActionList();
    var desc44 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCzeroone = charIDToTypeID( "NC01" );
    desc44.putEnumerated( idncTp, idSTnc, idNCzeroone );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc44 );
    var desc45 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwozero = charIDToTypeID( "NC20" );
    desc45.putEnumerated( idncTp, idSTnc, idNCtwozero );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc45 );
    var desc46 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCzerotwo = charIDToTypeID( "NC02" );
    desc46.putEnumerated( idncTp, idSTnc, idNCzerotwo );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc46 );
    var desc47 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNConenine = charIDToTypeID( "NC19" );
    desc47.putEnumerated( idncTp, idSTnc, idNConenine );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc47 );
    var desc48 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCzerosix = charIDToTypeID( "NC06" );
    desc48.putEnumerated( idncTp, idSTnc, idNCzerosix );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc48 );
    var desc49 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc49.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc49 );
    var desc50 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc50.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc50 );
    var desc51 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwofour = charIDToTypeID( "NC24" );
    desc51.putEnumerated( idncTp, idSTnc, idNCtwofour );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc51 );
    var desc52 = new ActionDescriptor();
    var idncTp = charIDToTypeID( "ncTp" );
    var idSTnc = charIDToTypeID( "STnc" );
    var idNCtwotwo = charIDToTypeID( "NC22" );
    desc52.putEnumerated( idncTp, idSTnc, idNCtwotwo );
    var idSCnc = charIDToTypeID( "SCnc" );
    list2.putObject( idSCnc, desc52 );
    desc37.putList( idovNC, list2 );
    var idovCM = charIDToTypeID( "ovCM" );
    desc37.putBoolean( idovCM, false );
    var idovCW = charIDToTypeID( "ovCW" );
    desc37.putBoolean( idovCW, false );
    var idovCU = charIDToTypeID( "ovCU" );
    desc37.putBoolean( idovCU, true );
    var idovSF = charIDToTypeID( "ovSF" );
    desc37.putBoolean( idovSF, true );
    var idovCB = charIDToTypeID( "ovCB" );
    desc37.putBoolean( idovCB, true );
    var idovSN = charIDToTypeID( "ovSN" );
    desc37.putString( idovSN, "images" );
    var idSaveForWeb = stringIDToTypeID( "SaveForWeb" );
    desc36.putObject( idUsng, idSaveForWeb, desc37 );
    executeAction( idExpr, desc36, DialogModes.NO );

    return 'The sample was saved at: ' + samplePath;
};

// Close
function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 348);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, DialogModes.NO);
};

