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
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 