import bcrypt from "bcryptjs"

const users = [
  {
    name: 'Admin user',
    email: '89diman@mail.ru',
    password: bcrypt.hashSync('123465', 10),
    isAdmin: true
  },
  {
    name: 'Roman',
    email: '89divvan@mail.ru',
    password: bcrypt.hashSync('123465', 10)
  },
  {
    name: 'Simple User',
    email: '89kabann@mail.ru',
    password: bcrypt.hashSync('123465', 10)
  }
]

export default users