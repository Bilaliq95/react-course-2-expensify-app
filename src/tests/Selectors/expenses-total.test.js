import moment from 'moment'
const { default: getExpensesTotal } = require("../../Selectors/expenses-total");

const expenses=[
    {
id:'1',
description:'Gum',
note:'',
amount:195,
createdAt:0

},

{
    id:'2',
    description:'Rent',
    note:'',
    amount:19500,
    createdAt:moment(0).subtract(4,'days').valueOf()
    
    },

    {
        id:'1',
        description:'Credit Card',
        note:'',
        amount:4500,
        createdAt:moment(0).add(4,'days').valueOf()
        
        }
];
test('Should display the sum of all expenses',()=>{
    const result=getExpensesTotal(expenses);
    expect(result).toEqual(expenses[0].amount+expenses[1].amount+expenses[2].amount)
})

test('Should display the sum of empty expenses array',()=>{
    const result=getExpensesTotal([]);
    expect(result).toEqual(0)
})

test('Should display the sum of single expense in array',()=>{
    const result=getExpensesTotal([expenses[0]]);
    expect(result).toEqual(195);
})