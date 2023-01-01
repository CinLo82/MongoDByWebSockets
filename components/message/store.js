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

async function updateText(id, message) {
    const foundessage = await Model.findOne({
        _id: id
    });
    foundessage.message = message; 
    const newMessage = await foundessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessenges,
    updateText: updateText,
    // get
    // update
    // delete
}