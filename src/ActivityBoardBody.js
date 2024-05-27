
export default function ActivityBoardBody({data}){
    const activities = data.map(
        (activity,index) =>
            <tr key={index}>
                <th>{index+1}</th>
                <th>{activity.name}</th>
                <th>{activity.distance.toFixed(1)}</th>
                <th>{activity.avgPace}</th>
                <th>{activity.totalTime}</th>
            </tr>
        )
    return(
        <tbody>
            {activities}
        </tbody>
    )   
}