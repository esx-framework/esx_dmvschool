class DrivingSchool {
    currentQuestion = 1;
    faultpoints = 0;
    maxErrorPoints = 9;
    correctAnswer = 0;
    wrongAnswer = 0;
    passed = false;
  
    questions = {
        1: {
            question: "Wenn du 80km/h fährst, und dich einer Wohngegend näherst musst du:",
		    answer: [
            ["Beschleunigen", false],
		    ["Geschwindigkeit halten, und keine anderen Fahrzeuge überholen", false],
		    ["Verlangsamen", true],
		    ["Geschwindigkeit beibehalten", false],
            ],
            faultpoints: 4
        },
        2: {
            question: "Wenn du an einer Ampel nach rechts abbiegen möchtest, und einen Fußgänger überqueren siehst, was tust du dann?:",
		    answer: [
            ["Den Fußgänger überfahren", false],
		    ["Überprüfen das kein anderes Fahrzeug in der nähe ist", false],
		    ["Du wartest bis der Fußgänger die Straße überquert hat", true],
		    ["Du erschießt den Fußgänger und fährst weiter", false],
            ],
            faultpoints: 4
        },
        3: {
            question: "Ohne einen vorherigen Hinweis, in einer Wohngegend musst du : __ km/h fahren:",
            answer: [
                ["30 km/h", false],
                ["50 km/h", true],
                ["40 km/h", false],
                ["60 km/h", false],
            ],
            faultpoints: 4
        },
        4: {
            question: "Bevor einem Spurwechsel musst du:",
            answer: [
                ["Deine Spiegel überprüfen", true],
                ["Deine Blinden Stellen überprüfen", true],
                ["Den Spurwechsel signalisieren", true],
            ],
            faultpoints: 3
        },
        5: {
            question: "Welcher Blutalkoholspiegel zählt als Betrunken?",
            answer: [
                ["0.05%", false],
                ["0.18%", false],
                ["0.08%", true],
                ["0.06%", false],
            ],
            faultpoints: 4
        },
        6: {
            question: "Wann kannst du an einer Ampel weiterfahren?",
            answer: [
                ["Wenn die Ampel Grün ist", false],
                ["Wenn niemand in dem bereich ist", false],
                ["Wenn du in einer Schulzone bist", false],
                ["Wenn es grün ist und niemand in dem bereich ist", false],
            ],
            faultpoints: 4
        },
        7: {
            question: "Ein Fußgänger hat ein nicht überqueren Signal, was tust du?",
            answer: [
                ["Du lässt ihn gehen", false],
                ["Du beobachtest ihn bevor du weiterfährst", false],
                ["Du winkst ihn rüber", false],
                ["Du fährst weiter, weil deine Ampel grün ist.", false],
            ],
            faultpoints: 4
        },
        8: {
            question: "Was ist erlaubt wenn du ein anderes Fahrzeug überholst?",
            answer: [
                ["Du folgst ihm nahe um ihn zu überholen", false],
                ["Du überholst es ohne die Straße zu verlassen", false],
                ["Du fährst auf der anderen Straßenseite um ihn zu überholen", false],
                ["Du fährst schneller als erlaubt um ihn zu überholen", false],
            ],
            faultpoints: 4
        },
        9: {
            question: "Du bist auf einer Autobahn und fährst 120km/h jedoch fahren die anderen Autofahrer 125km/h also fährst du nicht schneller als:",
            answer: [
                ["120 km/h", false],
                ["125 km/h", false],
                ["130 km/h", false],
                ["110 km/h", false],
            ],
            faultpoints: 4
        },
        10: {
            question: "Wenn du von einem anderen Fahrzeug überholt wirst, ist es Wichtig das du NICHT:",
            answer: [
                ["Verlangsamst", false],
                ["Deine Spiegel überprüfst", false],
                ["Andere Autofahrer beobachtest", false],
                ["Schneller wirst", false],
            ],
            faultpoints: 4
        }
    }
}  