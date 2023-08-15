import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": 'd349c53b-1d33-4f2e-b13f-ff5c17f90d1a'
  }

})

export const usersApi = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {},)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`,)
  },
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
}

export const authApi = {
  me() {
    return instance.get('auth/me')
  }
}
