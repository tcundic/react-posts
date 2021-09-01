import {apiEndpoint} from "../config";
import RequestOptions from "../interfaces/Request";
import Post from "../interfaces/Post";

const request = (options: RequestOptions, additionalHeaders?: Object): Promise<any> => {
    const headers = {
        'Content-Type': 'application/json',
        ...additionalHeaders
    };

    const defaults = {headers};
    options = Object.assign({}, defaults, options, {crossDomain: true});

    return fetch(options.url, options)
        .then(response => response.json());
};

export function getPosts(): Promise<Post[]> {
    return request({
        url: `${apiEndpoint}posts`,
        method: 'GET'
    });
}

export function getPostById(id: number): Promise<Post> {
    return request({
        url: `${apiEndpoint}posts/${id}`,
        method: 'GET'
    });
}
