import * as dotenv from 'dotenv';

import { Client } from '../src';

dotenv.config();

const main = async () => {
    const token = process.env.TEST_TOKEN;
    if (!token) {
        throw Error('NO TOKEN GIVEN');
    }
    const client = new Client(token);
    await client.getUserData().catch((err) => {
        console.error(err);
    });
    const cal = await client
        .getSchoolCalender(client.user.schoolid)
        .catch((err) => {
            console.log(err);
            throw err;
        });
    console.log(cal);
    console.log(cal.title);
};

main();
