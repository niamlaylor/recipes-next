import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password, confirmPassword } = req.body;
      console.log(`Received ${req.method} request to create a user: `, name, email, password, confirmPassword);
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password
        }
      });

      const updatedUser = JSON.stringify(
        user,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value)
      )
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    };
  };
};