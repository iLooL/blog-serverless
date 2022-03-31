const getCurrentDate = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
        
    return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
}

const sortByDate = (posts) => {
    // sort date by descending order
    return posts.sort((a, b) => (a.date > b.date) ? -1 : 1);;
}

export { getCurrentDate, sortByDate };