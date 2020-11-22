import { describe } from 'mocha';
import { deepStrictEqual, ok, strictEqual } from 'assert';
import { step } from 'mocha-steps';
import * as dotenv from 'dotenv';
import { Client } from '../src';
import * as nock from 'nock';
import { BASE_URL } from '../src/constants';
import { SCHOOLS_RESPONSE, SCHOOL_RESPONSE } from './responses/school_data';
import { School } from '../src/classes';

describe('Client', async () => {
    // Set up the Client test.

    // Set up the dotenv
    dotenv.config();

    // Set up the mock URLS.
    beforeEach(() => {
        nock(BASE_URL).get('/schools').reply(200, SCHOOLS_RESPONSE);
        nock(BASE_URL).get('/schools/newcanaan').reply(200, SCHOOL_RESPONSE);
    });

    let token: string;
    step('Test has testing token', () => {
        if (process.env.TEST_TOKEN == undefined)
            throw Error('token is undefined');
        token = process.env.TEST_TOKEN;
        ok(token, 'No token given');
    });
    let client: Client;
    step('Create a client', () => {
        client = new Client(token);
    });

    step("should get user's schools", async () => {
        describe('Get users schools', async () => {
            let schools: School[];
            step('make a request to the schools', async () => {
                schools = await client.getSchools().catch((err) => {
                    throw err;
                });
            });

            step('should have 1 school', () => {
                strictEqual(schools.length, 1);
            });
            step('should be able to get school', () => {
                ok(schools[0] instanceof School);
                if (schools[0] == null) throw Error('school is null');
            });

            step('should deserialize school object', () => {
                const school = schools[0];
                strictEqual(
                    school.createdAt.toUTCString(),
                    'Sat, 02 Nov 2002 05:00:00 GMT',
                    "Created at doesn't match",
                );
                strictEqual(
                    school.updatedAt.toUTCString(),
                    'Sun, 02 Mar 2003 05:00:00 GMT',
                    "Updated at doesn't match",
                );
                strictEqual(school.name, 'clonehigh', "Name doesn't match");
                strictEqual(school.status, 'live', "Status doesn't match");
                deepStrictEqual(
                    school.domains,
                    ['https://cps-k12.org'],
                    "Domains don't match",
                );
                deepStrictEqual(
                    school.cohortTypes,
                    [],
                    "Cohort types don't match",
                );
                deepStrictEqual(
                    school.staticSchedules,
                    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                    "Static schedules don't match",
                );
                strictEqual(
                    school.title,
                    'Clone High School',
                    "Title doen't match",
                );
                strictEqual(
                    school.nickname,
                    'Clone High',
                    "Nickname doesn't match",
                );
                deepStrictEqual(
                    school.periodNames,
                    ['1', '2', '3', '4', '5', '6', '7', '8'],
                    "Period names don't match",
                );
                strictEqual(
                    school.lunch.duration,
                    25,
                    "Lunch duration doesn't match",
                );
                strictEqual(
                    school.lunch.waveFrequency,
                    null,
                    "Lunch wave frequency doesn't match",
                );
                strictEqual(
                    school.lunch.passingDuration,
                    null,
                    "Lunch passing duration doesn't match",
                );
                strictEqual(school.lunch.waves, 3);
                strictEqual(
                    school.lunch.firstWaveNow,
                    false,
                    "Lunch first wave now doesn't match",
                );
                strictEqual(
                    school.lunch.firstWaveNowOffset,
                    null,
                    "Lunch first wave now offset doesn't match",
                );
                strictEqual(
                    school.lunch.firstWavePass,
                    null,
                    "Lunch first wave pass doesn't match",
                );
                strictEqual(
                    school.lunch.lastWavePass,
                    null,
                    "Lunch last wave pass doesn't match",
                );
                strictEqual(
                    school.phoneNumber,
                    '+1 (800) 000-0000',
                    "Phone number doesn't match",
                );
                strictEqual(
                    school.primaryColor,
                    null,
                    "Primary color doesn't match",
                );
                strictEqual(
                    school.darkModeColor,
                    null,
                    "Dark mode color doesn't match",
                );
                strictEqual(
                    school.studentsCount,
                    420,
                    "Students count doesn't match",
                );
                strictEqual(school.state, 'TX', "State doesn't match");
                strictEqual(
                    school.districtCode,
                    'clone_high_school_district_tx',
                    "District code doesn't match",
                );
                strictEqual(
                    school.countyCode,
                    null,
                    "County code doesn't match",
                );
                strictEqual(
                    school.timezone,
                    'US/Eastern',
                    "Timezone doesn't match",
                );
                strictEqual(school.lat, 69, "Lat doesn't match");
                strictEqual(school.lng, -69, "Lng doesn't match");
                strictEqual(school.notes, null, "Notes doesn't match");
                deepStrictEqual(
                    school.scheduleTags,
                    [],
                    "Schedule tags don't match",
                );
                strictEqual(
                    school.isPrivate,
                    false,
                    "Is Private doesn't match",
                );
                strictEqual(
                    school.districtName,
                    'The Clone Distict',
                    "District name doesn't match",
                );
                strictEqual(
                    school.districtSchoolCount,
                    1,
                    "District school count doesn't match",
                );
                deepStrictEqual(
                    {
                        free_period_course_id: school.meta.freePeriodCourseId,
                        chat_minimum_depth: school.meta.chatMinimumDepth,
                        user_count: school.meta.userCount,
                        students_count: school.meta.studentsCount,
                        features: {
                            chat_tab: school.meta.features.chatTab,
                            chat_unlocked: school.meta.features.chatUnlocked,
                            chat_unlocked_web:
                                school.meta.features.chatUnlockedWeb,
                            crush_copy: school.meta.features.crushCopy,
                            grade_chats: school.meta.features.gradeChats,
                            local_schedule_change:
                                school.meta.features.localScheduleChange,
                            swap_courses_list_and_share_buttons:
                                school.meta.features
                                    .swapCoursesListAndShareButtons,
                            user_joined_class_notifications:
                                school.meta.features
                                    .userJoinedClassNotifications,
                        },
                    },
                    {
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
                    },
                    "Meta doesn't match",
                );
            });
        });
    });
});
