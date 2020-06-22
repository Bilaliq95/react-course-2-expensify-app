import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../components/Header'


test('Should render the correct Header component',()=>{
const wrapper=shallow(<Header/>)
expect(wrapper).toMatchSnapshot();
})