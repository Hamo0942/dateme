document.getElementById('date-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const place = document.getElementById('place').value;
    const activity = document.getElementById('activity').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `<p>Hey ${name}, can't wait to go to ${place} on ${date} and enjoy some ${activity} together!</p>`;
});
