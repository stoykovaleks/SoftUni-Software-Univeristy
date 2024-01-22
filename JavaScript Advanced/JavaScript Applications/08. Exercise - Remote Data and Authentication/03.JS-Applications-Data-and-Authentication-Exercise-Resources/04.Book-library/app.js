document.addEventListener('DOMContentLoaded', () => {
    const loadBooksBtn = document.getElementById('loadBooks');
    const tableBody = document.querySelector('table tbody');
    const form = document.querySelector('form');

    const apiUrl = 'http://localhost:3030/jsonstore/collections/books';

    loadBooksBtn.addEventListener('click', async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            tableBody.innerHTML = '';
            Object.entries(data).forEach(([id, book]) => {
                appendBookRow(id, book);
            });
        } catch (error) {
            console.error('Error loading books:', error);
        }
    });

    function appendBookRow(id, book) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="edit" data-id="${id}">Edit</button>
                <button class="delete" data-id="${id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);

        const editBtn = row.querySelector('.edit');
        const deleteBtn = row.querySelector('.delete');

        editBtn.addEventListener('click', () => editBook(id, book));
        deleteBtn.addEventListener('click', () => deleteBook(id));
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = form.elements.title.value.trim();
        const author = form.elements.author.value.trim();

        if (title === '' || author === '') {
            alert('Please fill in both title and author fields.');
            return;
        }

        const bookData = { title, author };

        const submitBtn = form.querySelector('button');
        const isEdit = submitBtn.dataset.editId;

        try {
            if (isEdit) {
                await updateBook(isEdit, bookData);
            } else {
                const data = await createBook(bookData);
                appendBookRow(data._id, bookData);
            }

            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    });

    async function createBook(bookData) {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        return await response.json();
    }

    async function updateBook(id, bookData) {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        await loadBooksBtn.click();
    }

    async function deleteBook(id) {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        await loadBooksBtn.click();
    }

    function editBook(id, book) {
        form.elements.title.value = book.title;
        form.elements.author.value = book.author;

        const submitBtn = form.querySelector('button');
        submitBtn.textContent = 'Edit Book';
        submitBtn.dataset.editId = id;
    }
});