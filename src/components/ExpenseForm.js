import React from 'react';
import moment from 'moment'; 
import {SingleDatePicker} from 'react-dates';





 class ExpenseForm extends React.Component{


extractProps=()=>{

    if(this.props.editExpenseProp===undefined)
    {
            
        return{    
                description:'',
                 note:'',
                amount:'',
              createdAt:moment(),
               calendarFocused:false,
                error:undefined
         }
    }
        
    else
    {
         
        return {
           
               ...this.props.editExpenseProp,  
                 error:undefined,
               calendarFocused:false,
                createdAt:moment(this.props.editExpenseProp.createdAt),
                amount: (this.props.editExpenseProp.amount/100).toString()
            
            }

    }
}



state=this.extractProps();

    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>{
            return{
                description:description
            }
        })
    }
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>{
            return{
                note:note
            }
        })
    }
    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
        {
            this.setState(()=>{
                return {
                    amount:amount
                }
            })
        }
    }

    onDateChange=(createdAt)=>{
        
       if(createdAt){
        this.setState(()=>{
            return {
                createdAt:createdAt
        }})
    }
            
     }
    onFocusChange=({focused})=>{
        this.setState(()=>{
               return{
             calendarFocused:focused
            }
        })
    }
     
render(){
    return(
       
       
       
        <form className="form" onSubmit={(e)=>{
            e.preventDefault();
          if(!this.state.description || !this.state.amount)
          {
            this.setState(()=>{
                return{
                    error:'Amount and Description are mandatory fields.'
                }
            })
          }
          else{

            this.setState(()=>{
                return{
                    error:''
                }
            })

            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
            {

            }
          }
        }}>
        <p className="form__error">{this.state.error}</p>
        <input
        type='text'
        placeholder='Description'
        autoFocus
        className="text-input"
        value={this.state.description}
        onChange={this.onDescriptionChange }>
        </input>
        <input
        type='text'
        className="text-input"
        placeholder='Amount'
        value={this.state.amount}
        onChange={this.onAmountChange}
        ></input>
        <SingleDatePicker 
        date={this.state.createdAt}                               //where you want to start
        onDateChange={this.onDateChange} //called with above prop
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={()=>false}
        
        />
        <textarea placeholder='Add a note for your expense(optional)'
        value={this.state.note}
        className="textarea"
        onChange={this.onNoteChange }>
        </textarea>
        <div>
        <button className="button" >Save Expense</button>
        </div>
        </form>
        

    )
}
}


export default ExpenseForm


//Why are we using state here???
//The idea here is to keep the track of what user enters into the boxes and do something meaningful with it as the user presses add expense button
//It is still unclear why do we need a state at all.