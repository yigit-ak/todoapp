import http from "../http-common";

class TaksDataService {
    async getAll() {
        return http.get("/");
    }

    get(taskId) {
        return http.get(`/${taskId}`);
    }

    delete(taskId) {
        return http.delete(`/${taskId}`);
    }

    add(data) {
        return http.post("/", data);
    }

    update(taskId, data) {
        return http.patch(`/${taskId}`, data);
    }
}

export default new TaksDataService();