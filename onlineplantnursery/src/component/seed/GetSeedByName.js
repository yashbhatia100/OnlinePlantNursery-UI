import React , {useEffect} from 'react';
import DisplaySeedDetails from './DisplaySeedDetails';
import { useDispatch, useSelector } from "react-redux";
import  commonStyle from './commonStyle.module.css';
import { fetchSeedByCommonName } from "../../redux/fetchseedbyname/fetchSeedByNameAction";

export default function GetSeedByName(props){
  
    const currentState = useSelector( (state)=>{
        return{
          seed: state.fetchSeedByCommonName.seed,
          error:state.fetchSeedByCommonName.error
        };
    })
    
     const dispatch=useDispatch();
    
     const fetchSeedByNameOnRender=()=>{
       const name=props.match.params.commonName;
       console.log("inside fetch seed by name",name);
       dispatch(fetchSeedByCommonName(name));
       
     }
     useEffect(fetchSeedByNameOnRender,[]);

     return (
        <div>
            <h3> Get seed details</h3>
            <div className ='mt-5'> 
            {currentState.seed ? (
                <div>
                <DisplaySeedDetails seed={currentState.seed} />
                </div>
            ) : (
                ""
                )
            }
            {currentState.error ? (
                <div className = {commonStyle.error}>
                Request is not processing
                <br />
                {currentState.error}
                </div>
            ) : (
                ""

            )}
            
            </div>
        </div>
    );
}