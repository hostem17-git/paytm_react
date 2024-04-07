const { Router } = require("express");
const { User } = require("./db/index.js")
const userRouter = require("./routes/user")

const router = Router();

router.use("/user",userRouter)

module.exports = router;