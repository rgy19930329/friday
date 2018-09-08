const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  cover: String,
  cover_x: Number,
  cover_y: Number,
  id: String,
  is_new: Boolean,
  playable: Boolean,
  rate: String,
  title: String,
  url: String
}, { versionKey: false });

mongoose.connect(KY.config.mongodbServer, {
  useNewUrlParser: true // 忽略插入版本号
});

const SubjectModel = mongoose.model('Subject', SubjectSchema, 'subjects');

module.exports = SubjectModel;
