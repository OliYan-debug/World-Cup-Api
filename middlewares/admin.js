const adminOnly = (req, res, next) => {
  try {
    let headersSecret = req.headers.secret
    if (headersSecret == process.env.secret) {
      next();
    }else{
        throw "We don't have time for this"
    }
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
export default adminOnly;
