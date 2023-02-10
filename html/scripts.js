let drivingSchool = new DrivingSchool();

$(".start-drivingSchool").click(function(e) {
  startDrivingSchool();
});

$(".question-submit").click(function(e) {
  loadNextQuestion();
});


$(".end-button").click(function(){
  if(drivingSchool.passed) {
    $.post('http://esx_dmvschool/close', JSON.stringify({}));
  } else {
    $.post('http://esx_dmvschool/kick', JSON.stringify({}));
  }
});

window.addEventListener('message', function(event){
  var item = event.data;
  if(item.openQuestion == true) {
    drivingSchool = new DrivingSchool();
    newDrivingSchool();
    $(".drivingSchool").fadeIn();
  }
  if(item.openQuestion == false) {
    $(".drivingSchool").hide(0);
  }
});

function newDrivingSchool() {
  $(".introduction").show(0);
  $(".question").hide(0);
  $(".evaluation").hide(0);
  resetQuestion();
}

function startDrivingSchool() {
  $(".introduction").hide(0);
  $(".question").fadeIn(1000);
  setQuestion(drivingSchool.currentQuestion)
  $(".step-progress__progress").animate({ width: "5%" }, 500 );
}

function endDrivingSchool() {
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
    drivingSchool.passed = true;
  }

  $(".evaluation--incorrect span").html(drivingSchool.wrongAnswer)
  $(".evaluation--correct span").html(drivingSchool.correctAnswer)
  $(".evaluation--faultpoints span").html(drivingSchool.faultpoints)

  $(".evaluation").fadeIn(1000);
}


function loadNextQuestion() {
  const checkQuestion = checkCurrentQuestion();
  if(checkQuestion) {
    drivingSchool.currentQuestion++;
    if(drivingSchool.currentQuestion > Object.keys(drivingSchool.questions).length) {
      endDrivingSchool();
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
      drivingSchool.wrongAnswer++;
    } else {
      drivingSchool.correctAnswer++;
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
