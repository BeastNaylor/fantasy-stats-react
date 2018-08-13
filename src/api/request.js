import axios from 'axios'
import {API_SERVER} from '../constants/api'

const request = url => axios(API_SERVER + url)

export default request
