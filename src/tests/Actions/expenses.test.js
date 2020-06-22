//yarn test -- --watch


import {addExpense,removeExpense,editExpense} from '../../Actions/expenses';

test('Should return the correct remove action object',()=>{
    const action=removeExpense({id:'12ab'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12ab'
    });
})


test('Should return the correct edit action object',()=>{
    const action=editExpense('abcd',{note:'BLAH'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abcd',
        updates:{note:'BLAH'}
    });
})


test('Should return the correct add action object',()=>{
    const expense={
        description:'rent',
        amount:109500,
        createdAt:1000,
        note:'My note'
    }
    const action=addExpense(expense)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expense,
        id:expect.any(String)
        }
    })
})

test('Should return the correct add action object when relied upon defaults',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            amount:0,
            createdAt:0,
            note:'',
            id:expect.any(String)

        }
    })
})