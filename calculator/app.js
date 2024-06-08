const output = document.getElementById("output");

function insertThis(someValue) {
    output.value += someValue;
}

function clearValue() {
    output.value = "";
}

function popValue() {
    let newValue = (output.value).substring(0, (output.value).length - 1);
    output.value = newValue;
}

function findValue() {
    let result;
    try {
        result = eval(output.value);
        output.value = result;
    }
    catch (error) {
        output.value = "Undefined";
    }
}