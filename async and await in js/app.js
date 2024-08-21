function fetchData () {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      console.log("data is recieved")
    }, 3000)
  })
}


fetchData().then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})
