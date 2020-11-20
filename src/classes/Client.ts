import axios, { AxiosInstance } from 'axios';
import { User } from '.';

import { BASE_URL, HOME_URL } from '../constants';

/**
 * Class for representing a Saturn Client.
 * @class
 */
export default class Client {
    private axios: AxiosInstance;
    public user: User;

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
     * Load the Client data.
     * @function loadData
     * @memberof Client
     * @async
     * @returns {Promise<void>}
     */
    async loadData(): Promise<void> {
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

        console.log(this.user);

        // console.log(Object.keys(nextData));
        // console.log(JSON.stringify(nextData, null, 4));
    }
}
