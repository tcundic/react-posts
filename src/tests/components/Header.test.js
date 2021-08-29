import React from 'react';
import Header from "../../components/Header";
import { mount, shallow } from 'enzyme';
import { expect as chaiExpect } from "chai";
import toJson from "enzyme-to-json";
import navItems from "../fixtures/routes";
import * as Greet from "../../utils/helperFunctions";
import { BrowserRouter } from "react-router-dom";

const greeting = "Hello from";
const title = "React app";
const logo = "./logo";
const name = Header.name;

test('should render Header correctly', () => {
    const wrapper = shallow(<Header greeting={greeting} title={title} logo={logo} navItems={navItems} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print Header greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<BrowserRouter><Header greeting={greeting} title={title} logo={logo} navItems={navItems} /></BrowserRouter>);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});

test('should render 2 nav item', () => {
    const wrapper = shallow(<Header greeting={greeting} title={title} logo={logo} navItems={navItems} />);
    chaiExpect(wrapper.find('#navbar-menu').children().find('.navbar-item')).to.have.length(2);
});
