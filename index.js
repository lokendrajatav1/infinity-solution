const app = require("./app");
const path = require("path");

const connectDatabase = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

process.on("uncaughtException", (err) => {
    console.log("error: " + err.message);
    console.log("shutting down the server due to uncaught exception ");
    process.exit(1);
});

connectDatabase();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log("listening on port " + PORT);
    console.log("do not try to run any script in the browser console"); 
});




// Route to serve the React app at the main route
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/dist", "index.html"));
// });

process.on("unhandledRejection", (err) => {
    console.log("error: " + err);
    console.log("shutting down the server");

    server.close(() => {
        process.exit(1);
    });
});
