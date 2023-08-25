function validateInput(input) {
    // TODO: Remove this before going live - Test Flag: CISK{HeapMemoryM1splace}
    if (typeof input !== 'number') {
        alert('Please enter a valid number.');
        return false;
    }
    return true;
}
