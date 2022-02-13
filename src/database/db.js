// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import data from './data';

const Database = {};

Database.getAll = async () => {
  const asArray = Object.values(data);
  await randomDelay();
  return asArray;
};

Database.getById = async (id) => {
  const entry = data[id];
  await randomDelay();
  return entry;
};

const randomDelay = () => {
  return new Promise((resolve) => {
    const max = 350;
    const min = 100;
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(resolve, delay);
  });
};

export default Database;
