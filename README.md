# Chatbot Platform

A Node.js-based chatbot platform that allows users to create and manage customizable AI-powered chatbots using OpenAI's models via OpenRouter. Users can define custom prompts for their projects and interact with the chatbots through a RESTful API.

## Features

- **User Authentication**: Secure user registration and login with JWT tokens.
- **Project Management**: Create, manage, and customize chatbot projects with unique prompts.
- **AI-Powered Chat**: Integrate with OpenAI models (Mistral-7B-Instruct) for intelligent responses.
- **RESTful API**: Clean and simple API endpoints for all operations.
- **MongoDB Integration**: Persistent storage for users, projects, and chat data.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chatbot-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/chatbot-platform
   OPENROUTER_API_KEY=your-openrouter-api-key-here
   JWT_SECRET=your-jwt-secret-here
   ```

4. Start MongoDB (if running locally):
   ```bash
   mongod
   ```

5. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000`.

## Usage

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
  - Body: `{ "email": "user@example.com", "password": "password" }`
- `POST /api/auth/login` - Login user
  - Body: `{ "email": "user@example.com", "password": "password" }`
  - Returns: JWT token

#### Projects
- `GET /api/projects` - Get all projects for authenticated user
- `POST /api/projects` - Create a new project
  - Body: `{ "name": "My Chatbot", "prompt": "You are a helpful assistant..." }`
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

#### Chat
- `POST /api/chat` - Send a message to a chatbot
  - Headers: `Authorization: Bearer <jwt-token>`
  - Body: `{ "message": "Hello!", "projectId": "<project-id>" }`
  - Returns: AI-generated response

### Example Usage

1. Register/Login to get a JWT token.
2. Create a project with a custom prompt.
3. Use the project ID to chat with the AI.

## Environment Setup

Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- An OpenRouter API key (for OpenAI access)

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcryptjs
- **AI Integration**: OpenAI via OpenRouter
- **Other**: dotenv for environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.
