
const  cron = require('node-cron');
const PocketBase = require('pocketbase/cjs')
require('cross-fetch/polyfill');
const client = new PocketBase('https://funnier-backend-production.up.railway.app');


let i = 100;
cron.schedule(`*/1 * * * *`, async () => {
  const data = { test: `Hello World ${i++}` };
  console.log(data)
  const record = await client.records.create('posts', data);
  console.log(record)
});




