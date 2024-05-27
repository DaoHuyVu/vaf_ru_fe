
import GroupBoardBody from './GroupBoardBody'
import Board from "./Board";
export default function GroupBoardContainer(props){
    return(
        <div className="BoardContainer">
        <h2>{props.title}</h2>
            <Board 
                labels = {props.labels}>
                <GroupBoardBody data = {props.data}/>
            </Board>
        </div>
    )
} 