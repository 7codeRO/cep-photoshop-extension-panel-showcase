steps.web = {
    1: 'Import DESIRED Patterns',      // Stop
    2: 'Select a FRAME',      // Stop
    3: step3,      // Open
    4: step4,      // Make
    5: step5,      // Make
    6: step6,      // Make
    7: step7,      // Make
    8: step8,      // Select
    9: step9,      // Make
    10: step10,      // Make
    11: step11,      // Make
    12: step12,      // Make
    13: step13,      // Make
    14: step14,      // Make
    15: step15,      // Select
    16: step16,      // Make
    17: step17,      // Deselect Layers
    18: 'Fill with PATTERNS',      // Stop
    19: step19,      // Select
    20: step20,      // Fill
    21: step21,      // Select
    22: step22,      // Fill
    23: step23,      // Select
    24: step24,      // Fill
    25: step25,      // Select
    26: step26,      // Fill
    27: step27,      // Select
    28: step28,      // Fill
    29: step29,      // Hide
    30: step30,      // Hide
    31: step31,      // Hide
    32: step32,      // Hide
    33: step33,      // Hide
    34: step34,      // Hide
    35: step35,      // Select
    36: step36,      // Select
    37: 'Fill with applied COLORS',      // Stop
    38: step38,      // Select
    39: step39,      // Fill
    40: step40,      // Select
    41: step41,      // Fill
    42: step42,      // Select
    43: step43,      // Fill
    44: step44,      // Select
    45: step45,      // Fill
    46: step46,      // Select
    47: step47,      // Fill
    48: step48,      // Hide
    49: step49,      // Hide
    50: step50,      // Hide
    51: step51,      // Hide
    52: step52,      // Hide
    53: step53,      // Hide
    54: step54,      // Deselect Layers
    55: 'Fill METADATA',      // Stop
    56: 'Select an ACTION',      // Stop
};

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

// Open
function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var path = new Folder(paths.loading.presets);
    var file = path.openDlg("Choose File:");

    app.load(file);
};

// Make
function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;

    app.activeDocument.activeLayer.name = "Layer 1";

    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 4);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 5);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 6);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 7);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Select
function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    list1.putInteger(4);
    list1.putInteger(5);
    list1.putInteger(6);
    list1.putInteger(7);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Make
function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "PATTERNS");
    desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);
    desc1.putInteger(sTID("layerSectionStart"), 8);
    desc1.putInteger(sTID("layerSectionEnd"), 9);
    desc1.putString(cTID('Nm  '), "PATTERNS");
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 10);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 11);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 12);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 13);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Make
function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(cTID('Lyr '));
    desc1.putReference(cTID('null'), ref1);
    desc1.putInteger(cTID('LyrI'), 14);
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Select
function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 6");
    desc1.putReference(cTID('null'), ref1);
    desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(10);
    list1.putInteger(11);
    list1.putInteger(12);
    list1.putInteger(13);
    list1.putInteger(14);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Make
function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("layerSection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('From'), ref2);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Nm  '), "APPLIED");
    desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);
    desc1.putInteger(sTID("layerSectionStart"), 15);
    desc1.putInteger(sTID("layerSectionEnd"), 16);
    desc1.putString(cTID('Nm  '), "APPLIED");
    executeAction(cTID('Mk  '), desc1, dialogMode);
};

// Deselect Layers
function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('selectNoLayers'), desc1, dialogMode);
};


// Select
function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(3);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Idnt'), "ac33b5438-8005-11e7-ad20-90e6c7dee0d5");
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 2");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(4);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Idnt'), "9ca5af87-27ad-de41-8d99-81b31a376d36");
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 3");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(5);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Idnt'), "9ca5af87-27ad-de41-8d99-81b31a376d36");
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 4");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(6);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Idnt'), "9ca5af87-27ad-de41-8d99-81b31a376d36");
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step27(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 5");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(7);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step28(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Ptrn'));
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Idnt'), "9ca5af87-27ad-de41-8d99-81b31a376d36");
    desc1.putObject(cTID('Ptrn'), cTID('Ptrn'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Hide
function step29(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step30(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 4");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step31(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 3");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step32(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 2");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step33(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 1");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step34(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "PATTERNS");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Select
function step35(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "PATTERNS");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(8);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Select
function step36(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "APPLIED");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(15);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};


// Select
function step38(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 6");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(10);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step39(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 63.1372549019608);
    desc2.putDouble(cTID('Brgh'), 90.9803921568627);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step40(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 7");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(11);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step41(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 63.1372549019608);
    desc2.putDouble(cTID('Brgh'), 90.9803921568627);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step42(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 8");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(12);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step43(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 63.1372549019608);
    desc2.putDouble(cTID('Brgh'), 90.9803921568627);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step44(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 9");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(13);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step45(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 63.1372549019608);
    desc2.putDouble(cTID('Brgh'), 90.9803921568627);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Select
function step46(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 10");
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(14);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
};

// Fill
function step47(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = DialogModes.ALL;
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('Clr '));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(cTID('H   '), cTID('#Ang'), 0);
    desc2.putDouble(cTID('Strt'), 63.1372549019608);
    desc2.putDouble(cTID('Brgh'), 90.9803921568627);
    desc1.putObject(cTID('Clr '), cTID('HSBC'), desc2);
    desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
    desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
    executeAction(cTID('Fl  '), desc1, dialogMode);
};

// Hide
function step48(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step49(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 9");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step50(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 8");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step51(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 7");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step52(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "Layer 6");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Hide
function step53(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var list1 = new ActionList();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Lyr '), "APPLIED");
    list1.putReference(ref1);
    desc1.putList(cTID('null'), list1);
    executeAction(cTID('Hd  '), desc1, dialogMode);
};

// Deselect Layers
function step54(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(sTID('selectNoLayers'), desc1, dialogMode);
};

// Stop
function step55(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('Msge'), "METADATA");
    executeAction(cTID('Stop'), desc1, dialogMode);
};

// Stop
function step56(enabled, withDialog) {
    if (enabled != undefined && !enabled)
        return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putString(cTID('Msge'), "Select an ACTION");
    executeAction(cTID('Stop'), desc1, dialogMode);
};