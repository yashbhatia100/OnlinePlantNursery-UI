import React , {useState} from 'react';
import DisplayOrder from './DisplayOrder';



export default function GetOrderById(){
   
    let order={
        bookingOrderId: 1,
        transactionMode: "Square",
        quantity: 10,
        totalCost: 207,
        planterId: 1,
      };
     
    const idRef=React.createRef();

    let [state,setNewState]=useState({id:undefined, order:order, errMsg:undefined});

    const setIdHandler=()=>{
        console.log("Inside setIdHandler");
         let field=idRef.current;
         let fieldValue=field.value;
         let newState={...state,id:fieldValue, seed:undefined , errMsg:undefined};
         setNewState(newState);
    };

    const submitHandler=(event)=>{
       console.log("Inside submitHandler");
       event.preventDefault();
       let newState={...state,seed:undefined,errMsg:"order not found"};
       setNewState(newState);
       //console.log("current state",newState);
           
    };

    return (

        <div>
            <h3>Get order details</h3>

            <form onSubmit={(event) => submitHandler(event)}>
                <div>
                    <label>Enter Order booking Id </label>
                    <input name="Order Booking Id" type="number" ref={idRef} onChange={() => setIdHandler()} />
                </div>

                <button> Get Order</button>
            </form>

            {state.order ? (

                <div>
                    <h3>order Details </h3>
                    <DisplayOrder order={state.order} />
                </div>

            ) : ''}


            {state.errMsg ? (
                <div >
                Request is not successful
                <br/>
                
                 {state.errMsg}
                </div>

            ) : ''}

        </div>

    );

}