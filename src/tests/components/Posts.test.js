import { mount, shallow } from "enzyme";
import Header from "../../components/Header";
import navItems from "../fixtures/routes";
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Posts from "../../components/Posts";

const greeting = "Hello from";
const name = Posts.name;

test('should render Posts correctly', () => {
    const wrapper = shallow(<Posts greeting={greeting} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print Posts greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<Posts greeting={greeting}/>);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
