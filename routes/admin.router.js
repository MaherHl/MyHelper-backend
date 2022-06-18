const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const comments = require('../routes/Cmt')
const Constructors = require('../routes/Cst')
const Painters = require('../routes/pnt')
const Workers = require('../routes/Wrk')


const cnx  = require('mongoose')

const adminBro = new AdminBro({
  databases: [],
  
  rootPath: '/admin',
})
 const ADMIN ={
    email : process.env.ADMIN_EMAIL || 'admin@example.com',
    password : process.env.ADMIN_PASSWORD || 'maher',
 }

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName : process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword : process.env.ADMIN_COOKIE_PASS ||  'supersecret-and-long-password-for-a-cookie-in-the-browser',
    authenticate : async (email,password) =>{
         if (email=== ADMIN.email && password === ADMIN.password){
            return ADMIN
         }
        return null
    }

})
module.exports=router

 