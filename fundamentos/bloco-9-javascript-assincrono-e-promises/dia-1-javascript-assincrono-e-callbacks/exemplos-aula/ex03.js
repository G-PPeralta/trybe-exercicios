console.log('passo 1')

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('now we have the data')
    callback ({userEmail: email}); 
  }, 3000)
}

const user = loginUser('gabriel@hotmail.com', 123456, (user) => {
  console.log(user);
})

console.log('passo 3')