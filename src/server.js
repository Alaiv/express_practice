import express from "express";
import userRouter from "./routers/user-router.js";
import notFoundMiddlware from "./middlewares/notFoundMiddlware.js";

const createServer = () => {
    const app = express();
    app.use(express.json())
    app.use('/api', userRouter);
    app.use(notFoundMiddlware);

    return app;
}

export default createServer;