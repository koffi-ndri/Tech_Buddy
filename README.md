# Tech_Buddy
An API for uploading and retrieving images and videos

# About
This project is an API (Application Programming Interface) that will allow a user to upload and retrieve assets (images and videos) to and from a content management platform named Cloudinary respectively.

# Description
During uploading, the assets are first stored in a folder named public/imageUpload for images or public/videoUpload for videos (these folders are not visible on github because they are empty folders). Then, these assets are transfered from the folders to the Cloudinary content management platform. When the assets are retrieved, the server sends a response that displays a list of images or videos URLs.

Tech Buddy API consists of eight endpoints:

- /api/register: used to register a user
- /api/login: used for user login
- /api/singleImageUpload: used to upload a single image
- /api/multipleImagesUpload: used to upload multiple images
- /api/singleVideoUpload: used to upload a single video
- /api/multipleVideosUpload: used to upload multiple videos
- /api/retrieveImages: used to retrieve images from Cloudinary
- /api/retrieveVideos: used to retrieve videos from Cloudinary

Each of the last six endpoints have their corresponding unit tests files and they are tested in case of success, of server error and of accessibility. These files are stored in a folder named test.

# Packages used

These are the packages used for this project:

- express
- cloudinary
- multer (for uploading assets to the application)
- mocha and chai (for unit test)
- mongoose (for mongodb database to store users data)
- joi (for validating users data)

# Installation

For the API to work, you just have to run this command witch is `npm install`.

# How to test the API

To test the API, we need to use an API client named Postman. To be able to test an authenticated endpoint, a user have to first login or register before signing in if that user doesn't exists. If not, the server will send a response that indicates that the user is trying to access an authenticated endpoint as it is shown in the following image:

![image](https://user-images.githubusercontent.com/87645176/172191416-c2b0bb00-286d-493f-a071-f88f80ab556e.png)

When a user logs in, a token is sent as a response from the server as we can see in the following image:

![image](https://user-images.githubusercontent.com/87645176/172192359-659377c6-6bb4-4d0e-b5d3-5b70c1de5ed6.png)

Then that token is used as a value of a key called `auth-token` in the request Headers. In that case, when a user wants to access an authenticated endpoint to retrieve the uploaded images for example, the server will send a response that displays the list of images urls.

![image](https://user-images.githubusercontent.com/87645176/172195727-b5c12937-3046-4a8d-9212-0365ff478ae2.png)


