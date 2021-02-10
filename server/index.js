import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyparser from "body-parser";
import postRoutes from "./routes/posts.js";

//initializing app
const app = express();

//middleware for parsing content from frontend
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes
app.use("/posts", postRoutes);

//Db connectionString
const DbConnection_url =
  "mongodb+srv://MemoriesApp:DarkOne$$1234@postmessages.b8789.mongodb.net/PostMessages?retryWrites=true&w=majority";

//Port for running server
const PORT = process.env.PORT || 5000;

//Db connection and server initializing
mongoose
  .connect(DbConnection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
