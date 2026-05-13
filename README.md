
# Vir Softech Website Redesign (MERN Stack)

This project is a full redesign of the Vir Softech website using the MERN stack (MongoDB, Express, React, Node.js).
Since the development environment did not have Node.js available in the PATH, the project structure has been generated manually.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## Getting Started

1.  **Install Dependencies:**

    Navigate to the root directory and run:

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

2.  **Run the Application:**

    In separate terminals:

    *   **Server:**
        ```bash
        cd server
        npm start
        ```

    *   **Client:**
        ```bash
        cd client
        npm run dev
        ```

3.  **Environment Variables:**
    Create a `.env` file in the `server` directory with:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/virsoftech
    ```

## Project Structure

-   `client/`: React frontend (Vite).
-   `server/`: Express backend API.
