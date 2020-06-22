import filterReducer from '../../Reducers/filterReducer';
import moment from 'moment'

const filter={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}


test('Should return the correct filter state when setting text filter',()=>{
    const action={
        type:'SET_TEXT_FILTER',
        text:'Yeah'
    }
    const result=filterReducer(filter,action)
   const filterExpected={
        
        ...filter,
        text:'Yeah' //This should come afterwards if it has to over ride.
    }
    expect(result).toEqual(filterExpected);
})

test('Should return the correct filter state when setting sortByAmount',()=>{
    const action={
        type:'SORT_BY_AMOUNT',
        sortBy:'Amount'
    }
    const result=filterReducer(filter,action)
   const filterExpected={
        
        ...filter,
        sortBy:'Amount' //This should come afterwards if it has to over ride.
    }
    expect(result).toEqual(filterExpected);
})

test('Should return the correct filter state when setting sortByDate',()=>{
    const action={
        type:'SORT_BY_DATE',
        sortBy:'Date'
    }
    const result=filterReducer(filter,action)
   const filterExpected={
        
        ...filter,
        sortBy:'Date' //This should come afterwards if it has to over ride.
    }
    expect(result).toEqual(filterExpected);
})

test('Should return the correct filter state when setting start Date',()=>{
    const action={
        type:'SET_START_DATE',
        startDate:0
    }
    const result=filterReducer(filter,action)
   const filterExpected={
        
        ...filter,
        startDate:0 //This should come afterwards if it has to over ride.
    }
    expect(result).toEqual(filterExpected);
})

test('Should return the correct filter state when setting end Date',()=>{
    const action={
        type:'SET_END_DATE',
        endDate:0
    }
    const result=filterReducer(filter,action)
   const filterExpected={
        
        ...filter,
        endDate:0 //This should come afterwards if it has to over ride.
    }
    expect(result).toEqual(filterExpected);
})


