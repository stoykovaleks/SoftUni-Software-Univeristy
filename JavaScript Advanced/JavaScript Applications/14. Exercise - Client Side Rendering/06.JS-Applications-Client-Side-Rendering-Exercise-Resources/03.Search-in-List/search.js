import { html, render } from '../node_modules/lit-html/lit-html'
import { towns } from './towns.js';

const searchTemplate = (towns, match) => html
   ` <article>
<div id="towns">
    <ul>
        ${towns.map(t => itemTemplate(t, match))}
    </ul>
</div>
<input type="text" id="searchText" />
<button @click =${search}>Search</button>
<div id="result">${countMatches(towns, match)}</div>
</article>`

const itemTemplate = (name, match) => html
   `
<li class ="${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}">${name}</li>
`

const main = document.body
function update(match) {
   const result = searchTemplate(towns, match);
   render(result, main)
}

function search() {
   const match = document.getElementById("searchText").value;
   update()

}

function countMatches(towns, match){
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   return matches ? `${matches} matches found` : ''
}


