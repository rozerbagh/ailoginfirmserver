const data = require('../data/users.json');
/**
 * 
 * @param {*} res 
 * @param {*} req 
 * @param {*} next 
 */
console.log(data);
function login(res, req, next){
  try {
    const {email, password} = req.body;
    const user = data.find(user => user.email === email);
    if(!user){
      res.status(404).json({statusCode: 404, message: "User not found"});
      return
    }
    if(user.password !== password){
      res.status(401).json({statusCode: 401, message: "Invalid password"});
      return
    }
    res.status(200).json({statusCode: 200, message: "User logged in successfully", data: user});
  } catch (error) { 
    res.status(500).json({statusCode: 500, message: "Internal server error"});
  }
}

function update(res, req, next){
  try {
    const {email, password, name} = req.body;
    const user = data.find(user => user.email === email);
    if(!user){
      res.status(404).json({statusCode: 404, message: "User not found"});
      return
    }
    user.password = password;
    user.name = name;
    res.status(200).json({statusCode: 200, message: "User updated successfully", data: user});
  } catch (error) {
    res.status(500).json({statusCode: 500, message: "Internal server error"});
  }
}

function getUser(res, req, next){
  try {
    const data = data.filter(user => {
      return user.id === req.params.id;
    });
    res.status(200).json({statusCode: 200, message: "Users retrieved successfully", data: data});
  } catch (error) {
    res.status(500).json({statusCode: 500, message: "Internal server error"});
  }
} 

module.exports = { 
  login,
  update,
  getUser
}