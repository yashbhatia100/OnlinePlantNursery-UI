export default function DisplayPlant({plant}){

    return(
        <div>
            <table className="table table-striped">
                <tr>
                    <th>Common Name</th>
                    <th>Plant Height</th>
                    <th>Plant Spread</th>
                    <th>Bloom Time</th>
                    <th>Medicinal or Culinary Use</th>
                    <th>Difficulty Level</th>
                    <th>Temperature</th>
                    <th>Type of Plant</th>
                    <th>Plant Description</th>
                    <th>Plant Stock</th>
                    <th>Plant Cost</th>
                </tr>
                <tr>
                    <td>{plant.commonName}</td>
                    <td>{plant.plantHeight}</td>
                    <td>{plant.plantSpread}</td>
                    <td>{plant.bloomTime}</td>
                    <td>{plant.plantUse}</td>
                    <td>{plant.difficultyLevel}</td>
                    <td>{plant.temperature}</td>
                    <td>{plant.typeOfPlant}</td>
                    <td>{plant.plantDescription}</td>
                    <td>{plant.plantStock}</td>
                    <td>{plant.plantCost}</td>
                </tr>
            </table>
        </div>
    );
}