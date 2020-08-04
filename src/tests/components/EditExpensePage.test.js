import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let wrapper,history,editExpense,removeExpense

beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history=  {push:jest.fn()}
    wrapper=shallow(<EditExpensePage  editExpenseProp={expenses[2]}  removeExpense={removeExpense} editExpense={editExpense} history={history}/>)
});

test('Should render correct edit Expense component',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('Should handle edit expense',()=>{
wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
expect (history.push).toHaveBeenLastCalledWith('/');
expect (editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
    
})

test('Should handle remove expense',()=>{
    wrapper.find('button').simulate('click')
    expect (history.push).toHaveBeenLastCalledWith('/');
    expect (removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
        
    });