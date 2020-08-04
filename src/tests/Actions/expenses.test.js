//yarn test -- --watch



import {startAddExpense,addExpense,removeExpense,editExpense} from '../../Actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'



const createMockStore=configureMockStore([thunk]);

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
    const action=addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
})

test('should add expense to database and store',(done)=>{
    const store=createMockStore({});
    const expenseData={
        description:'Mouse',
        amount:3000,
        note:'This one is better',
        createdAt:1000
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{
         const actions=store.getActions();
         expect(actions[0]).toEqual({
            type:'ADD_EXPENSE', 
            expense:{
                     id:expect.any(String),
                     ...expenseData                 
                        }
         });
         database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
         });
    });

})

test('should add default expense to database and store',(done)=>{
    const store=createMockStore({});
    const expenseData={
        description:'',
        amount:0,
        note:'',
        createdAt:0
    };

    store.dispatch(startAddExpense(expenseData)).then(()=>{
         const actions=store.getActions();
         expect(actions[0]).toEqual({
            type:'ADD_EXPENSE', 
            expense:{
                     id:expect.any(String),
                     ...expenseData                 
                        }
         });
         database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
         });
    });

})

// test('Should return the correct add action object when relied upon defaults',()=>{
//     const action=addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description:'',
//             amount:0,
//             createdAt:0,
//             note:'',
//             id:expect.any(String)

//         }
//     })
// })