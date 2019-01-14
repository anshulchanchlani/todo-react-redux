import React from 'react';
import App from '../../../src/components/App'
import {shallow} from 'enzyme';

test('App renders',()=>{
    const component = shallow(<App/>); 
    expect(component).toMatchSnapshot();
})

