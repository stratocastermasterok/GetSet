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


var bt_convert = pan1_00.add ("button", undefined, "Extract Position Code");


var et_convertCode = pan1_00.add ("edittext", [0,0,200,70], "",{multiline: true});

var bt_run= pan1_00.add ("button", undefined, "Run");
var bt_save = pan1_00.add ("button", undefined, "Save");
var bt_import = pan1_00.add ("button", undefined, "Import");




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





bt_convert.onClick = convertScript;
bt_save.onClick = mySave;
bt_run.onClick= runScript;
bt_import.onClick = myImport;



 
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
 
