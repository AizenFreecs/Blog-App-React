import conf from "../config/config";
import { useDispatch } from "react-redux";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);

  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
    }
    
  }

  async logout() {
    try {
      return await this.account.deleteSessions()
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
