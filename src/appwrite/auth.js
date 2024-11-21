import conf from '../conf/conf';
import { Client, Account, ID } from 'appwrite';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            console.log('Trying to login with email', email);
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log('Login successful', session);
            return session;
        } catch (error) {
            if (error.message.includes('Rate limit for the current endpoint has been exceeded')) {
                console.warn('Rate limit exceeded, retrying after delay...');
                await delay(8000); // Wait for 8 seconds before retrying
                return this.login({email, password});
        }
            console.error('Error logging in:', error);
            throw error;
    }
}

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: ", error)
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() :: ", error)
        }
    }
}

const authService = new AuthService()
export default authService