function scoreGame(rolls) {
    var totalScore = 0;
    var rollIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        if (rolls[rollIndex] === "X") { // Strike
            totalScore += 10 + strikeBonus(rolls, rollIndex);
            rollIndex += 1;
        }
        else if (rolls[rollIndex + 1] === "/") { // Spare
            totalScore += 10 + spareBonus(rolls, rollIndex);
            rollIndex += 2;
        }
        else { // Open frame
            totalScore += sumOfPinsInFrame(rolls, rollIndex);
            rollIndex += 2;
        }
    }
    return totalScore;
}
function strikeBonus(rolls, rollIndex) {
    return pinsValue(rolls[rollIndex + 1]) + pinsValue(rolls[rollIndex + 2]);
}
function spareBonus(rolls, rollIndex) {
    return pinsValue(rolls[rollIndex + 2]);
}
function sumOfPinsInFrame(rolls, rollIndex) {
    return pinsValue(rolls[rollIndex]) + pinsValue(rolls[rollIndex + 1]);
}
function pinsValue(roll) {
    if (roll === "X") {
        return 10;
    }
    else if (roll === "/") {
        return 10;
    }
    else if (roll === "-") {
        return 0;
    }
    else {
        return parseInt(roll);
    }
}
// Test cases
console.log(scoreGame(["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"])); // Perfect game: 300
console.log(scoreGame(["9", "-", "9", "-", "9", "-", "9", "-", "9", "-", "9", "-", "9", "-", "9", "-", "9", "-", "9", "-"])); // 90
console.log(scoreGame(["5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5", "/", "5"])); // 150
