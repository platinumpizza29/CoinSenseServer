import express from "express";

//route imports
import RegisterRoute from "./router/registerUser";
import LoginRoute from "./router/loginUser";
import ExpenseRoute from "./router/expenseRoute";

const app = express();

//middlewares
app.use(express.json())
app.use("/", RegisterRoute);
app.use("/", LoginRoute);
app.use("/", ExpenseRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server listening on: " + process.env.SERVER_PORT);
})
