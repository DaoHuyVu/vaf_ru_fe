
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-dropdown-select';
import BoardWithTotal from "./BoardWithTotal";

export default function TopAthleteContainer(props){
    const selectOptions = Array(19).fill(null).map((_, index) => ({
        value: index,
        label: index === 0 ? 'All' : `Group ${index}`
    }));
    return(
        <div className="BoardContainer">
        <h2>{props.title}</h2>
            <div className="datePickerContainer">
            <ReactDatePicker
                    wrapperClassName="datePicker"
                    dateFormat="yyyy-MM-dd"
                    onChange={props.onDateChange}
                    selected = {props.date}
                />  
            <Select
                options={selectOptions}
                onChange={values => props.onGroupSelectChange(values[0].value)}
                searchable={false}
                closeOnClickInput={true}
                placeholder="All"
             />
            </div>
            
            <BoardWithTotal
                labels = {props.labels}
                data = {props.data}>
            </BoardWithTotal>
            
        </div>
    )
} 