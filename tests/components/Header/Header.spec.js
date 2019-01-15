import React from 'react';
import Header from '../../../src/components/Header';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';


describe('Header tests',()=>{
    const wrapper = shallow(<Header/>); 
    
    test('Header renders',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
    })

    test('Header has a heading',()=>{
        expect(wrapper.find('h1').length).toEqual(1)
    })
    
})
