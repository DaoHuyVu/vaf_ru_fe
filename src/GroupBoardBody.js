export default function GroupBoardBody({data}){
    const groups = data.map(
        (group,index) =>
            <tr key={index}>
                <th>{index+1}</th>
                <th>Group {index+1}</th>
                <th>{group.distance}</th>
                <th>{group.avgPace}</th>
                <th>{group.totalTime}</th>
            </tr>
        )
    return(
        <tbody>
            {groups}
        </tbody>
    )   
}