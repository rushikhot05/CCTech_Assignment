# CCTech_Assignment


This is the assignment submission for CCTech Full Stack Developer Opening 2020.

To run the project on local environment: Clone the project and run command "npm run dev" in the directory. 

Features of the assignment: 

The assignment is simple image gallery where user can upload the images and can see the latest three images on the same screen. 
For this assignment, I have used MERN Stack, where MongoDB to store the image urls and React for front-end part. 

Flow of the project: 

1. On opening the project, you can see latest threee images there. 
2. On clicking choose file button, you can select image from your local directories. 
3. After selecting image and clicking upload button, that image gets stored on Cloudinary Cloud and gets assigned with one URL. 
4. On refreshing, you can see new uploaded image at first place, and other two images shifting forward. To show the images, I am storing those URLs in MongoDB Databse.
5. Those stored images are getting displayed here and I have set query limit to three as we want to see only three latest images. 

