# 📝 Todo List API

A robust RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing daily tasks.

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Tools:** Postman (for testing), Dotenv (environment variables)

## 🚀 Features

- **Create Task:** Add new tasks with a title and description.
- **Read Tasks:** Retrieve a list of all tasks.
- **Update Task:** Modify task details or mark them as completed.
- **Delete Task:** Remove unwanted tasks from the database.

## 📂 Project Structure

The project follows the **MVC (Model-View-Controller)** :

```text
todo-api/
├── config/
├── controllers/
├── models/
├── routes/
├── .env
└── server.js
```

---

## 📡 API Endpoints

| Method | Route          | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all todos |
| POST   | /api/tasks     | Create todo   |
| PATCH  | /api/tasks/:id | Update todo   |
| DELETE | /api/tasks/:id | Delete todo   |

---

## 🗄 Running Locally

- **1-Clone the Repository and Install Dependencies**

```bash
git clone https://github.com/AhmedSedkyy/todo-list-api.git

cd todo-list-api

npm install

```

- **2-Create a .env file**

```bash

PORT=3000

MONGO_URI=your_mongodb_connection_string

```

- **3-Run the Server**

```bash

npm start

```

## 👤 Author

**[Ahmed Sedky]**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmedsedkyy/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AhmedSedkyy)
