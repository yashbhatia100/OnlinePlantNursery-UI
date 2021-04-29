import React, { useState , useEffect} from 'react'
import DisplayOrder from './DisplayOrder';
import commonStyle from './commonStyle.module.css';
import {getOrderById}  from '../../service/OrderService';

export default function GetOrderById(props) {
    /*
    let mockCustomer={
        id:10,
        name: 'shiv',
        age:21,
        address: 'chennai'
      };
      */
    const bookingOrderIdRef = React.createRef();


    const intitalState = { order:undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(intitalState);

    

    const fetchOrderOnRender=()=>{
        const id=props.match.params.id;// fetching id from parameter     
        const promise=  getOrderById(id);
        const successFun=(response)=>{
        const newState={...currentState, order:response.data};
            setNewState(newState);
        };
         const errFun=(error)=>{
           const newState={...currentState, errMsg:error.message};
            setNewState(newState);
         };

         promise.then(successFun).catch(errFun);

    }

     useEffect(fetchOrderOnRender);

     const setFieldState = () => {
        const idValue = bookingOrderIdRef.current.value;
        const newState = { ...currentState, bookingOrderId: idValue, order: undefined, errMsg:undefined };
        setNewState(newState);
    }
    

    return (
        <div>
            <h1> Get Order Details</h1>
           


            {currentState.order ? (
                <div>
                    <DisplayOrder order={currentState.order} />
                </div>
            ) : ''}


            {
                currentState.errMsg ? (

                    <div className={commonStyle.error}>
                        Request processing unsuccessful
                        <br />
                        {currentState.errMsg}

                    </div>
                ) : ''

            }
        </div>

    );

}