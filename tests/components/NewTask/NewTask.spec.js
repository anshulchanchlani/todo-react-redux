import React from 'react';
import NewTask from '../../../src/components/NewTask';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';



describe('New Task tests',()=>{
    const wrapper = shallow(<NewTask/>); 
    const component = toJson(wrapper)
    
    test('NewTask renders',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
    })
})
