import {ComponentType} from "react";

interface Route {
    title: string,
    url: string,
    component: ComponentType<any>
}

export default Route;