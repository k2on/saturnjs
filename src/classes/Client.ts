import axios, { AxiosInstance } from 'axios';
import { User, School } from '.';

import { BASE_URL, HOME_URL } from '../constants';
import SchoolType from '../types/SchoolType';

/**
 * Class for representing a Saturn Client.
 * @class
 */
export default class Client {
    private axios: AxiosInstance;
    public user: User | null = null;
    public schools: School[];

    /**
     * Constructor for the Client.
     * @param {string} token Client token from the browser.
     */
    constructor(private token: string) {
        this.axios = axios.create({
            baseURL: BASE_URL,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    /**
     * Gets the current school.
     * @returns {School | null} School object or null if not exists.
     */
    get school(): School | null {
        if (this.schools.length == 0) return null;
        if (this.schools.length == 1) return this.schools[0];
        throw Error(
            'if you are seeing this error, PLEASE create an issue on gh',
        );
    }

    /**
     * Load the Client data.
     * @function loadData
     * @memberof Client
     * @async
     * @returns {Promise<User>} The user generated.
     */
    async getUserData(): Promise<User> {
        const response = await axios.get(HOME_URL, {
            headers: {
                Cookie: 'SATURN_TOKEN=' + this.token,
            },
        });
        const html = <string>response.data;
        // This will scrape the home page for the next data.
        const nextData = JSON.parse(
            html
                .split('<script id="__NEXT_DATA__" type="application/json">')[1]
                .split('</script>')[0],
        );

        const initialState = nextData.props.initialState;

        this.user = User.deserialize(initialState.user);
        return this.user;
    }

    /**
     * Returns a list of Schools.
     * @returns {Promise<School[]>} List of schools.
     */
    async getSchools(): Promise<School[]> {
        if (this.user == null) this.user = await this.getUserData();
        const response = await this.axios.get('schools');
        this.schools = response.data.map((school: SchoolType) =>
            School.deserialize(school),
        );
        return this.schools;
    }

    /**
     * Returns a School calender from its id.
     * @param {string} schoolId ID of the school.
     * @returns {Promise<any>} Calender.
     */
    // async getSchoolData(schoolId: string | null = null): Promise<School> {
    //     if (this.user == null) this.user = await this.getUserData();
    //     if (schoolId == null) schoolId = this.user.schoolId;
    //     const response = await this.axios.get(`schools/${schoolId}`);
    //     this.school = School.deserialize(response.data);
    //     return this.school;
    // }
}
