import axios from 'axios'

async function login(username, password) {
    try {
        const { data } = await axios.post("http://localhost:9999/api/v1/auth/signin", { username, password })

        if (!data) throw new Error()

        return {
            accessToken: data.accessToken
        }
    } catch (error) {
        return {
            accessToken: null
        }
    }
}

async function newAccount(accountData) {
    try {
        const { data } = await axios.post("http://localhost:9999/api/v1/auth/signupuser", accountData)

        if (!data) throw new Error()

        return data
    } catch (error) {
        return null
    }
}

async function newEmployee(accountId, accountData) {
    try {
        const { data } = await axios.post(`http://localhost:9999/api/v1/auth/signupemployee/${accountId}`, accountData)

        if (!data) throw new Error()

        return data
    } catch (error) {
        return null
    }
}

async function getUser() {
    try {
        const { data } = await axios.get("http://localhost:9999/api/v1/accounts/information")
        if (!data) throw new Error()

        return data
    } catch (error) {
        return null
    }
}

async function getRoles() {
    try {
        const { data } = await axios.get("http://localhost:9999/api/v1/roles")
        if (!data) throw new Error()

        return data
    } catch (error) {
        return []
    }
}

export {
    login,
    getUser,
    getRoles,
    newAccount,
    newEmployee
}