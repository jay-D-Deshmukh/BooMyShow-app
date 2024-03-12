const authorizedRoles =(...allowedUsers) => (req, res, next) => {
    try {
      //Get user role
      const role = req.user?.role;

      //If current role is allowed to create movie
      if (!allowedUsers.includes(role)) {
        return res.status(403).send("You are not authorized");
      }
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  };

export default authorizedRoles;

// try {
//     //Get user role
// const role = req.user?.role;

// //If current role is allowed to create movie
// const allowedUsers = ['Admin','SuperAdmin'];
// if(!allowedUsers.includes(role)) {
// return res.status(403).send('You are not authorized');
// }
// } catch (error) {
// res.status(500).send(error)
// }
