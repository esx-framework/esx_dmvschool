class Fahrschule {
  aktuelleFrage = 1;
  fehlerpunkte = 0;
  maxFehlerpunkte = 9;
  richtigeAntworten = 0;
  falscheAntworten = 0;
  bestanden = false;

  fragen = {
    1: {
      frage: "If you're going 80 km/h, and you're approaching a residential area you must:",
      antworten: [
        ["You accelerate", false],
        ["You keep your speed, if you do not pass other vehicles", false],
        ["You slow down", true],
        ["You keep your speed", false]
      ],
      fehlerpunkte: 4
    },
    2: {
      frage: "If you're turning right at a traffic light, but see a pedestrian crossing what do you do:",
      antworten: [
        ["You pass the pedestrian", false],
        ["You check that there is no other vehicles around", false],
        ["You wait until the pedestrian has crossed", true],
        ["You shoot the pedestrian and continue to drive", false]
      ],
      fehlerpunkte: 4
    },
    3: {
      frage: "Without any prior indication, the speed in a residential area is: __ km/h",
      antworten: [
        ["30 km/h", false],
        ["50 km/h", true],
        ["40 km/h", false],
        ["60 km/h", false]
      ],
      fehlerpunkte: 4
    },
    4: {
      frage: "Before every lane change you must:",
      antworten: [
        ["Check your mirrors", true],
        ["Check your blind spots", true],
        ["Signal your intentions", true]
      ],
      fehlerpunkte: 3
    },
    5: {
      frage: "What blood alcohol level is classified as driving while intoxicated?",
      antworten: [
        ["0.05%", false],
        ["0.18%", false],
        ["0.06%", true],
        ["0.08%", false]
      ],
      fehlerpunkte: 4
    },
    6: {
      frage: "When can you continue to drive at a traffic light?",
      antworten: [
        ["When it is green", false],
        ["When there is nobody in the intersection", false],
        ["You are in a school zone", false],
        ["When it is green and / or red and you're turning right", true]
      ],
      fehlerpunkte: 4
    },
    7: {
      frage: "A pedestrian has a do not cross signal, what do you do?",
      antworten: [
        ["You let them pass", false],
        ["You observe before continuing", false],
        ["You wave to tell them to cross", false],
        ["You continue because your traffic light is green", true]
      ],
      fehlerpunkte: 4
    },
    8: {
      frage: "What is allowed when passing another vehicle",
      antworten: [
        ["You follow it closely to pass it faster", false],
        ["You pass it without leaving the roadway", false],
        ["You drive on the opposite side of the road to pass", true],
        ["You exceed the speed limit to pass them", false]
      ],
      fehlerpunkte: 4
    },
    9: {
      frage: "You are driving on a highway which indicates a maximum speed of 120 km/h. But most trafficers drive at 125 km/h, so you should not drive faster than:",
      antworten: [
        ["120 km/h", true],
        ["125 km/h", false],
        ["130 km/h", false],
        ["110 km/h", false]
      ],
      fehlerpunkte: 4
    },
    10: {
      frage: "When you are overtaken by another vehicle it is important NOT to:",
      antworten: [
        ["Slow Down", false],
        ["Check your mirrors", false],
        ["Watch other drivers", false],
        ["Increase your speed", true]
      ],
      fehlerpunkte: 4
    }
  }



}

let fahrschule = new Fahrschule();

$(".start-fahrschule").click(function(e) {
  startFahrschule();
});

$(".question-submit").click(function(e) {
  loadNextQuestion();
});


$(".end-button").click(function(){
  if(fahrschule.bestanden) {
    $.post('http://esx_dmvschool/close', JSON.stringify({}));
  } else {
    $.post('http://esx_dmvschool/kick', JSON.stringify({}));
  }
});

window.addEventListener('message', function(event){
  var item = event.data;
  if(item.openQuestion == true) {
    fahrschule = new Fahrschule();
    newFahrschule();
    $(".fahrschule").fadeIn();
  }
  if(item.openQuestion == false) {
    $(".fahrschule").hide(0);
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
  setQuestion(fahrschule.aktuelleFrage)
  $(".step-progress__progress").animate({ width: "5%" }, 500 );
}

function endFahrschule() {
  $(".question").hide(0);

  if(fahrschule.fehlerpunkte >= fahrschule.maxFehlerpunkte) {
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
    fahrschule.bestanden = true;
  }

  $(".auswertung--falsch span").html(fahrschule.falscheAntworten)
  $(".auswertung--richtig span").html(fahrschule.richtigeAntworten)
  $(".auswertung--fehlerpunkte span").html(fahrschule.fehlerpunkte)

  $(".evaluation").fadeIn(1000);
}


function loadNextQuestion() {
  const checkQuestion = checkCurrentQuestion();
  if(checkQuestion) {
    fahrschule.aktuelleFrage++;
    if(fahrschule.aktuelleFrage > Object.keys(fahrschule.fragen).length) {
      endFahrschule();
    } else {
      resetQuestion()
      setQuestion(fahrschule.aktuelleFrage)
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
      if(fahrschule.fragen[fahrschule.aktuelleFrage].antworten[this.name][1] != this.checked) fehler = true;
    });

    if(fehler) {
      fahrschule.fehlerpunkte += fahrschule.fragen[fahrschule.aktuelleFrage].fehlerpunkte
      fahrschule.falscheAntworten++;
    } else {
      fahrschule.richtigeAntworten++;
    }


  } else {
    $(".error-message").fadeOut(0).fadeIn().html("Error - You must answer the question to continue.")
  }

  return anyChecked
}

function setQuestion(questionId) {
  $(".section__header h1").html("["+questionId+"] "+fahrschule.fragen[questionId].frage+"")
  $(".section__header .fehlerpunkte").html(""+fahrschule.fragen[questionId].fehlerpunkte+" Fault points")

  fahrschule.fragen[questionId].antworten.forEach(function(antwort, i) {
    $(".section__checkboxes").append('<label class="checkbox">'+antwort[0]+'<input type="checkbox" name="'+i+'"><span class="checkmark"></span></label>')
  });
}

function resetQuestion() {
  $(".section__header h1").html("")
  $(".section__header .fehlerpunkte").html("")
  $(".section__checkboxes").html("")
}

function updateStepProgress() {
  let progress = (100 / Object.keys(fahrschule.fragen).length);
  let currentProgress = (fahrschule.aktuelleFrage-1) * progress;
  $(".step-progress__progress").animate({ width: ""+currentProgress+"%" }, 1000 );
}
