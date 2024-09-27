/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a course tutorial on following Detail with field as course name,description,along with chapter name,about,duration:category:'Programming',Topic:Python,Level:Basic,Duration:1 hours, NoOfChapters: 5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming Fundamentals\",\n    \"description\": \"This course introduces the fundamental concepts of Python programming, covering essential syntax, data types, control flow, and basic data structures. Ideal for beginners with no prior programming experience.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"Overview of Python, its history, applications, and why it's a popular choice for programming.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"Understanding different data types in Python, including integers, floats, strings, and booleans. Learn how to declare and assign variables.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"Exploring arithmetic, comparison, logical, and assignment operators. Learn how to build expressions and evaluate them.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Control Flow: Conditional Statements and Loops\",\n        \"about\": \"Mastering conditional statements (if, else, elif) and loops (for, while) to control the flow of execution in your programs.\",\n        \"duration\": \"30 minutes\"\n      },\n      {\n        \"name\": \"Data Structures: Lists and Dictionaries\",\n        \"about\": \"Introduction to fundamental data structures like lists and dictionaries. Learn how to manipulate and access data within these structures.\",\n        \"duration\": \"30 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n``` \n"},
          ],
        },
      ],
    });
  

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in detail on Topic:Python , Chapter:Introduction to Flask , in JSON Format with list of array with field as title, explan ation on given chapter on detail ,Code Example(Code field in <precode format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"What is Flask?\",\n    \"explanation\": \"Flask is a lightweight, flexible, and powerful web framework for Python. It's built on top of Werkzeug (for WSGI) and Jinja2 (for templating), providing a solid foundation for building web applications of varying complexity.  Flask is considered a microframework, meaning it doesn't force you to use specific libraries or patterns for databases, forms, or other components. This gives you great flexibility and control over your project.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Key Features of Flask\",\n    \"explanation\": \"Flask offers several key features that contribute to its popularity:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Routing\",\n    \"explanation\": \"Flask provides a simple way to define routes, which map URLs to specific Python functions (called view functions). These functions handle incoming requests and generate responses.\",\n    \"code\": \"<precode>\\nfrom flask import Flask\\n\\napp = Flask(__name__)\\n\\n@app.route('/')\\ndef index():\\n    return 'Hello, world!'\\n\\n@app.route('/about')\\ndef about():\\n    return 'This is the about page.'\\n\\nif __name__ == '__main__':\\n    app.run(debug=True)\\n</precode>\"\n  },\n  {\n    \"title\": \"Templating with Jinja2\",\n    \"explanation\": \"Jinja2 is a powerful templating engine integrated into Flask. It allows you to create dynamic HTML pages by embedding Python code within templates. This enables you to generate content based on data, user input, or other factors.\",\n    \"code\": \"<precode>\\nfrom flask import Flask, render_template\\n\\napp = Flask(__name__)\\n\\n@app.route('/profile/<username>')\\ndef profile(username):\\n    user = {'name': username, 'age': 30}\\n    return render_template('profile.html', user=user)\\n\\nif __name__ == '__main__':\\n    app.run(debug=True)\\n</precode>\\n\\n**profile.html:**\\n<precode>\\n<h1>Profile</h1>\\n<p>Name: {{ user.name }}</p>\\n<p>Age: {{ user.age }}</p>\\n</precode>\"\n  },\n  {\n    \"title\": \"Request Handling\",\n    \"explanation\": \"Flask provides tools for handling HTTP requests, extracting data from requests, and constructing responses. You can access request parameters, headers, cookies, and more.\",\n    \"code\": \"<precode>\\nfrom flask import Flask, request\\n\\napp = Flask(__name__)\\n\\n@app.route('/search')\\ndef search():\\n    query = request.args.get('q')\\n    if query:\\n        return f'You searched for: {query}'\\n    else:\\n        return 'Please enter a search query.'\\n\\nif __name__ == '__main__':\\n    app.run(debug=True)\\n</precode>\"\n  },\n  {\n    \"title\": \"Sessions and User Authentication\",\n    \"explanation\": \"Flask offers a mechanism for managing user sessions, allowing you to store information about logged-in users and track their activity. This is essential for building secure and interactive applications.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Extensions\",\n    \"explanation\": \"Flask's modularity shines through its extensive ecosystem of extensions. These are packages that add functionality like database integration (SQLAlchemy), form handling (WTForms), and security (Flask-WTF).\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Debugging and Testing\",\n    \"explanation\": \"Flask has built-in debugging features and tools for testing. You can easily enable debug mode to get helpful error messages and run unit tests to ensure your code behaves as expected.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Creating a Simple Flask App\",\n    \"explanation\": \"Let's put these concepts together by building a basic Flask application.\",\n    \"code\": \"<precode>\\nfrom flask import Flask, render_template\\n\\napp = Flask(__name__)\\n\\n@app.route('/')\\ndef index():\\n    return render_template('index.html')\\n\\n@app.route('/about')\\ndef about():\\n    return 'This is the About page.'\\n\\nif __name__ == '__main__':\\n    app.run(debug=True)\\n</precode>\\n\\n**index.html:**\\n<precode>\\n<!DOCTYPE html>\\n<html>\\n<head>\\n    <title>My Simple Flask App</title>\\n</head>\\n<body>\\n    <h1>Welcome to My App</h1>\\n    <p>This is the home page.</p>\\n    <a href='/about'>About</a>\\n</body>\\n</html>\\n</precode>\"\n  }\n]\n```"},
          ],
        },
      ],
    });
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 