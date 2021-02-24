import { get, post, upload } from './index'

export const register = params => post('/user/register', params)

export const login = params => post('/user/login', params)

export const queryUserList = () => get('/user/getUserList')

export const uploadFile = params => upload('/upload', params)