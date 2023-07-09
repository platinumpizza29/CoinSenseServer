import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.route("/:userId/expenses").get(async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const allExpenses = await prisma.user.findUnique({
      where: {
        id: userId
      }
    }).expenses();
    console.log(allExpenses);
    res.status(200).send(allExpenses);
  } catch (e) {
    res.status(500).send("Error while fetching expenses")
  }
}).post(async (req: Request, res: Response) => {
  //new transaction
  const userId = parseInt(req.params.userId);
  const { title, description, amount, category } = req.body;
  try {
    var newTransaction = await prisma.expense.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        amount: amount,
        category: category
      }
    });
    console.log(newTransaction);
    res.status(200).send(newTransaction);
  } catch (e) {
    res.status(500).send("Error while adding new expense")
  }
});

export = router;
