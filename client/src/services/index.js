import axios from './axios'

const user = JSON.parse(localStorage.getItem('user')) || null

const config = {
    headers: {
        Authorization: 'Bearer ' + user?.token,
        'Content-Type': 'application/json',
    },
}

// create a new brand
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

// remove brand
export const removeBrand = async (id) => {
    try {
        await axios.delete('/brand/delete-brand/' + id, config)
    } catch (error) {
        console.log(error)
    }
}

// create new customer
export const createNewCustomer = async (values) => {
    try {
        const response = await axios.post('/customer/createCustomer', {
            name: values.customerName,
            phoneNumber: values.phoneNumber,
            address: values.customerAddress,
        })
        const { customer } = response.data

        return customer
    } catch (error) {
        console.log(error)
    }
}

// remove customer from the customer list
export const removeCustomer = async (id) => {
    try {
        await axios.delete('/customer/' + id)
    } catch (error) {
        console.log(error)
    }
}

// login user
export const login = async (data) => {
    try {
        const response = await axios.post('/auth/login', data)
        if (response?.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}
