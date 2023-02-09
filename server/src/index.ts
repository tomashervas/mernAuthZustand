import app from './app';

const port = process.env.PORT || 3000;

app.listen( port || 3000 , () => {
    console.log('Listening on port ' + port);
})