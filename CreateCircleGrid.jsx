 {
app.beginUndoGroup("Ma Code");  
var myComp = app.project.activeItem;


function circleGrid(center,myCirclesize,amp,freq)
{
  var myComp = app.project.activeItem;
        var myCirclesize= myCirclesize;
      var center= center;
      var amp =amp;
      var phase =-Math.PI/2;
      var freq= freq;
      var myLabel =Math.round(generateRandomNumber()*16);
 
 
    for (u=0; u < freq; u++)
          {
              
               var x= amp*Math.cos(phase+(u*(Math.PI*2)/freq));
               var y= amp*Math.sin(phase+(u*(Math.PI*2)/freq));
               var mySetPosition = center + [x,y];
              
          
                 var myShape= myComp.layers.addShape();
                                         var shapeGroup = myShape.property("Contents").addProperty("ADBE Vector Group");
                                         var Ellipse = shapeGroup.property("Contents").addProperty("ADBE Vector Shape - Ellipse");
                                          Ellipse.property("ADBE Vector Ellipse Size").setValue([myCirclesize,myCirclesize]);
                                        var EllipseStroke = shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
                                        EllipseStroke.property("ADBE Vector Fill Color").setValue([0,0,0]);  

                 myShape.moveToBeginning();
                 myShape.property("position").setValue(mySetPosition);
                 myShape.label=myLabel;

          }
}

circleGrid([myComp.width/2,myComp.height/2],30,400,30);



 app.endUndoGroup();
    
  }

