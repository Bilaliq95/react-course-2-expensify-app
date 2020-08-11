import React from 'react';
import {connect} from 'react-redux';
import{setTextFilter} from '../Actions/filter'
import{SortByAmount,SortByDate,SetStartDate,SetEndDate} from '../Actions/filter'
import {DateRangePicker} from 'react-dates'



export class ExpenseListFilter extends React.Component{

state={
    calendarFocused:null    
};
onDatesChange=({startDate,endDate})=>{
this.props.SetStartDate(startDate)
this.props.SetEndDate(endDate)
};


onFocusChange=(calendarFocused)=>{
this.setState(()=>{
    return{
        calendarFocused:calendarFocused
    }
})
}

onTextChange=(e)=>{
    
this.props.setTextFilter(e.target.value);
    
}

onSortChange=(e)=>{
    if (e.target.value==='amount')
    {
        this.props.SortByAmount()   
    } 
    else {

            this.props.SortByDate()
    }
}

render(){
   return  (
       <div className="content-container">

           <div className="input-group">
               <div className="input-group__item">
                   <input type='text' className="text-input" placeholder="Search Expenses" value={this.props.filters.text} onChange={this.onTextChange}></input>
               </div>
               <div className="input-group__item">
                   <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                       <option value='amount'>Amount</option>
                       <option value='date'>Date</option>
                   </select>
               </div>
               <div className="input-group__item">
                   <DateRangePicker startDate={this.props.filters.startDate}
                       endDate={this.props.filters.endDate}
                       onDatesChange={this.onDatesChange}
                       focusedInput={this.state.calendarFocused}
                       onFocusChange={this.onFocusChange}
                       numberOfMonths={1}
                       isOutsideRange={() => false}
                       showClearDates={true}
                   />
               </div>
           </div>
       </div>
    )
}

}

const mapStateToProps=(state)=>{
return{
    filters:state.filters
    
}
}

const mapDispatchToProps=(dispatch)=>({
     setTextFilter:(text)=>(dispatch(setTextFilter(text))),
     SortByAmount:()=>(dispatch(SortByAmount())),
     SortByDate:()=>(dispatch(SortByDate())),
     SetStartDate:(startDate)=>(dispatch(SetStartDate(startDate))),
     SetEndDate:(endDate)=>(dispatch(SetEndDate(endDate)))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter)