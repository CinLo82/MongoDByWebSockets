const db = require('mongoose');
const Model = require('./model')

const uri = "mongodb+srv://cin:cin0002@cluster0.xrouvau.mongodb.net/?retryWrites=true&w=majority";

db.Promise = global.Promise;

db.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(e => console.error('[db]', e));
   

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessenges() {
  //  return list;
  const message = await Model.find();
  return message;
}

module.exports = {
    add: addMessage,
    list: getMessenges,
    // get
    // update
    // delete
}