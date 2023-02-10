class DrivingSchool {
    currentQuestion = 1;
    faultpoints = 0;
    maxErrorPoints = 9;
    correctAnswer = 0;
    wrongAnswer = 0;
    passed = false;
  
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