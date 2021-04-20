import DisplayPlanter from "./DisplayPlanter"
export default function DisplayPlanters({planters}){
    return(
        <span>
            <ul>
                {planters.map((planter)=><li key ={planter.id}><DisplayPlanter planter={planter}/></li>)}
            </ul>
        </span>
    );
}