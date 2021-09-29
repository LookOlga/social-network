import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0283ad88-0b5d-4502-b0e0-83f1356d4474"
    }
});


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status `, {status: status}).then(response => response.data);
    },
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`, {}).then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {}, {}).then(response => response.data);
    }
}

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    logIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logOut() {
        return instance.delete('auth/login').then(response => response.data);
    }
}