import { describe } from 'mocha';
import { deepStrictEqual, ok, strictEqual } from 'assert';
import { step } from 'mocha-steps';
import * as dotenv from 'dotenv';
import { Client } from '../src';
import * as nock from 'nock';
import { SCHOOL_DATA_RESPONSE } from './responses/school_data';
import { BASE_URL } from '../src/constants';
import { SCHOOLS_DATA_RESPONSE } from './responses/schools_data';
import { School } from '../src/classes';

describe('Client', async () => {
    // Set up the Client test.

    // Set up the dotenv
    dotenv.config();

    // Set up the mock URLS.
    beforeEach(() => {
        nock(BASE_URL).get('/schools').reply(200, SCHOOLS_DATA_RESPONSE);
        nock(BASE_URL)
            .get('/schools/newcanaan')
            .reply(200, SCHOOL_DATA_RESPONSE);
    });

    let token: string;
    step('Test has testing token', () => {
        token = process.env.TEST_TOKEN!;
        ok(token, 'No token given');
    });
    let client: Client;
    step('Create a client', () => {
        client = new Client(token);
    });

    step("should get user's schools", async () => {
        await client.getSchools();

        it('should have 1 school', () => strictEqual(client.schools.length, 1));
        let school: School;
        it('should be able to get school', () => {
            ok(client.school instanceof School);
            if (school == null) throw Error('school is null');
            school = client.school;
        });

        it('should deserialize school object', () => {
            strictEqual(
                school.createdAt.toUTCString(),
                'Sat, 02 Nov 2002 05:00:00 GMT',
            );
            strictEqual(
                school.updatedAt.toUTCString(),
                'Sun, 02 Mar 2003 05:00:00 GMT',
            );
            strictEqual(school.name, 'clonehigh');
            strictEqual(school.state, 'live');
            strictEqual(school.domains, ['https://cps-k12.org']);
            strictEqual(school.cohortTypes, []);
            strictEqual(school.staticSchedules, [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
            ]);
            strictEqual(school.title, 'Clone High School');
            strictEqual(school.nickname, 'Clone High');
            strictEqual(school.periodNames, [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
            ]);
            strictEqual(school.lunch.duration, 25);
            strictEqual(school.lunch.waveFrequency, null);
            strictEqual(school.lunch.passingDuration, null);
            strictEqual(school.lunch.waves, 3);
            strictEqual(school.lunch.firstWaveNow, false);
            strictEqual(school.lunch.firstWaveNowOffset, null);
            strictEqual(school.lunch.firstWavePass, null);
            strictEqual(school.lunch.lastWavePass, null);
            strictEqual(school.phoneNumber, '+1 (800) 000-0000');
            strictEqual(school.primaryColor, null);
            strictEqual(school.darkModeColor, null);
            strictEqual(school.studentsCount, 420);
            strictEqual(school.state, 'TX');
            strictEqual(school.districtCode, 'clone_high_school_district_tx');
            strictEqual(school.countyCode, null);
            strictEqual(school.timezone, 'US/Eastern');
            strictEqual(school.lat, 69);
            strictEqual(school.lng, -69);
            strictEqual(school.notes, null);
            strictEqual(school.scheduleTags, []);
            strictEqual(school.isPrivate, false);
            strictEqual(school.districtName, 'The Clone Distict');
            strictEqual(school.districtSchoolCount, 1);
            deepStrictEqual(school.meta, {
                free_period_course_id: 0,
                chat_minimum_depth: 0,
                user_count: 220,
                students_count: 420,
                features: {
                    chat_tab: false,
                    chat_unlocked: false,
                    chat_unlocked_web: false,
                    crush_copy: false,
                    grade_chats: false,
                    local_schedule_change: false,
                    swap_courses_list_and_share_buttons: false,
                    user_joined_class_notifications: false,
                },
            });
            return true;
        });
    });
});
