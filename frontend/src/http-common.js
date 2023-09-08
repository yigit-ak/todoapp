import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:5000/api/v1/tasks",
    headers: {
        "Content-Type": "application/json"
    }
});