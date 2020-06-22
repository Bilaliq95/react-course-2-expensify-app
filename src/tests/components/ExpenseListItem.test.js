import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render correct expense list item',()=>{
    const wrapper=shallow(<ExpenseListItem expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
});