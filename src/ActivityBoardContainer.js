
import ActivityBoardBody from "./ActivityBoardBody";
import Board from "./Board";
export default function ActivityBoardContainer(props){
    return(
        <div className="BoardContainer">
        <h2>{props.title}</h2>
            <Board 
                labels = {props.labels}>
                <ActivityBoardBody data = {props.data}/>
            </Board>
        </div>
    )
} 