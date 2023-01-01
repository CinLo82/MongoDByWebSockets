const db = require('mongoose');

db.Promise = global.Promise;

//const uri = "mongodb+srv://cin:cin0002@cluster0.xrouvau.mongodb.net/?retryWrites=true&w=majority";

async function connect(url) {
   await db.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
    })
        .then(() => console.log('[db] Conectada con éxito'))
        .catch(e => console.error('[db]', e));
}

module.exports = connect;

