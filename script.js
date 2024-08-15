document.getElementById('applyGradientBtn').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const direction = document.getElementById('gradientDirection').value;

    const resultDiv = document.getElementById('result');
    resultDiv.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
    resultDiv.innerHTML = `<p>Background: linear-gradient(${direction}, ${color1}, ${color2})</p>`;
});
