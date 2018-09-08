const sleep = require('../utils').sleep;

KY.onGet('/config', async (ctx) => {
  let {
    baseURI,
    runtime
  } = KY.config;

  await sleep(300);

  ctx.send( { baseURI, runtime } );
});