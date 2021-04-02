var express = require('express');
const path = require('path');

var app = express();

//callback richiesta get
// rec: oggetto client chi fa la richiesta
//res: oggetto server chi risponde
app.get('/', function(rec, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/pagina1', function(rec, res) {
    res.sendFile(path.join(__dirname, 'views/pagina1.html'));
});
//su qualeporta attivare i server node.js
app.listen(3000, function(){
    console.log('Server attivo porta 3000');
});
