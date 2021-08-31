import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import React from "react";
import Routes from "../../components/Routes";
import routes, { Component1, Component2 } from "../fixtures/routes";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

const greeting = "Hello from";
const name = Routes.name;

test('should render Routes correctly', () => {
    const wrapper = shallow(<Routes routes={routes} greeting={greeting}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(Route)).toHaveLength(5);
});

test('should print Routes greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    mount(<BrowserRouter><Routes routes={routes} greeting={greeting}/></BrowserRouter>);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});

test('should change routes correctly', () => {
    let wrapper = mount(
        <MemoryRouter initialEntries={['/nonExistingRoute']}>
            <Routes routes={routes} greeting={greeting}/>
        </MemoryRouter>
    );

    expect(wrapper.find('img.home-page-logo')).toHaveLength(1);
    expect(wrapper.find(Component1)).toHaveLength(0);
    expect(wrapper.find(Component2)).toHaveLength(0);


    wrapper = mount(
        <MemoryRouter initialEntries={['/item1']}>
            <Routes routes={routes} greeting={greeting}/>
        </MemoryRouter>
    );

    expect(wrapper.find('img.home-page-logo')).toHaveLength(0);
    expect(wrapper.find(Component1)).toHaveLength(1);
    expect(wrapper.find(Component2)).toHaveLength(0);
});
