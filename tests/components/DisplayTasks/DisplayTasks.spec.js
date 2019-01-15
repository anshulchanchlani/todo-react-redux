import React from 'react';
import DisplayTasks from '../../../src/components/DisplayTasks';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import reduxPromise from 'redux-promise'
import {shallow} from 'enzyme';




describe('Display Tasks tests',()=>{
    const wrapper = shallow(<DisplayTasks/>)
    
    test('Display Tasks renders',()=>{
      expect(wrapper).toMatchSnapshot();
    })

    
    
})
