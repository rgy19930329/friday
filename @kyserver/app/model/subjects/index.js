const Subject = require('./subjectsModel');

const save = async (subject) => {
  return await Subject.create(subject);
};

const find = async (conditions) => {
  return await Subject.find(conditions || {});
};

const update = async (conditions, update) => {
  return await Subject.updateMany(conditions, update);
};

const remove = async (conditions) => {
  return await Subject.deleteOne(conditions);
};

module.exports = {
  save,
  find,
  update,
  remove
}
