# 🎥 StreamLite 🎥

StreamLite is your go-to hub for an immersive streaming experience. Built with love in React, our platform offers a seamless, highly performant user interface for all your video streaming needs.

## Introduction 🌐
StreamLite isn't just another streaming web app. Designed with React, it promises to deliver fast-loading video content from a live API. Whether you're in the mood for some trending videos, catchy music, or thrilling sports, we've got it all sorted under different categories for your convenience. And if you're looking for something specific? We've optimized our search function just for you!

## Table of Contents 📖
1. Features
2. Installation
3. Usage

## Features ✨
Here's what makes StreamLite stand out:

- **Responsive Design**: Ensuring a smooth experience on all devices, be it desktop, tablet, or mobile.
  
- **Live API Integration**: Dynamic content pulled from a reliable live API for the most up-to-date video streams.

- **Diverse Categories**: Easily find what you're looking for, thanks to our sorted video categories like home, trending, music, sports, etc.
  
- **Optimized Search**: A powerful search feature that fetches results in the blink of an eye.

- **Interactive Video Player**: Our player provides options like speed adjustment, quality selection, and full-screen mode.

## Installation 🔧
Follow these steps to get StreamLite up and running:

1. **Prerequisites**
   - Ensure you have [Node.js](https://nodejs.org/) installed.

2. **Clone the Repository**
   ```bash
   git clone https://github.com/iam-harshit/StreamLite.git
   ```
    
2. **Install Dependencies**:
    ```bash
    npm install
    ```
    
3. **Setup Environment Variables:**
   - Create a .env file in the root directory.
   - Goto [Rapid API](https://rapidapi.com/hub) and subscribe YouTube API.
   - Add your API key in **/src/utils/api.js**
     
4. **Run the App**:
    ```bash
    npm start
    ```

This will start the app in development mode. Open http://localhost:3000 to view it in the browser.

## Usage 🛠
- **Home Page** - Upon launching the app, you'll land on the home page showcasing a curated list of videos.
  
- **Trending** - Click on the 'Trending' tab to explore videos that are currently popular.
  
- **Music** - For music enthusiasts, the 'Music' tab houses a collection of various genres and moods. Dive in to discover more!
  
- **Search** - Got something particular in mind? Use the optimized search bar at the top. Just type in your query, hit enter, and let StreamLite fetch the relevant videos for you.
