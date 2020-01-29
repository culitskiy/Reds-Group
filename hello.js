
data = self.location.search;
data = data.slice(data.indexOf('=')+1);

const name = data.slice(0,data.indexOf('='))

const lastName = data.slice(data.indexOf('=')+1);

const hello = document.createElement('span');
hello.innerText = `Hello ${name} ${lastName}`;
const div = document.querySelector('.div');
div.appendChild(hello);
