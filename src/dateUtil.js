
export default function formatDate(date){
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2,'0')
    const dayOfMonth = String(date.getDate()).padStart(2,'0')
    return `${year}-${month}-${dayOfMonth}`
}
