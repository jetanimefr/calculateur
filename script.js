function calculatePercentage(capital, percentage) {
    return capital * percentage / 100;
}

function calculatePosition(riskAmount, positionType, entryPrice, slPrice) {
    if (positionType === "H") {
        return riskAmount / (entryPrice - slPrice);
    } else if (positionType === "B") {
        return riskAmount / (slPrice - entryPrice);
    } else {
        return 0;
    }
}

function calculate() {
    const capital = parseFloat(document.getElementById('capital').value);
    const risk = parseFloat(document.getElementById('risk').value);
    const position = document.getElementById('position').value.toUpperCase();
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const slPrice = parseFloat(document.getElementById('slPrice').value);

    const riskAmount = calculatePercentage(capital, risk);
    const positionSize = calculatePosition(riskAmount, position, entryPrice, slPrice);

    document.getElementById('result').innerText = `Votre lot : ${positionSize.toFixed(2)}`;
}
