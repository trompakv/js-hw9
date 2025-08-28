function logItems(arr) {
    for (let i = 1; i <= arr.length; i++) {
        console.log(`${i} - ${arr[i - 1]}`);
    }
}

logItems(["hello", "world", "javascript", "frontend"]);

console.log("-------------------------------------");

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const sum = words.length * pricePerWord;
    console.log(sum);
}

calculateEngravingPrice("hello world javascript", 15);

console.log("-------------------------------------");

function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = words[0];

    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    console.log(longestWord);
}

findLongestWord("hello world javascript frontend");

console.log("-------------------------------------");

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + "...";
    }
}

console.log(formatString("Short string"));
console.log(formatString("This is a very long string that should be cut off at 40 characters because it is too long."));

console.log("-------------------------------------");

function checkForSpam(message) {
    if (
        message.toLowerCase().includes("spam") ||
        message.toLowerCase().includes("sale")
    ) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("hello world sale"));

console.log("-------------------------------------");

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число (натисніть Cancel щоб закінчити)");

    if (input === null) {
        break;
    }

    const number = Number(input);

    if (Number.isNaN(number)) {
        alert("Було введено не число");
        continue;
    }

    numbers.push(number);
}

if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Сума - ${total}`);
} else {
    console.log("Масив пустий");
}
