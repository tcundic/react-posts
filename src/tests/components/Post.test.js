import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as Greet from "../../utils/helperFunctions";
import React from "react";
import posts from "../fixtures/posts";
import { act } from "@testing-library/react";
import Post from "../../components/Post";
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(posts[0])
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
const name = Post.name;

test('should render Posts correctly', () => {
    const wrapper = shallow(
        <MemoryRouter initialEntries={['/post/1']}>
            <Post greeting={greeting}/>
        </MemoryRouter>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should print Posts greeting', () => {
    const greetSpy = jest.spyOn(Greet, 'greet');
    const wrapper = mount(
        <MemoryRouter initialEntries={['/post/1']}>
            <Post greeting={greeting}/>
        </MemoryRouter>);
    waitForComponentToPaint(wrapper);
    expect(greetSpy).toHaveBeenLastCalledWith(greeting, name);
});
