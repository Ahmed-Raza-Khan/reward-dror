const modal = document.getElementById('previewModal');
const pointInput = document.getElementById('pointInput');

function toggleModal() {
    modal.classList.toggle('hidden');
}

function updatePoints(amount) {
    let current = parseInt(pointInput.value);
    if(current + amount >= 0) {
        pointInput.value = current + amount;
    }
}

function setPoints(val) {
    pointInput.value = val;
}

window.onclick = function(event) {
    if (event.target == modal) {
        toggleModal();
    }
}