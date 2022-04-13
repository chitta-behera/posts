const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);  
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id, title 
  };

/*await axios.post('http://comments-srv:4001/comments/check', {
  data:{
    'name': 'from posts'
  }
});
*/
	

  res.status(201).send(posts[id]);
});


const server = app.listen(4002, () => {
  console.log('v4 build process check ...');
  console.log('Listing on 4002 port...');
})
