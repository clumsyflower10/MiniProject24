import { Request, Response } from 'express';
import prisma from '../prisma';
import { compare, hash } from '../common/helpers/bcrypt.helper';
import { generateToken } from '../common/helpers/jwt.helper';

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export class AuthController {
  async register(req: Request, res: Response) {
    const payload: RegisterPayload = {
      ...req.body,
      password: hash(req.body.password),
    };

    const { email, username } = payload;

    const userByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (userByUsername) {
      return res.status(409).json({
        code: 409,
        message: `User with username ${username} already exists`,
      });
    }

    const userByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (userByEmail) {
      return res.status(409).json({
        code: 409,
        message: `User with email ${email} already exists`,
      });
    }

    await prisma.user.create({
      data: payload,
    });

    return res.status(201).send({
      code: 201,
      message: `User ${req.body.username} created successfully`,
    });
  }

  async login(req: Request, res: Response) {
    const { username, email, password } = req.body;

    if ((!username && !email) || !password) {
      return res.status(400).json({
        code: 400,
        message: 'Username or email and password cannot be empty',
      });
    }

    const condition: { username?: string; email?: string } = {};

    if (username) {
      condition.username = username;
    }

    if (email) {
      condition.email = email;
    }

    const user = await prisma.user.findFirst({
      where: condition,
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found',
      });
    }

    const isValidUserPassword = compare(password, user.password);

    if (!isValidUserPassword) {
      return res.status(400).json({
        code: 400,
        message: 'Invalid username or password',
      });
    }

    const generatedToken = generateToken(user);

    return res.status(200).send({
      code: 200,
      message: 'Success',
      data: {
        token: generatedToken,
      },
    });
  }
}
