
import { useEffect, useState } from 'react';
import './App.css';
import axios from './Axios'
import ActivityBoardContainer from './ActivityBoardContainer'
import "react-datepicker/dist/react-datepicker.css";
import formatDate from './dateUtil';
import TopAthleteContainer from './TopAthleteContainer';
import GroupBoardContainer from './GroupBoardContainer';
import {padZero} from './util'
function App() {
  const athletesLabels = ['STT','Name','Distance (m)','Pace','Total time (s)']
  const groupLabels = ['STT','Group','Distance (m)','Pace','Total time (s)']
  const [activities,setActivities] = useState([])
  const [groups,setGroups] = useState(Array(18).fill(null).map(() => []))
  const [date,setDate] = useState(formatDate(new Date()))
  const [topDayActivities,setTopDayActivities] = useState([])
  const handleDateChange = date => setDate(formatDate(date))
  const [selectedGroup,setSelectedGroup] = useState(0)
  
  
  useEffect(() => {
    async function fetchTopActivities(){
      try{
        const response = await axios.get("athletes/activity",{params : {date : date}}) 
        setTopDayActivities(response.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchTopActivities()
  },[date])

  useEffect(() => {
    async function fetchAthletes(){
      try{
        const athletesResponse = await axios.get("athletes")
        const athletes = athletesResponse.data
        const activityPromise = athletes.map(async athlete => {
          const response = await axios.get(`athletes/${athlete.name}/activity`)
          const activity = response.data
          const group = athlete.groupId
          return { activity , group}
        })
        const data = await Promise.all(activityPromise)
        
        const activitiesData = []
        const newGroups = Array(18).fill(null).map(() => [])
        data.forEach(({activity,group}) => {
            activitiesData.push(activity)
            newGroups[group-1].push(activity)
        })
        setActivities(activitiesData)
        setGroups(newGroups)
      }catch(err){
        console.log(err)
      }
    }
    fetchAthletes()
  },[])

  const groupProp = groups.map((group) => {
      let distance = 0
      let totalTime = 0
      group.forEach((groupActivity) => {
        distance += groupActivity.distance
        totalTime += groupActivity.totalTime
      })

      const paceKm = (totalTime !== 0 && distance !== 0 ? totalTime/(distance/1000.0)/60 : 0)
      const paceMinute = Math.floor(paceKm)
      const paceSecond = Math.floor((paceKm-paceMinute)*60)
      const avgPace = `${padZero(paceMinute)}:${padZero(paceSecond)}`
      
      distance = distance.toFixed(1)
      return {distance,totalTime,avgPace}
  })
  function handleGroupSelectChange(value){
    setSelectedGroup(value)
  }
  const topDayActivitiesFiltered = selectedGroup === 0 ? 
  topDayActivities : topDayActivities.filter(activity => activity.groupId === selectedGroup)
    return (
    <div className="App">
      <TopAthleteContainer 
        date = {date}
        onDateChange = {handleDateChange}
        title = "Top Athletes" 
        labels = {athletesLabels} 
        data = {topDayActivitiesFiltered} 
        onGroupSelectChange = {handleGroupSelectChange}
      />
      <ActivityBoardContainer title = "Athlete Leaderboard" labels = {athletesLabels} data = {activities}/>
      <GroupBoardContainer title = "Group Leaderboard" labels = {groupLabels} data = {groupProp}/>
    </div>
  )
  
}

export default App;

