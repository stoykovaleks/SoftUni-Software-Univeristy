function deleteByEmail() {
    const email = document.getElementsByName('#email'[0].value);
    const column = document.querySelectorAll('#custumers tr td.nth-child(2)');

    for (const td of column) {
        if (td.textContent === email) {
            let parentRow = td.parentNode;
            parentRow.parentNode.removeChild(parentRow);
            document.getElementById('result');
            textContent = 'Deleted';
            return;
        }
    }
    document.getElementById('result').textContent = 'Not found'
}