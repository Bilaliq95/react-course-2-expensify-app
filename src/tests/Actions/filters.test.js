import {setTextFilter,SortByDate,SortByAmount,SetStartDate,SetEndDate} from '../../Actions/filter';

test('Should return the correct set text filter action object',()=>{
    const action=setTextFilter('BLAH');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'BLAH'
    });
})

test('Should return the correct Sort By Date filter action object',()=>{
    const action=SortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
})

test('Should return the correct Sort By Amount filter action object',()=>{
    const action=SortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    });
})

test('Should return the correct setStartDate filter action object',()=>{
    const action=SetStartDate('1000');
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:'1000'
    });
})

test('Should return the correct setEndDate filter action object',()=>{
    const action=SetEndDate('1000');
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:'1000'
    });
})