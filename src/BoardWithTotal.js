import ActivityBoardBody from "./ActivityBoardBody"
import { getPace } from "./util"

export default function BoardWithTotal({labels,data}){
    const athletesLabels = labels.map((label,index) => <th key={index}>{label}</th>)
    let distance = 0 , pace = 0 , totalTime = 0 
    data.forEach(activity => {
        distance += activity.distance
        totalTime += activity.totalTime
    })
    pace = getPace({distance,totalTime})
    return(
        <div className="Board">
            <table>
            <thead>
                <tr>{athletesLabels}</tr>
            </thead>
            <ActivityBoardBody data = {data} />
            <tfoot>
                <tr>
                    <td >Total </td>
                    <td></td>
                    <td>{distance.toFixed(1)}</td>
                    <td>{pace}</td>
                    <td>{totalTime}</td>
                </tr>
            </tfoot>      
            </table>
        </div>
    )
}
