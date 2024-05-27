export function padZero(num){
    return num >= 10 ? `${num}` : `0${num}` 
}
export function getPace(data){
    const paceKm = (data.totalTime !== 0 && data.distance !== 0 ? data.totalTime/(data.distance/1000.0)/60 : 0)
    const paceMinute = Math.floor(paceKm)
    const paceSecond = Math.floor((paceKm-paceMinute)*60)
    return `${padZero(paceMinute)}:${padZero(paceSecond)}`    
}