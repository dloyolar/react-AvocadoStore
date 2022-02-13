import Database from '../../../database/db';

const getAvoById = async (req, res) => {
  const data = await Database.getById(req.query.id);
  res.status(200).json(data);
};

export default getAvoById;
