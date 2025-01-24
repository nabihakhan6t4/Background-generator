document.getElementById('applyGradientBtn').addEventListener('click', function () {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const direction = document.getElementById('gradientDirection').value;

    const resultDiv = document.getElementById('result');
    resultDiv.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
    resultDiv.innerHTML = `<p style="color: white;">Background: linear-gradient(${direction}, ${color1}, ${color2})</p>`;
});

document.getElementById('resetBtn').addEventListener('click', function () {
    const resultDiv = document.getElementById('result');
    resultDiv.style.background = '#f8f9fa';
    resultDiv.innerHTML = '<p>Preview your gradient here!</p>';
});
