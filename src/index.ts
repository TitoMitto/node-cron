import * as cron from 'node-cron';
import  PocketBase from 'pocketbase';
const client = new PocketBase('https://funnier-backend-production.up.railway.app');

let i = 0;

cron.schedule(`*/1 * * * *`, async () => {
  const data = { test: `Hello World ${i++}` };

const record = await client.records.create('posts', data);
});
