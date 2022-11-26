const http=require('http');
const express=require('express');
const app= express ();

//Recursos
app.use(express.static(__dirname+'/'));

app.get('/',(req,res)=>{
	res.render('index.html');
});

app.listen(8000);

console.log('Servidor Listo Puerto 8000')