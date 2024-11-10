# AI-Companion

## Overview
The AI-Companion project consists of both a backend and a frontend designed to serve as the core functionality for an AI-powered terminal assistant. The backend utilizes the Gemini API to process natural language inputs and generate contextually relevant responses, enabling users to engage in specialized conversations. The frontend is built using React, providing a user-friendly interface for interacting with the assistant.

## Task Overview
LearnNation is assembling a specialized AI development team to lead our next generation of educational technology. This project will serve as an assessment of your potential to join this team. As part of our strategic initiative to explore new frontiers in personalized learning, you will develop an AI-powered terminal assistant using Python and the Gemini API. Your performance on this project will be a key factor in determining your role in LearnNation's AI future.

#### This project serves these key purposes:
1. **Skill Assessment & Growth**: This task evaluates your ability to work with emerging AI technologies and complex software systems. Strong performance could lead to opportunities in our new AI Integration Department, where you'll help shape LearnNation's next generation of educational tools.
2. **Critical Thinking**: This task tests your ability to think critically about project requirements and to plan and execute your work in a way that is both efficient and effective both in code and in NLP strategies.
3. **Organization**: This task tests your ability to organize your work and manage your time effectively.
4. **Product Prototyping**: Your assistant will serve as a prototype for LearnNation's expansion into AI-enhanced learning experiences. The most successful implementations may be selected for further development and integration into our core product offerings, with the original developers taking lead roles in those initiatives.

## Key Features
## Backend Repository
You can find the backend repository [here](https://github.com/DestinyJoyner/AI-Companion-BE).
### Backend
- **Flask Framework**: The backend is built using Flask, a lightweight WSGI web application framework.
- **CORS Support**: Flask-CORS is implemented to allow cross-origin requests, enabling the frontend to communicate with the backend seamlessly.
- **Environment Variables**: The application uses a `.env` file to securely manage API keys and other sensitive information.
- **Gemini API Integration**: The backend connects to the Gemini API to provide AI-generated responses based on user prompts.


### Frontend
- **React Framework**: The frontend is built using React, providing a dynamic and responsive user interface.
- **API Integration**: The frontend communicates with the backend to send user prompts and receive AI-generated responses.

## File Structure
- `app.py`: The main application file that contains the Flask application and API endpoint for handling requests.
- `src/`: The directory containing the React frontend code.

## Usage
### Backend
To run the backend:
1. Ensure you have the required packages installed:
   ```bash
   pip install Flask flask-cors python-dotenv google-generativeai
   ```
2. Set up your environment variables in a `.env` file, including your `API_KEY`.
3. Run the application:
   ```bash
   python app.py
   ```

The backend will be accessible at `http://127.0.0.1:5000/api/gemini-data` for POST requests.

### Frontend
To run the frontend:
1. Navigate to the frontend directory (e.g., `cd frontend`).
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be accessible at `http://localhost:3000` (or the port specified in your Vite configuration).

## Conclusion
The AI-Companion project is a crucial component of the AI assistant initiative, providing the necessary infrastructure to handle user interactions and generate intelligent responses using the Gemini API. The combination of a Flask backend and a React frontend creates a powerful platform for personalized learning experiences.

## Resources
- [Planning Your AI Assistant](./planning.md)
- [Python Virtual Environment Setup](https://github.com/jdrichards-pursuit/python-virtual-environment-setup)
- [NLP Prompting Lesson](https://github.com/jdrichards-pursuit/week-6.1-6.2-prompt-engineering-theory/blob/main/lesson.ipynb)
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [Python Documentation](https://docs.python.org/3/)