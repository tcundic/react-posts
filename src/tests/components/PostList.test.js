import Posts from "../../components/Posts";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import PostList from "../../components/PostList";
import posts from "../fixtures/posts";

const greeting = "Hello from";
const name = PostList.name;

test('should render PostList correctly', () => {
    const wrapper = shallow(<PostList greeting={greeting} posts={posts} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('NavLink')).toHaveLength(2);
});

test('should print PostList greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    mount(<BrowserRouter><PostList greeting={greeting} posts={posts}/></BrowserRouter>);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
