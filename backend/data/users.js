import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Taiye Suleiman',
    email: 'taiye@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kafila Akinola',
    email: 'kafila@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
