import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlantsAction } from '../../redux/getAllPlants/getAllPlantsActions';
import DisplayPlantList from "./DisplayPlantList";

export default function GetAllPlants() {

    const response = useSelector(state=>{
        return(
            {
                plants: state.getAllPlants.plants, 
                errMsg: state.getAllPlants.error
            }
        );
    })

    const dispatch = useDispatch();

    const getAllPlants =()=>{
        dispatch(getAllPlantsAction());
    };

    useEffect(getAllPlants, []);

    return (
        <div>
            <h3>Get All Plants</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.plants ? (
                            <div>
                                <div className="alert alert-success">
                                    All Plants fetched successfully!
                                </div>
                                <div>
                                    <DisplayPlantList plants={response.plants} />
                                </div>
                            
                            </div>
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be successfull!
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}