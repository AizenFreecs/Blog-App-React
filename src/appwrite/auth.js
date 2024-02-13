import conf from "../config/config";
import { useDispatch } from "react-redux";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  isLoggedIn = false
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
    this.isLoggedIn = !!localStorage.getItem("appwriteLoginToken")

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
      const session = await this.account.createEmailSession(email, password);
      if (session) {
        localStorage.setItem("appwriteLoginToken", session.$id)
        this.isLoggedIn = true;
        return session
      }
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
      await this.account.deleteSessions()
      localStorage.removeItem("appwriteLoginToken")
      this.isLoggedIn =false
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
