var express = require('express');
var app = expess();

app.listen(80,function(){
  console.log('Chatfuel Bot-Server listening on port 80...');
});
app.get('/*',function(req,res)){

  var questions = {
  "Q1": {
	"A": "Haha!!! No ways. Where did you buy you license? This sign warns you to be aware of lifestock on that stretch of road.",
	"B": "Exactly. Be aware of livestock on the road when you see this sign.",
	"C": "This sign means they are domestic animals on the road in this area. Be aware and stay clear."},
 "Q2":{
    "A" : "Correct! No cycling allowed here. :)",
    "B" : "No. Infact its the opposite. Cycling is not allowed here.",
    "C" : "No. Infact, cyclists have no way here."
  },
 "Q3":{
    "A" : "Nope...The answer is 30 is the MINUMUM speed limit...Yes, minimum speed limits do exist. ;)",
    "B" : "Correct! 30 is the Minimum speed limit sign. ;)",
    "C" : "Lol...Okay..we got some work to do! ... This sign actually means 30 is the minimum speed limit. -_-"
  },
  "Q4":{
    "A" : "Blue has the right of way. However, Blue must wait and give way to red if by doing so, an accident can be avoided.",
    "B" : "Always remember to anticipate the wrong actions of others. Blue must wait if Red is impatient.",
    "C" : "If you are turning right and opposit vehicle is turning left, Always give way to the vehicle turning left."
  },
  "Q5":{
    "A" : "Not correct. This means bring your vehicle to a complete stop, and only proceed when its safe to do so.",
    "B" : "not right",
    "C" : "correct. Stop, and only proceed when its safe."
  },

  "Q6":{
    "A" : "Nope, not quite. :/ This signal means WAIT",
    "B" : "Correct!!!Good Job :D Always pay attention to traffic signals and be safe.",
    "C" : "Not quite. :/ If its a solid green man, you would have been correct. When the green man is flashing it actually means WAIT!!!"
  },
  "Q7":{
    "A" : " This is exactly what you need to do. Doing anything else can be very dangerous. Same applies to any other animal actually",
    "B" : "Elephants are very sensitve animals. Hooting will agitate them. You will be lucky to walk away alive if you hoot",
    "C" : "Not quite - This may agitate the animal and lead to a very dangerous situation."
  },
  "Q8":{
    "A" : " Thats right! This applies to all vehicles, including Public Service Vehicles, with or without trailers",
    "B" : "Nope.  40km /hr is the correct speed limit. Failure to comply will lead to fines",
    "C" : "Nope. 40km/hr actually. Remember the speed limit is only a guide. Always adapt you speed according to prevailing conditions"
  },
  "Q9":{
    "A" : "Not Correct. This is a distruction that can lead to a bad crash.Keep your eyes on the road and concentrate at all times",
    "B" : "Nope!!! Its good to know your way...but make sure you park safely to check your maps...Plan your journey well to be safe on the road.",
    "C" : "Thats right. Keep you hands off your phone. Focus on the very important job you have to do,...driving safely."
  },
  "Q10":{
    "A" : "Its important you use mirrors when reversing, but thats not the only time you use the mirrors. ;)",
    "B" : "Its good to check mirrors when performing an overtaking move, but that is not the only time to do so. ;)",
    "C" : "Yes. Its important to check the mirrors every 5 - 8 seconds. The traffic situation around you is always changing so you need to be aware of whats in your rear. ;) "
  },
  "Q11":{
    "A" : "Nope. This sign indicates a handicapped parking zone.",
    "B" : "No. Not hospital zone but infact handicapped parking zone.",
    "C" : "thats correct!"
  },
  "Q12":{
    "A" : "Nope! :/ You cannot exceed speed limit. Not even to pass another vehicle.",
    "B" : "No. Not quite. :/ Yes, you must drive below the speed limit, but the exact speed you drive should take weather, road and traffic conditions into consideration. Use good judgement",
    "C" : "That correct!!! :D"
  },
  "Q13":{
    "A" : "No! Signal early. The most dangerous car may be the one you have not seen",
    "B" : "Correct. You must signal in good time. The most dangerous car may be the one you have not seen",
    "C" : "Not quite. Always signal early. The most dangerous car may be the one you have not seen"
  },
  "Q14":{
    "A" : "Not Necessarily... You must slow down and prepare to yield to traffic ahead. You may be required to stop, so be ready. ",
    "B" : "Wrong! This is a yield or give way sign. You must slow down and prepare to yield to traffic ahead. You may be required to stop, so be ready. ",
    "C" : "That is right! You must slow down and prepare to yield to traffic ahead. You may be required to stop, so be ready. "
  },
  "Q15":{
    "A" : "that's correct!",
    "B" : "Nope! The driver intends to turn left.",
    "C" : "No. Its the opposite. The driver intends to turn left."
  },
  "Q16":{
    "A" : "No :'(. All drivers must come to a complete stop when they approach a bus with red flashing signals. Drivers should also keep their distance from the stopped bus.",
    "B" : "Correct :)",
    "C" : "Not correct :'(. All drivers must come to a complete stop when they approach a bus with red flashing signals. Drivers should also keep their distance from the bus."
  },
  "Q17":{
    "A" : "Wrong. If you are driving a manual, you should choose a gear which will oppose the direction your car might roll. In this situation, you should leave your car in reverse. ",
    "B" : "Exactly. If you are driving a manual, you should choose a gear which will oppose the direction your car might roll.  ",
    "C" : "No no no!!!  If you are driving a manual, you should choose a gear which will oppose the direction your car might roll. In this situation, you should leave your car in reverse. "
  },

  "Q18":{
    "A" : ">:O >:O >:O No, that's wrong. It actually means 'crossroad ahead'",
    "B" : "Correct! :)",
    "C" : "Nope :/. It actually means 'crossroad ahead'"
  },
  "Q19":{
    "A" : "Wrong! Seatbelts have been proved to save lives. You are legally required to ensure that everyone in the front seat is wearing their seat belt. Children must also be properly secured in an appropriate child or booster seat. Legally required or otherwise, you should always ensure that every passenger is wearing their seat belt!!!",
    "B" : "Wrong! Seatbelts have been proved to save lives. You are legally required to ensure that everyone in the front seat is wearing their seat belt. Children must also be properly secured in an appropriate child or booster seat. Legally required or otherwise, you should always ensure that every passenger is wearing their seat belt!!!",
    "C" : "Correct!!! Seatbelts have been proved to save lives. You are legally required to ensure that everyone in the front seat is wearing their seat belt. Children must also be properly secured in an appropriate child or booster seat. Legally required or otherwise, you should always ensure that every passenger is wearing their seat belt!!!"
  },
  "Q20":{
    "A" : "Wrong :(. Its all the above",
    "B" : "Wrong :(. Its all the above",
    "C" : "Correct ^_^"
  }
}
  var jsonResponse = [];
  var question = req.param('question');
  var answer = req.param('answer');
  var score = req.param('score');
  jsonResponse.push({"text": questions[question][answer]});
  res.send(jsonResponse);
});
