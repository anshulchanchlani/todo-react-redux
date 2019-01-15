import React from 'react';
import Task from '../../../src/components/Task';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

const item = {
    "id": 1,
    "name": "hi",
    "createdAt": 1547557062930,
    "completed": true,
    "lastModifiedAt": 1547557062930
}
describe('Task tests',()=>{
    const wrapper = shallow(<Task item={item}/>); 
    test('Task renders',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('Task elements',()=>{
        expect(wrapper.find('input').length).toEqual(1);
    })

   
})
