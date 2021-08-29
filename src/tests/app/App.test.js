import React from 'react';
import App from '../../app/App';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const greeting = "Hello from";
const name = App.name;

test('should render App correctly', () => {
    const wrapper = shallow(<App/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print App greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<BrowserRouter><App/></BrowserRouter>);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
