import React from 'react'
import ErrorPage from '../../components/ErrorPage';
import {shallow} from 'enzyme'


test('should render error page component correctly',()=>{
    const wrapper=shallow(<ErrorPage />)
    expect(wrapper).toMatchSnapshot();
});