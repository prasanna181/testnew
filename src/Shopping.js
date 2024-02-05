import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'
import { act } from 'react-dom/test-utils'
const Shopping = () => {

const dispatch=useDispatch();
const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);
  return (
   
    <div>
    Deposit/withdraw money
      <button className="btn-primary" onClick={()=>(depositMoney(100))}>+</button>
      Add this item to cart
      <button className="btn-primary" onClick={()=>(withdrawMoney(100))}>-</button>
    </div>

  )
}

export default Shopping