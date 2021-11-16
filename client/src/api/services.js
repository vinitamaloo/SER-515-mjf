import axios from 'axios';

const serverUrl = 'http://localhost:8080/'

export const getPostsData = () => { return axios.get("https://jsonplaceholder.typicode.com/posts") };

//export const getData = () => { return axios.get(serverUrl + 'userProfile/getData')};
export const postTeamData = (teamData) => { return axios.post(serverUrl + 'teamRegistration/add_teams', teamData)};
export const getUser = (user) => { return axios.post(serverUrl + 'admin/getUser', user)};
export const postReferee = (referee) => {
        return axios.post(serverUrl + 'referee/add_referee',referee); }
export const getRefereeList = (application) => {return axios.post(serverUrl + 'referee/get_all_in_progress',application);}
export const getRefereeInfo = (email) => {return axios.post(serverUrl + 'referee/particularreferee',email);}
export const setApplicationStatus = (refstatus) => {return axios.post(serverUrl + 'referee/updateappstatus', refstatus);}

export const getAcceptedList = () => {return axios.get(serverUrl + 'referee/get_accepted');}
export const getUnassignedFields = () => {return axios.get(serverUrl + 'field/get_unassigned_field');}
export const updateRefNameandEmail = (fields) => {
        // alert(fields.field+" "+fields.refereeName);
        return axios.post(serverUrl + 'field/update_refname',fields);}
        export const updateRefStatus = (fields) => {
                // alert("Submitted");
                return axios.post(serverUrl + 'referee/updaterefereestatus',fields);}


export const getTeamDateById = (teamId) => {return axios.get(serverUrl+"teamRegistration/get_team_data"+teamId);}
export const changeTeamStatus = (teamRegister) => {return axios.post(serverUrl+'teamRegistration/change_team_status', teamRegister);}
export const postSetScores = (setScores) => {
        return axios.post(serverUrl + 'setScores/add_set_scores',setScores);
}


export const getAllTeams = (teamRegister) => {return axios.get(serverUrl + 'teamRegistration/get_all_data', teamRegister);}

export const getSchedule = () =>{ return axios.get(serverUrl+ 'getSchedule');}

