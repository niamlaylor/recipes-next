import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(`Recipe data:`, req.body)

      const recipe = await prisma.recipe.create({

        data: {
          userId: '1',
          title: req.body.name,
          duration: `${req.body.time.totalMin}`,
          url: req.body.url,
          ingredients: req.body.ing,
          instructions: req.body.dir,
          img_url: req.body.img,
          description: req.body.desc
        }
      });
      const updatedRecipe = JSON.stringify(
        recipe,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value)
      );
      return res.status(200).json(updatedRecipe);
    } catch (error) {
      console.log(`error!`, error);
      return res.status(500).json({ message: 'Something went wrong' });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      const deleteRecipe = await prisma.recipe.delete({
        where: {
          id: id
        }
      });
      return res.status(200).json(deleteRecipe);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting recipe' });
    }
  } else {
    return res.status(400).json({ message: 'Invalid HTTP method' });
  }
};