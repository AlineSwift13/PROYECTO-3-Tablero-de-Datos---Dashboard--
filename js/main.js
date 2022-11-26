const url='https://pokeapi.co/api/v2/pokemon/7/'
const url1='https://pokeapi.co/api/v2/pokemon/4/'
const url2='https://pokeapi.co/api/v2/pokemon/1/'
const url3='https://pokeapi.co/api/v2/pokemon/25/'

fetch(url)
.then(response=>response.json())
.then(data=>{

let element =document.getElementById('poke1')
element.innerHTML = `

<p>${data.name}</p> 
<p><h4>${data.id}</h4></p>
<img src='${data.sprites.front_default}'/>
`;
console.log(data)

})
//Pokemon Charmander
fetch(url1)
.then(response=>response.json())
.then(data=>{

let element =document.getElementById('poke2')
element.innerHTML = `

<p>${data.name}</p> 
<p><h4>${data.id}</h4></p>
<img src='${data.sprites.front_default}'/>
`;
console.log(data)
//Pokemon Boulbasour
})
fetch(url2)
.then(response=>response.json())
.then(data=>{

let element =document.getElementById('poke3')
element.innerHTML = `

<p>${data.name}</p> 
<p><h4>${data.id}</h4></p>
<img src='${data.sprites.front_default}'/>
`;
console.log(data)

})
fetch(url3)
.then(response=>response.json())
.then(data=>{

let element =document.getElementById('poke4')
element.innerHTML = `

<p>${data.name}</p> 
<p><h4>${data.id}</h4></p>
<img src='${data.sprites.front_default}'/>
`;
console.log(data)

})



.catch(err=>console.log(err))