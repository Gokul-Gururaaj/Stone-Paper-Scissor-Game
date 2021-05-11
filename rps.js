function rpsGame(yourchoice)
 {
 var humanchoice,botchoice;
 humanchoice=yourchoice.id;
 botchoice=numbertothechoice(randomnotorps()); 
 result=decisionmaking(humanchoice,botchoice);
 msg=message(result);
 rpsFrontend(yourchoice.id,botchoice,msg);
 
 }
 function randomnotorps()
 {
 return Math.floor(Math.random()*3);  
 }
 function numbertothechoice(number)
 {
 return ['rock','scissor','paper'][number];  
 }
 function decisionmaking(humanchoice,botchoice)
 {
 var rpsdatabase={'rock':{'scissor':1,'rock':0.5,'paper':0},'scissor':{'paper':1,'scissor':0.5,'rock':0},'paper':{'rock':1,'paper':0.5,'scissor':0}};
 var yourscore=rpsdatabase[humanchoice][botchoice];
 return yourscore;
 }
 function message(result)
 {
 if(result===1)
 {
 return {'msg':'You Won!','color':'green'};  
 }
 else if(result===0.5)
 {
 return {'msg':'You Tied!','color':'yellow'};  
 }  
 else
 {
 return {'msg':'You Lost!','color':'red'};  
 }
 }
 function rpsFrontend(humanchoice,botchoice,message)
 {
 var imagesdatabase={'rock':document.getElementById("rock").src,'scissor':document.getElementById("scissor").src,'paper':document.getElementById("paper").src};
 document.getElementById("rock").remove();  
 document.getElementById("scissor").remove();
 document.getElementById("paper").remove();
 var humandiv=document.createElement('div');
 var robotdiv=document.createElement('div');
 var messagediv=document.createElement('div');
 humandiv.innerHTML="<img src='"+imagesdatabase[humanchoice]+"' height=350 width=350>"
 messagediv.innerHTML="<h1 style='color:"+message['color']+"; font-size:60px; padding:30px;'>"+message['msg']+"</h1>"
 robotdiv.innerHTML="<img src='"+imagesdatabase[botchoice]+"' height=350 width=350>"
 document.getElementById('flex-box-rps-div').appendChild(humandiv);
 document.getElementById('flex-box-rps-div').appendChild(messagediv);
 document.getElementById('flex-box-rps-div').appendChild(robotdiv);

 }