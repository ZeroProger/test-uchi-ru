import axios from "axios";

const $host = axios.create({
    baseURL: 'https://api.thecatapi.com/',
    responseType: "json",
})

$host.defaults.headers.common['x-api-key'] = "e5937e68-63a7-4538-8fbf-a699a4f08448"

export {
    $host
}