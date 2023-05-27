MEGA Cloud Simulation

![Main Page - 27 May 2023](https://github.com/AhmadSaleh2001/software-web-architecture/assets/79485253/b5f8c019-7b8a-4004-bb92-034a3b23c961)

This project is a web application that simulates the functionality of the MEGA cloud storage service. Users can create an unlimited number of files and organize them within a hierarchical structure. The application also allows for uploading images to specific folders.

Features:

- Unlimited File Creation: Users can create an arbitrary number of files and organize them in a hierarchical structure resembling folders.
- Folder Structure: The application supports a nested folder structure, allowing users to create folders inside other folders.
- Image Upload: Users can upload images to specific folders within the application.
- Node.js and Express: The project is built using Node.js and the Express framework, providing a robust and scalable backend for the application.
- Redis Caching: Redis is used for caching the path for each folder. Instead of traversing the entire folder structure to find the path from the root to a specific folder, the application leverages Redis to retrieve the path efficiently, resulting in improved performance.

Installation:

1. Navigate to the project directory:
   cd mega-cloud-simulation

2. Install the dependencies:
   npm install

3. Set up Redis:

   - Install Redis on your machine. You can download it from the official Redis website: https://redis.io/download
   - Start the Redis server.

4. Configure the application:

   - create database on mysql named filesystem

5. Start the application:
   npm start
   The application will be running on http://localhost:1212.

Usage:

1. Open your web browser and navigate to http://localhost:1212.
2. Explore the application by creating folders, organizing files, and uploading images to specific folders.

Contributing:
Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.
