{
     app.beginUndoGroup("My Code");
// Keep the initial placement

var initiall="960:340,1101.42138671875:398.578643798828,1160:540,1101.42138671875:681.42138671875,960:740,818.57861328125:681.42138671875,760:540,818.57861328125:398.578643798828";

var finall="1172.13208007812:752.132019042969,1260:540,1172.13208007812:327.867950439453,960:240,747.867980957031:327.867950439453,660:540,747.867980957031:752.132019042969,960:840";

function permutator(inputArr) {
    var results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }



function makeIntoArray(arrayName)
{
       
         splitIntoArray= arrayName.split(",");
         var myfinallArray  =[];
         for (u=0; u < splitIntoArray.length; u++)
         {
             
         ArrayAtIndex = splitIntoArray[u];
         splitIntoXY = ArrayAtIndex.split(":");
         splitIntoX = parseFloat(splitIntoXY[0]);
         splitIntoY = parseFloat(splitIntoXY[1]);
         myfinallArrayIndex = [splitIntoX, splitIntoY];
         myfinallArray[u]=myfinallArrayIndex;
             
             }
    return myfinallArray;
    }



var initiallArray =makeIntoArray(initiall);
var finallArray = makeIntoArray(finall);
//alert(permutator(finallArray));
var megaArray= permutator(finallArray);


            var bestCombo= [initiallArray,finallArray];
            var smallestCombovalues =50000;


        //change stuff in the initiall array... 

                for (c=0; c < megaArray.length; c++)
                {
                    var inspectionIndex=megaArray[c];
                                //change stuff in the finall array... 


                            var aggregate= 0;
                                for (b=0; b < inspectionIndex.length; b++)
                                {
                                
                                finallArray=inspectionIndex;

                                var x1=initiallArray[b][0];
                                var x2=finallArray[b][0];
                                
                                var y1=initiallArray[b][1];
                                var y2=finallArray[b][1];
                                
                                var deltax = Math.abs(x2-x1);
                                var deltay = Math.abs(y2-y1);
                                
                                var delta = Math.sqrt((deltax*deltax)+(deltay*deltay));

                                }

                                aggregate+= delta;
                                if (aggregate<smallestCombovalues)
                                {
                                bestCombo= [initiallArray,finallArray];
                                smallestCombovalues=aggregate;
                                }


                }







var foundinitiall = bestCombo[0];
var foundfinall = bestCombo[1];

var myComp = app.project.activeItem;
var selectedLayers = myComp.selectedLayers;


                                for (mm = 0; mm<selectedLayers.length; mm++)
                                  {
                                         selectedLayers[mm].property("position").setValueAtTime(myComp.time,foundinitiall[mm]);
                                         selectedLayers[mm].property("position").setValueAtTime(myComp.time+.5,foundfinall[mm]);


                                         var n = selectedLayers[mm].property("position").nearestKeyIndex(myComp.time);

                                         if (selectedLayers[mm].property("position").keyValue(n) > myComp.time){
                                             n--;
                                           }



                                         var easeIn = new KeyframeEase(0,98);
                                         var easeOut = new KeyframeEase(0,35);
                         



                                         selectedLayers[mm].property("position").setTemporalEaseAtKey(n,[easeIn],[easeOut]);
                                         selectedLayers[mm].property("position").setTemporalEaseAtKey(n+1,[easeIn],[easeOut]);

                                }
alert(megaArray.length)

     app.endUndoGroup();

 }