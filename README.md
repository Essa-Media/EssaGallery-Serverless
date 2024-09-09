# EssaGallery-Serverless
EssaGallery-Serverless is a backend serverless application for the Essa Gallery project. It is designed to run on Netlify's serverless functions and manage various backend functionalities for the gallery.

## Usage
### Endpoint
#### **GET** `/api/gallery/getall/{guildId}`
#### Descriptions
This return all media for a specified guild.
#### Response
`200 OK`: Successfully retrieved the media list for the specified guild.
```
{
 "statusCode": 200,
 "message": "Success get Guild Gallery",
 "data": [Media1, Media2...]
}
```

`400 Bad Request`: Invalid request format.

`404 Not Found`: No media found for the specified guild.


## Tech stack
- **Redis** (In-memory data structure store used for caching and managing data)
- **Netlify Functions** (Serverless functions provided by Netlify for running backend code.)

## Feature
- Utilizes Netlify serverless functions for backend logic.
- Integrates with Redis for data storage.

## Installation
1. Clone this repo, and install packages
```bash
git clone https://github.com/Essa-Media/EssaGallery-Serverless.git
cd EssaGallery-Serverless
npm i -g yarn
yarn install
```

2. create and setup .env file
```
REDIS_URI="YOUR_REDIS_URI"
```
## Scripts
### Development 
```
yarn run dev
```
