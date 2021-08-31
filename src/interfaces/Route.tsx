import {ComponentType} from "react";

interface Route {
    title: string,
    url: string,
    component: ComponentType<any>,
    isInHeader: boolean
}

export default Route;