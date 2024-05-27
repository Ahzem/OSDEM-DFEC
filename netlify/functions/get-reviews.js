/**
 * Axios is a popular HTTP client library for making HTTP requests from Node.js or the browser.
 * It provides an easy-to-use API for sending HTTP requests and handling responses.
 *
 * @see {@link https://github.com/axios/axios} for more information.
 */
import axios from 'axios';
import { process } from 'node';

export const handler = async () => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJbV3HCcc34ToRP0QS5s_EOTI&fields=reviews&key=${process.env.VITE_GOOGLE_MAPS_API_KEY}`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching Google reviews' }),
        };
    }
};