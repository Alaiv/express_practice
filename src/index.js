import createServer from "./server.js";

const PORT = 5000;



const app = createServer();

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));

