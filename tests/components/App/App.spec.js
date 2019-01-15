import React from 'react';
import App from '../../../src/components/App'
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';


describe('App tests',()=>{
    const wrapper = shallow(<App/>); 
    
    test('App renders',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
    })
    
})

