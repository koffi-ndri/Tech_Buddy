# Tech_Buddy
An API for uploading and retrieving images and videos

# About
This project is an API (Application Programming Interface) that will allow a user to upload and retrieve assets (images and videos) to and from a content management platform named Cloudinary respectively.

# Description
During uploading, the assets are first stored in a folder named public/imageUpload for images or public/videoUpload (not visible on github because they are empty folders) for videos. Then, these assets are transfered from the folders to the Cloudinary content management platform.

Tech Buddy API consists of eight endpoints:

- /api/register: used to register a user
- /api/login: used for user login
- /api/singleImageUpload: used to upload a single image
- /api/multipleImagesUpload: used to upload multiple images
- /api/singleVideoUpload: used to upload a single video
- /api/multipleVideosUpload: used to upload multiple videos
- /api/retrieveImages: used to retrieve images from Cloudinary
- /api/retrieveVideos: used to retrieve videos from Cloudinary
