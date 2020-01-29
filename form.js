let form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name.value;
    const lastName = form.elements.lastName.value;
    self.location = `hello.html?=${name}=${lastName}`;
})