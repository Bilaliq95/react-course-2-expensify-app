import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter'
import {filters,altFilters} from '../fixtures/filters'
import moment from 'moment'



let wrapper,setTextFilter,SortByDate,SortByAmount,SetStartDate,SetEndDate;

beforeEach(()=>{
    setTextFilter=jest.fn();
    SortByAmount=jest.fn();
    SortByDate=jest.fn();
    SetStartDate=jest.fn();
    SetEndDate=jest.fn();
    wrapper=shallow(<ExpenseListFilter
     filters={filters}
     setTextFilter={setTextFilter}
     SortByAmount={SortByAmount}
     SortByDate={SortByDate}
     SetStartDate={SetStartDate}
     SetEndDate={SetEndDate}   
        />)
})
test('should render correct expense filter',()=>{
expect(wrapper).toMatchSnapshot();
})

test('should render correct expense filter with alt data',()=>{
    wrapper.setProps({
        filters:altFilters
    })    
    expect(wrapper).toMatchSnapshot();
    })

 //Should handle text change
 
 test('Should handle text change filter',()=>{
     const value='My Text';
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });
expect(setTextFilter).toHaveBeenLastCalledWith(value);
}) 

test('Should handle sort By Date',()=>{
    const value='date';
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    });
expect(SortByDate).toHaveBeenCalled();
})


test('Should handle sort By Amount',()=>{
    const value='amount';
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{value}
    });
expect(SortByAmount).toHaveBeenCalled();
})


test('Should handle date changes',()=>{
    const startDate=moment(0).add(4,'years');
    const endDate=moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(SetStartDate).toHaveBeenLastCalledWith(startDate);
    expect(SetEndDate).toHaveBeenLastCalledWith(endDate);
})

test ('Should handle focus date change',()=>{
const caledndarFocused='endDate';
wrapper.find('DateRangePicker').prop('onFocusChange')(caledndarFocused);
expect(wrapper.state('calendarFocused')).toBe(caledndarFocused);


})
    
 