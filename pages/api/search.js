import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  let { query } = req;

  query = query.q;

  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        AND: [
          { userId: req.query.userId },
          {
            OR: [
              { labels: { hasSome: [query] } },
              { title: { contains: query, mode: 'insensitive' } },
            ],
          },
        ],
      },
    });

    res.status(200).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
