# HumanChain AI Safety Incident Log API

A backend API service to log and manage hypothetical AI safety incidents, built using **Express.js** with **TypeScript** and **MongoDB**.

---

## 📚 Project Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Rohit72099/HumanChain-AI-Safety-Incident-Log-API.git
cd HumanChain-AI-Safety-Incident-Log-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory with the following:

```env
MONGODB_URI=mongodb://localhost:27017/humanchain_incidents
PORT=5000
```

### 4. Run the application locally

```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 5. (Optional) Seed initial sample data

```bash
npm run seed
```

This will insert 2-3 sample incidents into your local MongoDB database.

---

## 🖋️ Language and Framework Choice

- **Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)

---

## 📊 Database Setup

- Ensure you have MongoDB installed and running locally.
- The database name will be `humanchain_incidents`.
- No manual schema setup is needed. Mongoose models handle it automatically.

---

## 🔍 API Endpoints (with curl examples)

### 1. Get all incidents

- **Method:** GET
- **URL:** `/incidents`

**cURL Example:**

```bash
curl -X GET http://localhost:5000/incidents
```

---

### 2. Create a new incident

- **Method:** POST
- **URL:** `/incidents`
- **Request Body:**

```json
{
  "title": "New Incident",
  "description": "Description of the incident",
  "severity": "Medium"
}
```

**cURL Example:**

```bash
curl -X POST http://localhost:5000/incidents -H "Content-Type: application/json" -d "{\"title\":\"Incident1\",\"description\":\"Something happened\",\"severity\":\"High\"}"

```

---

### 3. Get a specific incident by ID

- **Method:** GET
- **URL:** `/incidents/{id}`

**cURL Example:**

```bash
curl -X GET http://localhost:5000/incidents/<your-incident-id>
```

---

### 4. Delete an incident by ID

- **Method:** DELETE
- **URL:** `/incidents/{id}`

**cURL Example:**

```bash
curl -X DELETE http://localhost:5000/incidents/<your-incident-id>
```

---

## 📈 Design Decisions and Challenges

- **Validation** is added to ensure the severity field is one of "Low", "Medium", or "High".
- **Error handling** ensures appropriate status codes: `400 Bad Request`, `404 Not Found`, and `500 Internal Server Error`.
- **MongoDB ObjectId validation** is handled cleanly to differentiate between "invalid id format" and "incident not found".

---

## 📅 Project Scripts

- `npm run dev` - Runs the server with hot reloading.
- `npm run seed` - Populates the database with initial incidents.

---

- Used Express + TypeScript for type safety and scalability.
- Used Mongoose for MongoDB object modeling.
- Separated concerns into models, controllers, and routes.

# Thank you!

Hoping for an optimistic response from your side
