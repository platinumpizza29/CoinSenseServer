import express from "express";
import cors from "cors";

//route imports
import RegisterRoute from "./router/registerUser";
import LoginRoute from "./router/loginUser";
import ExpenseRoute from "./router/expenseRoute";

const app = express();

//middlewares
app.use(express.json())
app.use(
  cors({
    origin: '*', // Replace with your Flutter app's origin
    allowedHeaders: '*', // Allow all headers
  })
);

app.use("/", RegisterRoute);
app.use("/", LoginRoute);
app.use("/", ExpenseRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server listening on: " + process.env.SERVER_PORT);
})
