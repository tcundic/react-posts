import Posts from "./components/Posts";
import Route from "./interfaces/Route";

export const routes: [Route] =
    [
        {title: 'Posts', url: '/posts', component: Posts}
    ];

export const greeting: string = process.env.REACT_APP_GREETING || '';
