# CEP Photoshop Extension Panel Showcase


## What this sample is
This sample showcases various features and capabilities of CEP, including:
- Importing/Exporting different assets (Patterns, Actions Files, Images) using dynamic paths
- Playback options for Action Files (.atn) such as: Play Again, Stop, Continue, Revert
- Communication on both sides between client and host (.jsx file) via CEP Events
- Running a set of pre-defined action steps, generated from an Action File
- Triggering different dialogs and tools of Photoshop CC
- Setting XMP Metadata based on a html form 
- Handling History states
- Integration with AngularJS 


### Screenshots

Screenshot #1             |  Screenshot #2
:-------------------------:|:-------------------------:
![Screenshot 1](https://i.imgur.com/dqQk7D9.png)  |  ![Screenshot 2](https://i.imgur.com/YyxmkRS.png)

## How to get started
### Move `cep-photoshop-extension-panel-showcase` folder to the extension folder
Note that the extension folder location is different depending on which OS you use. 
* OS X: 
`/Library/Application Support/Adobe/CEP/extensions/`

See [CEP Cookbook](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#extension-folders) for more details.


### These are some helper functions used for this project
* playActionFile
* selectTool
* getCurrentTool
* definePattern
* exportPattern
* getPatternIndexByName
* selectLayerForward
* selectLayerBackward
* getLoadedPresets
* loadNewAppFile
* displayPatterns
* isSelectionActive
* stopOrContinue 
* waitForRedraw 
* parseCommand 
* scanSubFolders
* executeCommand 
* getPatternsFileInfo 
* setFormMetadata
* loadActions
* loadPatterns


### Credits
* [JAM (JSON Action Manager)](http://www.tonton-pixel.com/json-photoshop-scripting/json-action-manager/index.html).



## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact
* If you encounter some problems, don't hesitate to contact me at: igor.mardari@7code.ro
