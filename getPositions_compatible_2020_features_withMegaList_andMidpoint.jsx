/*Copyright 2020 Tomilola Adewale

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 

{
    


    function selected_rbutton (rbuttons)
    {
    for (var i = 0; i < rbuttons.children.length; i++)
    if (rbuttons.children[i].value == true)
    return i;
    }


function myScript(thisObj) {
          function myScript_buildUI(thisObj) {
                    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Get&Set Position!", [0, 0, 220, 200]);


function myFocusFunction()
{if (this.text ===this.text) {this.text=""}
    }


function myBlurFunction()
{if (this.text ==="") {this.text=this.text}
    }

 












        var pan1_00 = myPanel.add ("panel");

        
   myPanel.alignChildren = "fill";
   
pan1_00.alignChildren = "fill"; 




var et_convertCode = pan1_00.add ("edittext", [0,0,200,200], "",{multiline: true});

var bt_convert = pan1_00.add ("button", undefined, "Extract Position Data");

var bt_run= pan1_00.add ("button", undefined, "Create Keyframes");




var group_0 = myPanel.add ("group");
var bt_save = group_0.add ("button", undefined, "Save");
var bt_import = group_0.add ("button", undefined, "Import");
var bt_mega = group_0.add ("button", undefined, "CreateMegaList");



var group_00 = myPanel.add ("group");

var bt_forward = group_00.add ("button", undefined, "F");
var bt_backward = group_00.add ("button", undefined, "B");
var bt_repeat = group_00.add ("button", undefined, "S");
var bt_verthor = group_00.add ("button", undefined, "M");




function saveTxt(txt,myPatho)
{

    var saveFile = File(myPatho);


    if(saveFile.exists)
        saveFile.remove();

    saveFile.encoding = "UTF8";
    saveFile.open("e", "TEXT", "????");
    saveFile.writeln(txt);
    saveFile.close();
    alert("Saved!")
}

function saveTxt2(txt,theName)
{


    var saveFile = File("/Users/tomilola/Desktop" + "/" + theName +".txt");

    if(saveFile.exists)
        saveFile.remove();

    saveFile.encoding = "UTF8";
    saveFile.open("e", "TEXT", "????");
    saveFile.writeln(txt);
    saveFile.close();
}

function mySave()
{

try{
var dskTop = Folder.desktop;

    var dskTop = Folder.desktop;

    var dskPth = String(dskTop);

    var newSpot = new File(dskPth+"/myArray");

    var selectedFolder = newSpot.saveDlg('Select Destination Folder');

    var illFilePath = selectedFolder.path;

    //alert(illFilePath);
    //alert(selectedFolder.name);
    var comboname=illFilePath.toString()+"/"+selectedFolder.name.toString()+".txt";
    //alert(comboname);
    
    saveTxt(et_convertCode.text,comboname);
    }
catch(err)
{}
    }



//new stuff



function tomiImageSample(startPosition, endPosition, xInterval, yInterval, circleSize, theFolderVar, myIndexx) {


    var sourceName = theFolderVar.item(parseInt(myIndexx + 1)).name;

//alert(sourceName);
    var myComp = app.project.activeItem;
    var myNull = myComp.layers.addNull();
    myNull.name ="Processing..."




    var startPosition = startPosition
    var endPosition = endPosition;
    var xInterval = xInterval
    var yInterval = yInterval;



    var xSize = endPosition[0] - startPosition[0];
    var ySize = endPosition[1] - startPosition[1];


    var xTimes = Math.floor(xSize / xInterval);
    var yTimes = Math.floor(ySize / yInterval);


    var gridCount = xTimes * yTimes;
    //alert([gridCount, xTimes, yTimes]);



    if (circleSize == null) {
        var circleSize = xInterval / 2;
    } else {
        var circleSize = circleSize
    };



    var capturedData = "";

    //start of calc loop
    var nothingCounter = 0;
    
    
    for (i = 0; i < gridCount; i++) {
        var positionToInspect = startPosition + [(i % xTimes) * xInterval, Math.floor(i / xTimes) * yInterval];
        //alert(positionToInspect);
        var myExp = 'target = comp("opts").layer("'+sourceName+'");\nresult=target.sampleImage([' + positionToInspect[0] + ',' + positionToInspect[1] + '], [.5, .5]/2, true, time);\n[(result[1]+result[2]+result[0]/3),result[3]];'
        myNull.property("position").expression = myExp;
        //alert(myNull.property("rotation").valueAtTime(0, false));
        var myFoundAlpha = parseFloat(myNull.property("position").valueAtTime(0, false)[1]);
        //alert(myFoundVal);

        if (myFoundAlpha == 1) { //something is there ... do something
            //alert("triggered")
            var myFoundVal = parseFloat(myNull.property("position").valueAtTime(0, false)[0]);

                                                            //if over a certain amount, put it in the list
                                                            if (myFoundVal <= .85) {
                                                                capturedData += positionToInspect[0] + ":" + positionToInspect[1] + ",";
                                                            }

                                            } else 
                                        
                                            { //nothin is ther, keep count
                                                        nothingCounter++;
                                                            if (nothingCounter % 100 == 0) {
                                                                //alert(nothingCounter +" out of "+ gridCount);
                                                            }


                                              }//end  of found alphaElse case 
                                          
                                          
                                         }//end  of gridCount



myNull.remove();
//alert(capturedData+" aye");

                                                        var myChangeToTheText = capturedData.split("");
                                                        myChangeToTheText.pop();
                                                        //myChangeToTheText.push('"');

                                                        var brandNewText = myChangeToTheText.join("");
                                                        return brandNewText;


} //end of ImageSampling function



function createMyMegaList()
{
                                                          var myCurrentComp = app.project.activeItem;
                                                         var selectedLayers = myCurrentComp.selectedLayers;
                                       // alert(selectedLayers.length);



                            var yourFolderName="MyImages";          
                            var folderName = yourFolderName.toLowerCase(); // name of item you're looking for
                                            var myFolder = null;
                                            
                                            
                                            for (var i = 1; i <= app.project.numItems; i++)
                                            {
                                                    if ((app.project.item(i).name.toLowerCase() == folderName))
                                                    {
                                                            myFolder = app.project.item(i);
                                                            break;
                                                    }
                                            } //find the asset folder name you define and make it the variable "myFolder" 
                                        
                                        
                                            if (myFolder != null)
                                            {
                                                    var numInFolder = myFolder.numItems;
                                                   
                                            }
                                            else
                                            {
                                                    alert("Can't find comp '" + folderName + "'");
                                                    yourFolderName="";
                                            } //using the nubmer of rows and columns and other comp secs, we make the griditem comps here
                                            
                                        
                                        
                                        
                                            if (myFolder != null)
                                            {
                                                
                                                
                                           var numInFolder = myFolder.numItems;
                                                        var megaListText="";
                                                        for (var ff = 0; ff < numInFolder; ff++)
                                                        {
                                                            var newAddition=tomiImageSample([50,50],[1950,1080],50,50,0,myFolder,ff);

                                                            megaListText+=newAddition.toString()+';';
                                                            
                                                            
                                                            }
                                                        
                                                        
                                                        alter=megaListText.split("");
                                                        alter.pop();
                                                        megaListText=alter.join("");
                                                        saveTxt2(megaListText, "MyMegaListText");
                                                        et_convertCode.text = megaListText;
                                                        // alert(brandNewText);
//end of create megaList
                                                        }
}





//old stuff




function convertScript()
{
    
                                     {
                                     app.beginUndoGroup("Undo Create Position Array Code");

                                 var myComp = app.project.activeItem;
                                 var selectedLayers = myComp.selectedLayers;

                                myArray="";

                                for (m = 0; m<selectedLayers.length; m++)
                                  {
                                     
                                         var myPosition = selectedLayers[m].property("position").valueAtTime(myComp.time,false);
                                         
                                         if (m==selectedLayers.length-1)
                                                 {
                                                myArray+=myPosition[0]+":"+myPosition[1];
                                                }
                                                else
                                                {
                                                    myArray+=myPosition[0]+":"+myPosition[1]+","
                                                    }
                                                
                                }


                                //var name ="getArrayValues";                                

                                    var myString=myArray;


                                    et_convertCode.text = myString;

                                    }


                                    //alert("Success!");

//enscript
    
    
    
    }


    function runForward()
    {
    
        {
        app.beginUndoGroup("Undo Run Code");

   var myGottenString=et_convertCode.text;
   var gotten =myGottenString.split(",");

   var endPiece= gotten.pop();
   gotten.unshift(endPiece);
   et_convertCode.text = gotten.toString();
       }

//enscript

}

function runBackward()
{

    {
    app.beginUndoGroup("Undo Run Code");

var myGottenString=et_convertCode.text;
var gotten =myGottenString.split(",");

var startPiece= gotten.shift();
gotten.push(startPiece);
et_convertCode.text = gotten.toString();
   }

//enscript

}




function runRepeat()
{
                                     {
                                     app.beginUndoGroup("Undo Run Code");

                                 var myComp = app.project.activeItem;
                                 var selectedLayers = myComp.selectedLayers;

                                var myGottenString=et_convertCode.text;
                                var gotten =myGottenString.split(",");

                                for (mm = 0; mm<selectedLayers.length; mm++)
                                  {
                                    var oneUnit = gotten[mm%gotten.length].split(":");
                                    var myFigure = [parseFloat(oneUnit[0]),parseFloat(oneUnit[1])];
                                    var myPosition = selectedLayers[mm].property("position").setValueAtTime(myComp.time,myFigure);
                                                
                                }
                                    }
//enscript
    
    }



    function runVertHor()
{
                                     {
                                     app.beginUndoGroup("Undo Run Code");


                                 var myComp = app.project.activeItem;
                                 var selectedLayers = myComp.selectedLayers;
                                 var timelineTime = myComp.time;

                                 //alert("hey");

                                for (mm = 0; mm<selectedLayers.length; mm++)
                                  {
                                    //alert("bro");
 
                                    var nn = selectedLayers[mm].property("position").nearestKeyIndex(timelineTime);

                                    if (selectedLayers[mm].property("position").keyValue(nn) > timelineTime){
                                        nn--;
                                      }
                                      //alert(nn);


                                      var firstKey=selectedLayers[mm].property("position").keyValue(nn);
                                      var secondKey=selectedLayers[mm].property("position").keyValue(nn+1);


                                      var midVal = [firstKey[0],secondKey[1]];

                                    var myPosition = selectedLayers[mm].property("position").setValueAtTime(timelineTime,midVal);
                                                
                                    var easeIn = new KeyframeEase(0,100);
                                    var easeOut = new KeyframeEase(0,50);
                    
                                    selectedLayers[mm].property("position").setTemporalEaseAtKey(nn,[easeIn],[easeOut]);
                                    selectedLayers[mm].property("position").setTemporalEaseAtKey(nn+1,[easeIn],[easeOut]);



                                }






                                    }
//enscript
    
    }








    function runScript()
{
    
                                     {
                                     app.beginUndoGroup("Undo Run Code");

                                 var myComp = app.project.activeItem;
                                 var selectedLayers = myComp.selectedLayers;

                                var myGottenString=et_convertCode.text;
                                var gotten =myGottenString.split(",");




                                for (mm = 0; mm<selectedLayers.length; mm++)
                                  {
                                    var oneUnit = gotten[mm].split(":");
                                    var myFigure = [parseFloat(oneUnit[0]),parseFloat(oneUnit[1])];
                                    var myPosition = selectedLayers[mm].property("position").setValueAtTime(myComp.time,myFigure);
                                                
                                }


                                    }



//enscript
    
    
    
    
    
    
    
    }



    function myImport()
    {
        
        
        
    var myFile = File.openDialog();
    //var myFile = File("~/Desktop/test/schedules.json");
     myFile.open();
     var content = myFile.read();
     myFile.close();
     
     et_convertCode.text= content;
    //~  
     
     
        recalculate();
        
        
        
        }











bt_convert.onClick = convertScript;
bt_save.onClick = mySave;
bt_run.onClick= runRepeat;
bt_import.onClick = myImport;
bt_mega.onClick = createMyMegaList;

bt_forward.onClick = runForward;
bt_backward.onClick = runBackward;
bt_repeat.onClick= runScript;
bt_verthor.onClick = runVertHor;




 
                    // DropDownList default selection
                    //myPanel.grp.myDropDownList.selection = 2;//Item index starts at 0
 
 
                    //Setup panel sizing and make panel resizable
                    myPanel.layout.layout(true);
                    //myPanel.pan1.minimumSize = myPanel.pan1.size;
                    myPanel.layout.resize();
                    myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
 
                    return myPanel;
          }
 
 
          var myScriptPal = myScript_buildUI(thisObj);
 
 
          if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
                    myScriptPal.center();
                    myScriptPal.show();
                    }
          }

          myScript(this);
}
 
