class DrivingSchool {
  currentQuestion = 1;
  faultpoints = 0;
  maxErrorPoints = 9;
  richtigeAntworten = 0;
  falscheAntworten = 0;
  bestanden = false;

  questions = {
    1: {
      question: "If you're going 80 km/h, and you're approaching a residential area you must:",
      answer: [
        ["You accelerate", false],
        ["You keep your speed, if you do not pass other vehicles", false],
        ["You slow down", true],
        ["You keep your speed", false]
      ],
      faultpoints: 4
    },
    2: {
      question: "If you're turning right at a traffic light, but see a pedestrian crossing what do you do:",
      answer: [
        ["You pass the pedestrian", false],
        ["You check that there is no other vehicles around", false],
        ["You wait until the pedestrian has crossed", true],
        ["You shoot the pedestrian and continue to drive", false]
      ],
      faultpoints: 4
    },
    3: {
      question: "Without any prior indication, the speed in a residential area is: __ km/h",
      answer: [
        ["30 km/h", false],
        ["50 km/h", true],
        ["40 km/h", false],
        ["60 km/h", false]
      ],
      faultpoints: 4
    },
    4: {
      question: "Before every lane change you must:",
      answer: [
        ["Check your mirrors", true],
        ["Check your blind spots", true],
        ["Signal your intentions", true]
      ],
      faultpoints: 3
    },
    5: {
      question: "What blood alcohol level is classified as driving while intoxicated?",
      answer: [
        ["0.05%", false],
        ["0.18%", false],
        ["0.06%", true],
        ["0.08%", false]
      ],
      faultpoints: 4
    },
    6: {
      question: "When can you continue to drive at a traffic light?",
      answer: [
        ["When it is green", false],
        ["When there is nobody in the intersection", false],
        ["You are in a school zone", false],
        ["When it is green and / or red and you're turning right", true]
      ],
      faultpoints: 4
    },
    7: {
      question: "A pedestrian has a do not cross signal, what do you do?",
      answer: [
        ["You let them pass", false],
        ["You observe before continuing", false],
        ["You wave to tell them to cross", false],
        ["You continue because your traffic light is green", true]
      ],
      faultpoints: 4
    },
    8: {
      question: "What is allowed when passing another vehicle",
      answer: [
        ["You follow it closely to pass it faster", false],
        ["You pass it without leaving the roadway", false],
        ["You drive on the opposite side of the road to pass", true],
        ["You exceed the speed limit to pass them", false]
      ],
      faultpoints: 4
    },
    9: {
      question: "You are driving on a highway which indicates a maximum speed of 120 km/h. But most trafficers drive at 125 km/h, so you should not drive faster than:",
      answer: [
        ["120 km/h", true],
        ["125 km/h", false],
        ["130 km/h", false],
        ["110 km/h", false]
      ],
      faultpoints: 4
    },
    10: {
      question: "When you are overtaken by another vehicle it is important NOT to:",
      answer: [
        ["Slow Down", false],
        ["Check your mirrors", false],
        ["Watch other drivers", false],
        ["Increase your speed", true]
      ],
      faultpoints: 4
    }
  }
}

let drivingSchool = new DrivingSchool();

$(".start-drivingSchool").click(function(e) {
  startFahrschule();
});

$(".question-submit").click(function(e) {
  loadNextQuestion();
});


$(".end-button").click(function(){
  if(drivingSchool.bestanden) {
    $.post('http://esx_dmvschool/close', JSON.stringify({}));
  } else {
    $.post('http://esx_dmvschool/kick', JSON.stringify({}));
  }
});

window.addEventListener('message', function(event){
  var item = event.data;
  if(item.openQuestion == true) {
    drivingSchool = new DrivingSchool();
    newFahrschule();
    $(".drivingSchool").fadeIn();
  }
  if(item.openQuestion == false) {
    $(".drivingSchool").hide(0);
  }
});

function newFahrschule() {
  $(".introduction").show(0);
  $(".question").hide(0);
  $(".evaluation").hide(0);
  resetQuestion();
}

function startFahrschule() {
  $(".introduction").hide(0);
  $(".question").fadeIn(1000);
  setQuestion(drivingSchool.currentQuestion)
  $(".step-progress__progress").animate({ width: "5%" }, 500 );
}

function endFahrschule() {
  $(".question").hide(0);

  if(drivingSchool.faultpoints >= drivingSchool.maxErrorPoints) {
    $(".evaluation-title").html("Oops, that was probably nothing!")
    $(".evaluation-description").html("Unfortunately, you did not pass the theoretical driving test.")
    $(".evaluation-text").html("You are welcome to repeat the theoretical driving test again.")
    $(".evaluation-text2").html("We hope that next time you will be better prepared.")
    $(".evaluation-text3").html("Thank you for the participation!")
  } else {
    $(".evaluation-title").html("Congratulations!")
    $(".evaluation-description").html("You have passed the theoretical driving test.")
    $(".evaluation-text").html("You can now take the practical driving test.")
    $(".evaluation-text2").html("We wish you lots of fun driving.")
    $(".evaluation-text3").html("Thank you for the participation!")
    drivingSchool.bestanden = true;
  }

  $(".evaluation--incorrect span").html(drivingSchool.falscheAntworten)
  $(".evaluation--correct span").html(drivingSchool.richtigeAntworten)
  $(".evaluation--faultpoints span").html(drivingSchool.faultpoints)

  $(".evaluation").fadeIn(1000);
}


function loadNextQuestion() {
  const checkQuestion = checkCurrentQuestion();
  if(checkQuestion) {
    drivingSchool.currentQuestion++;
    if(drivingSchool.currentQuestion > Object.keys(drivingSchool.questions).length) {
      endFahrschule();
    } else {
      resetQuestion()
      setQuestion(drivingSchool.currentQuestion)
    }
  }
  updateStepProgress()
}

function checkCurrentQuestion() {
  let anyChecked = false;
  $("input[type=checkbox").each(function(e) {
    if(this.checked == true) anyChecked = true
  });

  if(anyChecked) {
    let fehler = false;
    $(".error-message").fadeOut(0)

    $("input[type=checkbox").each(function(e) {
      if(drivingSchool.questions[drivingSchool.currentQuestion].answer[this.name][1] != this.checked) fehler = true;
    });

    if(fehler) {
      drivingSchool.faultpoints += drivingSchool.questions[drivingSchool.currentQuestion].faultpoints
      drivingSchool.falscheAntworten++;
    } else {
      drivingSchool.richtigeAntworten++;
    }


  } else {
    $(".error-message").fadeOut(0).fadeIn().html("Error - You must answer the question to continue.")
  }

  return anyChecked
}

function setQuestion(questionId) {
  $(".section__header h1").html("["+questionId+"] "+drivingSchool.questions[questionId].question+"")
  $(".section__header .faultpoints").html(""+drivingSchool.questions[questionId].faultpoints+" Fault points")

  drivingSchool.questions[questionId].answer.forEach(function(antwort, i) {
    $(".section__checkboxes").append('<label class="checkbox">'+antwort[0]+'<input type="checkbox" name="'+i+'"><span class="checkmark"></span></label>')
  });
}

function resetQuestion() {
  $(".section__header h1").html("")
  $(".section__header .faultpoints").html("")
  $(".section__checkboxes").html("")
}

function updateStepProgress() {
  let progress = (100 / Object.keys(drivingSchool.questions).length);
  let currentProgress = (drivingSchool.currentQuestion-1) * progress;
  $(".step-progress__progress").animate({ width: ""+currentProgress+"%" }, 1000 );
}
