const { User } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  let token = request.headers.access_token
  try {
    let payload = jwt.verify(token, 'secret')
    User.findByPk(request.params.id)
    .then(result => {
      if(result){
        if(result.id == payload.id){
          request.userData = {
            id: result.id,
            name: result.name,
            email: result.email
          }
          next()
        }else{
          next({
            status_code: 403,
            message: 'Unauthorized'
          })
        }
      }else{
        next({
          status_code: 404,
          message: 'user not found'
        })
      }
    })
    .catch(err => {
      next(err)
    })
  } catch (err) {
    next(err)
  }
}