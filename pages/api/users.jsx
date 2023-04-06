export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } =
        req.body;

      const user = await prisma.recipe.create({
        data: {
          name,
          email,
          password
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    };
  };
};