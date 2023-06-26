import axios from './axios'

export const postBrand = async (title) => {
    try {
        const response = await axios.post('brand/createBrand', {
            title: title,
        })
        const { brand } = response.data

        return brand
    } catch (err) {
        console.log(err)
    }
}

export const removeBrand = async (id) => {
    try {
        await axios.delete('/brand/' + id)
    } catch (error) {
        console.log(error)
    }
}

export const postCustomer = async (name, phone, address) => {
    try {
        const response = await axios.post('/customer/createCustomer', {
            name,
            phoneNumber: phone,
            address,
        })
        const { customer } = response.data

        return customer
    } catch (error) {
        console.log(error)
    }
}
