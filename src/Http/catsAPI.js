import {$host} from "./index";

export const fetchCats = async (page, limit, order, mime_types, size) => {
    const {data} = await $host.get('v1/images/search', {params: {
            page, limit, order, mime_types, size
        }});
    return data
}