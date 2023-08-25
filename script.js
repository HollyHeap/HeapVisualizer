function validateInput(input) {
    if (typeof input !== 'number') {
        alert('Please enter a valid number.');
        return false;
    }
    return true;
}

const colors = {
    used: 'red',
    free: 'green'
};

function drawHeapSegment(x, y, status) {
    ctx.fillStyle = colors[status];
    ctx.fillRect(x, y, 50, 50);
}

function drawHeap() {
    // Enhanced drawing of heap structure with color codes
    for (let i = 0; i < 10; i++) {
        drawHeapSegment(i * 55, 50, i % 2 === 0 ? 'used' : 'free');
    }
}

drawHeap();
