'use strict'
document.getElementById("submit").onclick = function() {
    let selectElement = document.getElementById("inputGroupSelect02");
    let selectedOptionValue = selectElement.value;
    let result;

    switch (selectedOptionValue) {
        case "1":
            result = typeof(100);
            break;
        case "2":
            result = typeof(73.9);
            break;
        case "3":
            result = typeof(NaN);
            break;
        case "4":
            result = typeof("Water");
            break;
        case "5":
            result = typeof(false);
            break;
        case "6":
            result = typeof(9 != 11);
            break;
        case "7":
            result = "Orang" + "e";
            break;
        case "8":
            result = "Orange" - "s";
            break;
        case "9":
            result = "4" + "8";
            break;
        case "10":
            result = "4" - "8";
            break;
        case "11":
            result = "name" + 3;
            break;
        case "12":
            result = "name" - 3;
            break;
        case "13":
            result = 82 * "word";
            break;
        case "14":
            result = 1 + "hello";
            break;
        case "15":
            result = "hello" + 1;
            break;
        case "16":
            result = 1 + true;
            break;
        case "17":
            result = "hello" + true;
            break;
        case "18":
            result = typeof(Infinity);
            break;
        case "19":
            result = 1 == '1';
            break;
        case "20":
            result = 1 === '1';
            break;
        default:
            result = "Please choose an option.";
    }

    document.getElementById("result").innerText = `Result: ${result}`;
};
