const Category = require("../models/Category");
const Tag = require("../models/Tag");
const categoriesMock = require("../mock/categories.json");
const tagsMock = require("../mock/tags.json");

module.exports = async () => {
  const categories = await Category.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Category, categoriesMock);
  }

  const tags = await Tag.find();
  if (tags.length !== tagsMock.length) {
    await createInitialEntity(Tag, tagsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item.id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
