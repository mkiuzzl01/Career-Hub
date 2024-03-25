
const getJobApplication = ()=>{
    const getJob = localStorage.getItem('Job-Applications');
    if(getJob){
        return JSON.parse(getJob);
    }else{
        return [];
    }
}

const SaveJobApplication = id =>{
    const storedJobApplication = getJobApplication();
    const exists = storedJobApplication.find(jobID => jobID === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('Job-Applications',JSON.stringify(storedJobApplication))
    }

}

export {getJobApplication,SaveJobApplication};