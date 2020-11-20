import * as dotenv from 'dotenv';

import { Client } from '../src';

dotenv.config();

const main = async () => {
    const token = process.env.TEST_TOKEN;
    if (!token) {
        throw Error('NO TOKEN GIVEN');
    }
    const client = new Client(token);
    await client.loadData().catch((err) => {
        console.error(err);
    });
};

main();
