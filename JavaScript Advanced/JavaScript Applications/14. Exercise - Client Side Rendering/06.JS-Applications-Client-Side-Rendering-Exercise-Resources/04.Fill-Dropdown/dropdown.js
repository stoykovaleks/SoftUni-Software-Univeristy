import { html, render } from '../node_modules/lit-html/lit-html'

const url = ` http://localhost:3030/jsonstore/advanced/dropdown/`;

async function getOptions(){
    const response = await fetch(url);
}

const options = Object.values(await getOptions());
const main = document.querySelector("div");

function update(options){
    const result = selectTemplate(options)
    render(result, main);
}

update(options)

async function addItem(event) {
    event.preventDefault();

    const text = document.getElementById("itemText").value;

    const response = await fetch(url,{
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({text})
    })

    options.push(response.json());
    update(options);
    document.getElementById("itemText").value = ''
}