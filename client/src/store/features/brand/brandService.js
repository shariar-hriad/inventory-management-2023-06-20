import axios from 'axios'
import { baseUrl } from '../../../utils'
import { config } from '../../../utils/axiosConfig'

export const gerBrands = async () => {
    const response = await axios.get(`${baseUrl}brand/getBrands`, config)

    return response.data
}
