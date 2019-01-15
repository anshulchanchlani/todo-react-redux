import React from 'react';
import Login from '../../../src/components/Login';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';


describe('Login tests',()=>{
    const wrapper = shallow(<Login/>); 
    test('Login renders',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
    })

    test('Login has a login form',()=>{
        expect(wrapper.find('form').length).toEqual(1)
        expect(wrapper.find('input').length).toEqual(2)
        expect(wrapper.find('button').length).toEqual(1)
    })
})
