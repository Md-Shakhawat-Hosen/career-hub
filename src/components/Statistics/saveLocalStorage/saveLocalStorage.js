
const getDataFromLocalStorage = () =>{
    const storedLocalStorage = localStorage.getItem('job-application');

    if (storedLocalStorage) {
        return JSON.parse(storedLocalStorage)
    }
    return []
}



const saveJobApplication = id => {
    const storedApplication = getDataFromLocalStorage();
    const exists = storedApplication.find(job => job === id);

    if (!exists) {
        storedApplication.push(id)
        localStorage.setItem('job-application',JSON.stringify(storedApplication))
    }
}


export default saveJobApplication;