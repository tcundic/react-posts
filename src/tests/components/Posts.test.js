import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import React from "react";
import Posts from "../../components/Posts";
import posts from "../fixtures/posts";
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(posts)
    })
});

afterEach(() => {
    jest.restoreAllMocks();
});

const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
        wrapper.update();
    });
};

const greeting = "Hello from";
const name = Posts.name;

test('should render Posts correctly', () => {
    const wrapper = shallow(<Posts greeting={greeting} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print Posts greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(<BrowserRouter><Posts greeting={greeting}/></BrowserRouter>);
    waitForComponentToPaint(wrapper);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
