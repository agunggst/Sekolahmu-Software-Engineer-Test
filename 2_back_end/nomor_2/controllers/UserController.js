const {
  User
} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static getAllUser(request, response, next) {
    User.findAll()
      .then(result => {
        let sendData = []
        result.forEach(element => {
          sendData.push({
            id: element.id,
            name: element.name,
            email: element.email,
            phone: element.phone,
            profile_pic: element.profile_pic,
            status: element.status
          })
        });
        response.status(200).json(sendData)
      })
      .catch(err => {
        next(err)
      })
  }

  static getById(request, response, next) {
    User.findByPk(request.params.id)
      .then(result => {
        if (result) {
          response.status(200).json({
            id: result.id,
            name: result.name,
            email: result.email,
            phone: result.phone,
            profile_pic: result.profile_pic,
            status: result.status
          })
        } else {
          throw {
            status_code: 404,
            message: 'User not found'
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static login(request, response, next) {
    let data_login = {
      email: request.body.email,
      password: request.body.password
    }
    let data_user
    User.findOne({
        where: {
          email: data_login.email
        }
      })
      .then(result => {
        if (result) {
          data_user = {
            id: result.id,
            name: result.name,
            email: result.email
          }
          return bcrypt.compare(data_login.password, result.password)
        } else {
          throw {
            status_code: 404,
            message: 'You Are not Registered'
          }
        }
      })
      .then(result => {
        if (result) {
          let token = jwt.sign(data_user, 'secret')
          response.status(200).json({
            access_token: token,
            message: 'Login Successfully'
          })
        } else {
          throw {
            status_code: 400,
            message: 'Wrong Password'
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  static register(request, response, next) {
    let data_regis = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    }
    User.findOne({
        where: {
          email: data_regis.email
        }
      })
      .then(result => {
        if (result) {
          throw {
            status_code: 400,
            message: 'Email Already Registered'
          }
        } else {
          return User.create(data_regis)
        }
      })
      .then(result => {
        let token = jwt.sign({
            id: result.id,
            name: result.name,
            email: result.email,
            is_admin: result.is_admin
          },
          process.env.JWT_SECRET
        )
        response.status(201).json({
          access_token: token,
          message: 'Create new User Successfully'
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static update(request, response, next) {
    let data_update = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      profile_pic: request.body.profile_pic,
      status: request.body.profile_pic
    }
    User.findByPk(request.params.id)
    .then(result => {
      if(result){
        return User.update(data_update, {
          where: {
            id: request.params.id
          }
        })
      }else{
        throw {
          status_code: 404,
          message: 'User not found'
        }
      }
    })
    .then(result => {
      response.status(200).json({
        message: 'Update Successfully'
      })
    })
    .catch(err => {
      next(err)
    })
  }

  static delete(request, response, next) {
    User.findByPk(request.params.id)
    .then(result => {
      if(result){
        User.destroy({
          where: {
            id: request.params.id
          }
        })
      }else{
        throw {
          status_code: 404,
          message: 'User not found'
        }
      }
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = UserController