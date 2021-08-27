import React from 'react';
import App from '../../app/App';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";

const greeting = "Hello from";
const name = "App";

test('should render App correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<App />);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
