export const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }
  db.select('email', 'hash')
    .from('login')
    .where('email', '=', email)
    .then((data) => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db
          .select('*')
          .from('users')
          .where('email', '=', email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json('unable to get user'));
      } else {
        res.status(400).json('wrong credentials');
      }
    })
    .catch((err) => res.status(400).json('wrong credentials'));
  // if (
  //   email === database.users[0].email &&
  //   password === database.users[0].password
  // ) {
  //   res.json(database.users[0]);
  // } else {
  //   res.status(400).json('error loggin in');
  // }
};
