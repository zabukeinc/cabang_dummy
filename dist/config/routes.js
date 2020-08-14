"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const cabang_controller_1 = require("../controllers/cabang.controller");
class Routes {
    constructor() {
        this.cabangController = new cabang_controller_1.CabangController();
    }
    routes(app) {
        app
            .route("/cabang")
            .get(this.cabangController.index)
            .post(this.cabangController.create);
        app
            .route("/cabang/:id")
            .get(this.cabangController.show)
            .put(this.cabangController.update)
            .delete(this.cabangController.delete);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map