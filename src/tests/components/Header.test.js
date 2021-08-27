import React from 'react';
import Header from "../../components/Header";
import { mount, shallow } from 'enzyme';
import { expect as chaiExpect } from "chai";
import toJson from "enzyme-to-json";
import navItems from "../fixtures/navItems";
import * as Greet from "../../utils/helperFunctions";

const greeting = "Hello from";
const title = "React app";
const logo = "./logo";
const name = "Header";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header greeting={greeting} title={title} logo={logo} navItems={navItems} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<Header greeting={greeting} title={title} logo={logo} navItems={navItems} />);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});

test('should render 2 nav item', () => {
    const wrapper = shallow(<Header greeting={greeting} title={title} logo={logo} navItems={navItems} />);
    chaiExpect(wrapper.find('#navbar-menu').children().find('.navbar-item')).to.have.length(2);
});
