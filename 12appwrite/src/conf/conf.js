const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL, // ✅ lowercase "w"
  appwriteProjectId: import.meta.env.VITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_DATABASE_ID,
  appwriteCollectionId: import.meta.env.VITE_COLLECTION_ID,
  appwriteBucketId: import.meta.env.VITE_BUCKET_ID,
};

console.log("Appwrite URL in conf:", conf.appwriteUrl);

export default conf;
