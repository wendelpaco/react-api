import { http } from "./Api";


// get users
async function getUser(params) {
    try {
        const response = await http.post('login', params)
        const responseJson = response
        return responseJson.data;
    } catch (err) {
        return `Ocorreu um erro: ${err}`;
    }
}

//create users
async function createUsers(params) {
    try {
        const response = await http.post('signup', params)
        const responseJson = response
        return responseJson.data;
    } catch (err) {
        return `Ocorreu um erro: ${err}`;
    }
}
export { createUsers };
export { getUser };