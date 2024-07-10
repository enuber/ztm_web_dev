var database = [{ username: 'erik', password: 'supersecret' }];

var newsFeed = [
  {
    username: 'bobby',
    timeline: 'So tired from all that learning',
  },
  {
    username: 'sally',
    timeline: 'Javascript is so cool',
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsFeed);
  } else {
    alert('Sorry, wrong username and password');
  }
}

signIn(userNamePrompt, passwordPrompt);
