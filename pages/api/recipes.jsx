export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, rating, duration, url, ingredients, instructions, img_url, labels } =
        req.body;

      const recipe = await prisma.recipe.create({
        data: {
          title,
          rating,
          duration,
          url,
          ingredients,
          instructions,
          img_url,
          labels
        },
      });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    };
  };
};