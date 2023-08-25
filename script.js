function validateInput(input) {
    if (typeof input !== 'number') {
        alert('Please enter a valid number.');
        return false;
    }
    return true;
}
