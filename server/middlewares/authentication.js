import jwt from 'jsonwebtoken';

const isLoggedIn = (req, res, next) => {
    const {token}=req.cookies;
    const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);
    // console.log(tokenDetails);
    if (!token || !tokenDetails){ 
        return res.status(401).send(`Login is Required`);
        return;
    }
    req.user=tokenDetails; // setting extra info as user with req  object that is token 
    next();
};

export default isLoggedIn;