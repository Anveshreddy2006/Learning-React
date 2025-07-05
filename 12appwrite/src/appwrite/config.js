import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query }
    from "appwrite";

export class Service {
    client = new Client();
    databases;
    buckets;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.buckets = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )
            return true;
        }
        catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getpost :: error", error);
            return false;
        }
    }

    async getPots(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getposts :: error", error);
            return false;
        }
    }

    //file upload servicess

    async uploadFile(file) {
        try {
            return await this.buckets.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: fileupload :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.buckets.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: fileupload :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.buckets.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        )
    }
}
const service = new Service();
export default service;