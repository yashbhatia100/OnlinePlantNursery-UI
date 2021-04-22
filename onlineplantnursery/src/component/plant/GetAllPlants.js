import commonStyle from './commonStyle.module.css';
import DisplayPlantList from "./DisplayPlantList";

export default function GetAllPlants() {

    let plant1 = {
        plantHeight: 100,
        plantSpread: "2m",
        commonName: "Rose",
        bloomTime: "2 months",
        plantUse: "decoration",
        difficultyLevel: "easy",
        temperature: "25 deg",
        typeOfPlant: "herb",
        plantDescription: "red flowers",
        plantStock: 10,
        plantCost: 50
    }
    let plant2 = {
        plantHeight: 50,
        plantSpread: "1m",
        commonName: "Lily",
        bloomTime: "4 months",
        plantUse: "NA",
        difficultyLevel: "difficult",
        temperature: "30 deg",
        typeOfPlant: "herb",
        plantDescription: "fragrant flowers",
        plantStock: 30,
        plantCost: 70
    }
    let plantList = [plant1, plant2]

    const response = {plants: plantList, errMsg: undefined }

    return (
        <div>
            <h3>Get All Plants</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.plants ? (
                            <DisplayPlantList plants={response.plants} />
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be successfull
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}