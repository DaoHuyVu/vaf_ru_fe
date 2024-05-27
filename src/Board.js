
function Board({labels,children}){
    const athletesLabels = labels.map((label,index) => <th key={index}>{label}</th>)
    return(
        <div className="Board">
            <table>
            <thead>
                <tr>{athletesLabels}</tr>
            </thead>
            {children}       
            </table>
        </div>
    )
}
export default Board;