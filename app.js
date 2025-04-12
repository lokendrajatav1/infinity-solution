const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const categoryRoutes = require("./routes/categoryRoute");
const contactRoutes = require("./routes/contactRoute");
const blogRoutes = require("./routes/blogRoutes");
const secondSectionRoutes = require("./routes/secondSectionRoutes");

const app = express();
// for production comment this line
// app.use(
//     cors({
//         origin: ["http://localhost:5173", "https://infinitysolution.org"], // or your frontend IP/domain
//         credentials: true,
//     })
// );

app.use(express.static(path.join(__dirname, "public/dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/dist/", "index.html"));
});

// app.get('/', (req, res) => {
//   res.send('API is working 🚀');
// });

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.use("/api/v1/second-sections", secondSectionRoutes);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", blogRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

app.use(errorMiddleware);

module.exports = app;
