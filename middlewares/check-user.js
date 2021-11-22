

async function checkUser(req, res, next) {
    const userId = req.headers['user-id'];
    const users = await getUsers();

    const user = users.find(({id}) => id === userId);

    if (user) {
        req.userId = userId;
        req.user = user;
        next();
    } else {
        res.status(401).json({message: 'you`re not allawed'}).end();
    }
}

module.exports = {checkUser}