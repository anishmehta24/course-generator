# Course Generator Website

This web application generates customized courses based on user recommendations. It dynamically creates a course layout with chapters and content, allowing users to modify the structure before finalizing the course. The app integrates with both the YouTube API to fetch relevant videos for each chapter and the Gemini API to generate content.

## Features

- **Personalized Course Creation**: Users provide preferences and recommendations, which the app uses to generate a course layout with chapters.
- **Editable Course Structure**: Once the course layout is generated, users can make modifications to chapters, reorder content, or add/remove sections.
- **YouTube API Integration**: The app fetches relevant videos for each chapter using the YouTube API.
- **Dynamic Chapter Content**: Each chapter contains automatically generated content , code examples (if required) and videos based on user preferences.

## Tech Stack

- **Frontend**: Next.js
- **Database**: PostgreSQL
- **External APIs**: 
  - YouTube API (for fetching videos)
  - Gemini API (for generating chapter content)

