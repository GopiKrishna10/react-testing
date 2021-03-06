import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import axios from 'axios';
import App, { Counter, dataReducer } from './App';
const list = ['a', 'b', 'c'];

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});

describe('App', () => {

    describe('Reducer', () => {
        it('should set a list', () => {
            const state = { list: [], error: null };
            const newState = dataReducer(state, {
                type: 'SET_LIST',
                list,
            });
            expect(newState).toEqual({ list, error: null });
        });
        it('should reset the error if the list is set', () => {
            const state = { list: [], error: true };
            const newState = dataReducer(state, {
                type: 'SET_LIST',
                list,
            });
            expect(newState).toEqual({ list, error: null });
        });
        it('should set the error', () => {
            const state = { list: [], error: null };
            const newState = dataReducer(state, {
                type: 'SET_ERROR',
            });
            expect(newState.error).toBeTruthy();
        })
    });
    test('snapshot reders', () => {
        const component = renderer.create(<App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    // Enzyme for Dom Interactions
    it('renders the inner counter', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Counter).length).toEqual(1);
    });
    it('passes all props to Counter', () => {
        const wrapper = mount(<App />);
        const counterWrapepr = wrapper.find(Counter);
        expect(counterWrapepr.find('p').text()).toEqual('0');
    });
    it('increments the counter', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').at(0).simulate('click');
        const counterWrapepr = wrapper.find(Counter);
        expect(counterWrapepr.find('p').text()).toBe('1')
    });

    it('decrements the counter', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').at(1).simulate('click');
        const counterWrapepr = wrapper.find(Counter);
        expect(counterWrapepr.find('p').text()).toBe('-1');
    });

    // it('fetches async data', (done) => {
    //     const promise = new Promise((resolve, reject) =>
    //         setTimeout(() => {
    //             resolve({
    //                 data: {
    //                     hints: [
    //                         { objectID: '1', title: 'a' },
    //                         { objectID: '2', title: 'b' },
    //                     ],
    //                 },
    //             })
    //         }, 100)
    //     );
    //     axios.get = jest.fn(() => promise);
    //     const wrapper = mount(<App />);
    //     expect(wrapper.find('li').length).toEqual(0);
    //     promise.then(() => {
    //         setImmediate(() => {
    //         wrapper.update();
    //         expect(wrapper.find('li').length).toEqual(2);
    //         axios.get.mockClear();
    //         done();
    //         });
    //     })
    // });
    // it('fetches async data but fails', (done) => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => reject(new Error('Whoops!')), 100)
    //     });
    //     axios.get = jest.fn(() => promise);
    //     const wrapper = mount(<App />);
    //     promise.catch(() => {
    //         setImmediate(() => {
    //             wrapper.update();
    //             expect(wrapper.find('li').length).toEqual(0);
    //             expect(wrapper.find('.error').length).toEqual(1);
    //             axios.get.mockClear();
    //             done();
    //         })
    //     })
    // })
});

describe('Counter', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Counter counter={1} />)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});