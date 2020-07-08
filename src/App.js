import React, {useState} from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const initialVals = [
  {id: uuid(), charge: 'rent', amount: 500},
  {id: uuid(), charge: 'car', amount: 800},
  {id: uuid(), charge: 'book', amount: 1200}
]

function App() {
  //STATES
  //Expenses array, list state
  const [expenses, setExpenses] = useState(initialVals);
  //Charge state
  const [charge, setCharge] = useState('');
  //Amount state
  const [amount, setAmount] = useState('');
  //Edit state
  const [edit, setEdit] = useState(false)
  //Id state
  const [id, setId] = useState('')
  //Alert state
  const [alert, setAlert] = useState({state:false})
  
  //FUNCTIONALITY
  const handleCharge = (e) => {setCharge(e.target.value); }

  const handleAmount = (e) => {setAmount(e.target.value); }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(charge && amount) {
      if(!edit) {
        const newExpense = { id: uuid(), charge, amount};
        setExpenses([...expenses, newExpense]);
        handleAlert({type: 'success', text: 'item added'});
      } else {
        const editedItem = expenses.map(item => { return item.id === id ? {...item,charge,amount} : item });
        setExpenses(editedItem);
        handleAlert({type: 'success', text: 'item edited'});
      }
      setAmount('');
      setCharge('');
      setEdit(false);
    } else {
      handleAlert({type: 'danger', text: 'All fields must be filled...'});
    }
  }

  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: 'danger', text: 'all items deleted'});
  }

  const deleteItem = (id) => {
    const newExpenses = expenses.filter(item => item.id !== id);
    setExpenses(newExpenses);
    handleAlert({type: 'danger', text: 'item deleted'});
  }

  const editItem = (id) => {
    let editItem = expenses.find(item => item.id === id);
    let {amount, charge} = editItem;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  const handleAlert = ({type,text}) => {
    setAlert({state:true,type, text});
    setTimeout(() => {
      setAlert({state:false})
    }, 2000);
  }

  return (
    <>
      {alert.state && <Alert alert={alert}/>}
      <h1>Budget Calculator</h1>
      
      <div className='App'>

        <ExpenseForm 
        charge={charge} 
        amount={amount} 
        edit={edit} 
        handleSubmit={handleSubmit} 
        handleCharge={handleCharge} 
        handleAmount={handleAmount}/>

        <ExpenseList 
        expenses={expenses} 
        clearItems={clearItems} 
        deleteItem={deleteItem} 
        editItem={editItem}/>

        <h1 className='total'>Total €{expenses.reduce((acc,curr) => acc += parseInt(curr.amount),0)}</h1>  

      </div>
    </>
  );
}

export default App;
