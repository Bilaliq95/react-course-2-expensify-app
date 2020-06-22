import React from 'react'
import ExpensifyDashboard from '../../components/ExpensifyDashboard';
import {shallow} from 'enzyme'

test('should render expensify dashboard component correctly',()=>{
    const wrapper=shallow(<ExpensifyDashboard />)
    expect(wrapper).toMatchSnapshot();
});