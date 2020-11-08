import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//body-parser setup connection

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files

app.use(express.static("public")); // just the address in this command for all files

app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`You server is running on port ${PORT}`));
