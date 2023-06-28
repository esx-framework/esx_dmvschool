class DrivingSchool {
    currentQuestion = 1;
    faultpoints = 0;
    maxErrorPoints = 9;
    correctAnswer = 0;
    wrongAnswer = 0;
    passed = false;
  
    questions = {
        1: {
            question: "Ha 80 km/h sebességgel halad, és lakott területhez közeledik, a következőket kell tennie:",
            answer: [
                ["Felgyorsítasz", false],
                ["Tartja a sebességét, ha nem halad el más járművek mellett", false],
                ["Lassítasz", true],
                ["Tartod a sebességedet", false]
            ],
            faultpoints: 4
        },
        2: {
            question: "Ha egy közlekedési lámpánál jobbra fordul, de lát egy gyalogátkelőt, mit tesz:",
            answer: [
                ["Elhaladsz a gyalogos mellett", false],
                ["Ellenőrized, hogy nincs-e más jármű a közelben", false],
                ["Megvárod, amíg a gyalogos átkel", true],
                ["Lelövöd a gyalogost és tovább vezetsz", false]
            ],
            faultpoints: 4
        },
        3: {
            question: "Minden előzetes jelzés nélkül a sebesség egy lakott területen az: __ km/h",
            answer: [
                ["30 km/h", false],
                ["50 km/h", true],
                ["40 km/h", false],
                ["60 km/h", false]
            ],
            faultpoints: 4
        },
        4: {
            question: "Minden sávváltás előtt a következőket kell tennie:",
            answer: [
                ["Ellenőrized a tükröket", true],
                ["Ellenőrized a holttereket", true],
                ["Bekapcsolod az indexet", true]
            ],
            faultpoints: 3
        },
        5: {
            question: "Milyen véralkoholszint minősül ittas vezetésnek?",
            answer: [
                ["0.05%", false],
                ["0.18%", false],
                ["0.06%", true],
                ["0.08%", false]
            ],
            faultpoints: 4
        },
        6: {
            question: "Mikor vezethet tovább a közlekedési lámpánál?",
            answer: [
                ["Amikor zöld", false],
                ["Amikor senki sincs a kereszteződésben", false],
                ["Iskolai zónában van", false],
                ["Amikor zöld és/vagy piros van, és jobbra kanyarodsz.", true]
            ],
            faultpoints: 4
        },
        7: {
            question: "Egy gyalogosnak tilos az átkelés, mit kell tenned?",
            answer: [
                ["Hagyod őket átmenni", false],
                ["Megfigyeled őket, mielőtt folytatja", false],
                ["Intesz, hogy menjenek át", false],
                ["Folytatja, mert a közlekedési lámpa zöld", true]
            ],
            faultpoints: 4
        },
        8: {
            question: "Mi megengedett egy másik jármű megelőzésekor",
            answer: [
                ["Szorosan követi, hogy gyorsabban haladjon", false],
                ["Az úttest elhagyása nélkül halad el mellette", false],
                ["Az út túloldalán haladsz, hogy leelőzd", true],
                ["Túllépi a sebességhatárt, hogy megelőzze őket", false]
            ],
            faultpoints: 4
        },
        9: {
            question: "Ön egy olyan autópályán halad, amely 120 km/h maximális sebességet jelez. A legtöbb közlekedő azonban 125 km/h sebességgel halad, ezért nem szabad ennél gyorsabban hajtania:",
            answer: [
                ["120 km/h", true],
                ["125 km/h", false],
                ["130 km/h", false],
                ["110 km/h", false]
            ],
            faultpoints: 4
        },
        10: {
            question: "Ha egy másik jármű előzi Önt, fontos, hogy NEM szabad:",
            answer: [
                ["Lelassítani", false],
                ["Ellenőrizni a tükröket", false],
                ["Nézni a másik vezetőt", false],
                ["Felgyorsítani", true]
            ],
            faultpoints: 4
        }
    }
}  