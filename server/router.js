const router = require('express').Router();

// TODO: Connect router to controller functions

//https://expressjs.com/en/guide/routing.html
//lets us chain together a bunch of different kind of requests


// think about it like signal flow
// client is the singer with a microphone, need to check the signal flowing from there, check at every step of the way
router
  .get('/', (req, res) => {
    res.send('hello from GEt in router')
  })
  .get('/', () => {})
  .get('/', () => {})
  .get('/a', () => {})


module.exports = router;