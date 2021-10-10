const permMid = (permission) => {
   return (req ,res , next) => {
        if (permission.includes(req.role)) {
            next();
        } else res.sendStatus(403)
   }
}

module.exports = permMid