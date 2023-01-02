const Model = require('./model')
   
function addUser(user) { // setteamos una nueva instancia el modelo, asi creamos un nuevo usuario
    const myUser = new Model(user);
    return myUser.save();
}

function listUsers() {
   return Model.find(); 
}

module.exports = {
    add: addUser,
    list: listUsers,
}
