export const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    }
    }
    
    export const SortByDate=()=>{
        return{
            type:'SORT_BY_DATE'
        }
    }
    
    export const SortByAmount=()=>{
        return{
            type:'SORT_BY_AMOUNT'
        }
    }
    
    export const SetStartDate=(startDate=undefined)=>{
        return{
            type:'SET_START_DATE',
            startDate
        }
    }
    
    export const SetEndDate=(endDate=undefined)=>{
        return{
            type:'SET_END_DATE',
            endDate
        }
    }