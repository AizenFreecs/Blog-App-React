import conf from "../config/config";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
        }

    async createPost({title,slug,content,featuredImage,status,userId,createdOn,author}){
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title,content,featuredImage,status,userId,createdOn,author}
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost({title,slug,content,featuredImage,status,userId,createdOn,author}){
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title,content,featuredImage,status,userId,createdOn,author}
            )
        } catch (error) {
            throw error
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false 
        }
        
    }
    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            )
        } catch (error) {
            throw error
            return false 
        }
    }
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    } 
    
    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.bucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Service :: deleteFile:: error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
    }
 }


const appwriteService = new Service()
export default appwriteService