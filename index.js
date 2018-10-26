const express = require ('express');
const app = express();
const bodyParser = require ('body-parser')
const path = require('path');
const port = 3000;
const indexRouter = require ('./server/routers/indexRouter');
const notesRouter = require ('./server/routers/notesRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/api/notes', notesRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

