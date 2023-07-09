import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/auth/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  try {
    var savedUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password
      }
    });
    res.send(savedUser).status(201);
  } catch (e) {
    res.send("Error while registering data").status(500);
  }
})

export = router;
