# Algolia Search Backend

A simple backend for handling search and product indexing with Algolia.

## 🚀 Live API
- **API Tester**: [Test APIs](https://api-test-and-management-app.vercel.app/)
- **Base URL**: [Live API](https://algolia-search-backend-production.up.railway.app/api)
- **Test Endpoint**: [Test API](https://algolia-search-backend-production.up.railway.app/api/test)

## 📌 Project Links
- **Repo**: [GitHub](https://github.com/developerbadsa/algolia-search-backend.git)
- **API Tester**: [Test APIs](https://api-test-and-management-app.vercel.app/)


## 🏗 Setup
1. Clone the repo:
   ```sh
   git clone https://github.com/developerbadsa/algolia-search-backend.git
   cd algolia-search-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add `.env` file:
   ```env
   ALGOLIA_APP_ID=your_id
   ALGOLIA_ADMIN_KEY=your_key
   ALGOLIA_INDEX=your_index
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## 📜 API Endpoints
### 🔍 Search Products
- **GET** `/api/search`
- **Params**: `{ query: "product name" }`
- **Response**:
  ```json
  [{ "objectID": "123", "name": "Sample Product" }]
  ```

### ➕ Add Product
- **POST** `/api/add`
- **Body**:
  ```json
  { "objectID": "123", "name": "Sample Product" }
  ```
- **Response**:
  ```json
  { "taskID": "12345" }
  ```

### ✅ Test API
- **GET** `/api/test`
- **Response**: `"Test"`

## 🎯 Tech Stack
- **Node.js**
- **Express.js**
- **Algolia**
- **Railway**

## 👨‍💻 Developer
- **Rahim Badsa** - [GitHub](https://github.com/developerbadsa)

---
⭐ If you like this project, star it on GitHub! 🚀

