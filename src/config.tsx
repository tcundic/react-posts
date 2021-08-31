import Posts from "./components/Posts";
import Route from "./interfaces/Route";

export const routes: [Route] =
    [
        {title: 'Posts', url: '/posts', component: Posts, isInHeader: true}
    ];

export const greeting: string = process.env.REACT_APP_GREETING || '';
export const apiEndpoint: string = process.env.REACT_APP_API_ENDPOINT || '';
