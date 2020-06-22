import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';


test('Should render the expense form correctly',()=>{
const wrapper=shallow(<ExpenseForm/>)
expect(wrapper).toMatchSnapshot();
})

test('Should render the expense form correctly with an expense',()=>{
    const wrapper=shallow(<ExpenseForm editExpenseProp={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
    })

    test('Should render the error correctly for invalid form submission',()=>{
        const wrapper=shallow(<ExpenseForm />)
        expect(wrapper).toMatchSnapshot();
        wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
        });
expect(wrapper.state('error').length).toBeGreaterThan(0);
expect(wrapper).toMatchSnapshot();
        })    

test('Should set the description on input change',()=>{
            const value="New description";
            const wrapper=shallow(<ExpenseForm />)
            wrapper.find('input').at(0).simulate('change',{
                target:{value}
            });
    expect(wrapper.state('description')).toBe(value);
            })    



            test('Should set the note on input change',()=>{
                const value="New Note";
                const wrapper=shallow(<ExpenseForm />)
                wrapper.find('textarea').at(0).simulate('change',{
                    target:{value}
                });
        expect(wrapper.state('note')).toBe(value);
                })  
                
                test('Should set the amount on input change',()=>{
                    const value='23.75';
                    const wrapper=shallow(<ExpenseForm />)
                    wrapper.find('input').at(1).simulate('change',{
                        target:{value}
                    });
            expect(wrapper.state('amount')).toBe(value);
                    })       
    
                    test('Should not set the amount on input change on invalid value',()=>{
                        const value='12.222';
                        const wrapper=shallow(<ExpenseForm />)
                        wrapper.find('input').at(1).simulate('change',{
                            target:{value}
                        });
                expect(wrapper.state('amount')).toBe('');
                        })   
                        
                        
test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm editExpenseProp={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt

    });
})    

test('should set new date on date change',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
})


test('should toggle on focus change',()=>{
    const focused=true;
    const wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(true);
})

        