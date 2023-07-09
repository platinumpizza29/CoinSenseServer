import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import jwt, { Jwt } from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();

router.post("/auth/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    var user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    if (user?.password != password) {
      res.status(403).send("Invalid login details");
    } else {
      const token = jwt.sign(user!, process.env.MY_SECRET!, { expiresIn: "1h" })
      res.status(200).send(token);
    }
  } catch (e) {
    res.status(403).send("User not found");
  }
});

export = router;


//
// signn the jwt here
