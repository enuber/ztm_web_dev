export const handleProfile = (req, res, db) => {
  const { id } = req.params;
  // let found = false;
  // database.users.forEach((user) => {
  //   if (user.id === id) {
  //     found = true;
  //     return res.json(user);
  //   }
  // });
  db.select('*')
    .from('users')
    .where({ id: id })
    .then((user) => {
      //note we are getting back an array of user with a specific id so can check if it is in the array because otherwise get an empty array.
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('not found');
      }
    })
    .catch((err) => res.status(400).json('error getting user'));
  // if (!found) {
  //   res.status(400).json('no such user');
  // }
};
