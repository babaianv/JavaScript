const list = document.getElementById('list');
const filter = document.getElementById('filter');
let users = [];

filter.addEventListener('input', (event) => {
    const val = event.target.value.toLowerCase();
    const filteredList = users.filter((user) => {
        return user.name.toLowerCase().includes(val);
    });
    render(filteredList);
});

async function start() {
    list.innerHTML = 'Loading...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setTimeout(() => {
            users = data;
            render(data);
        }, 2000);
    } catch (err) {
        list.style.color = 'red';
        list.innerHTML = err.message;
    }
}

function render(users = []) {
    const html = users.map(toHTML).join('');
    list.innerHTML = html;

   
    const listItems = list.querySelectorAll('.list-group-item');
    listItems.forEach((item) => {
        item.addEventListener('click', () => {
            const userId = item.dataset.userId;
            const selectedUser = users.find((user) => user.id == userId);
            if (selectedUser) {
                displayUserData(selectedUser);
            }
        });
    });
}

function toHTML(user) {
    return `
        <li class="list-group-item" data-user-id="${user.id}">${user.name}</li>
    `;
}

function displayUserData(user) {

    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
        <h2>Information:</h2>
        <p>Name: ${user.name}</p>
        <p>User Name: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;
}

start();
