const { subjects } = require('../../model');

KY.onGet('/api/subjects/list', async (ctx) => {
  const params = ctx.request.query;
  const curr = parseInt(params.curr || 1) - 1;
  const size = parseInt(params.size || 10);
  const data = await subjects.find({}, null, { skip: curr * size, limit: size });
  const total = await subjects.count();
  ctx.send({
    success: true,
    data: data,
    total: total,
  });
});

KY.onGet('/api/subjects/add', async (ctx) => {
  const subject = {
    "rate": "9.7",
    "cover_x": 2000,
    "title": "肖申克的救赎",
    "url": "https://movie.douban.com/subject/1292052/",
    "playable": true,
    "cover": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
    "id": "1292070",
    "cover_y": 2963,
    "is_new": false
  };

  const data = await subjects.save(subject);
  ctx.send({
    success: true,
    data: data,
  });
});

KY.onGet('/api/subjects/update', async (ctx) => {
  const conditions = { id: '1292070' };
  const update = { $set: { rate: '9.7' } };

  const data = await subjects.update(conditions, update);
  ctx.send({
    success: true,
    data: data,
  });
});

KY.onGet('/api/subjects/delete', async (ctx) => {
  const data = await subjects.remove({ id: '1292070' });
  ctx.send({
    success: true,
    data: data,
  });
});

