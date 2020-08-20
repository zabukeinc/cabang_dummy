"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const branch_controller_1 = require("../controllers/branch.controller");
class Routes {
    constructor() {
        this.branchController = new branch_controller_1.BranchController();
    }
    routes(app) {
        app
            .route("/branch")
            .get(this.branchController.index)
            .post(this.branchController.create);
        app
            .route("/branch/:id")
            .get(this.branchController.show)
            .put(this.branchController.update)
            .delete(this.branchController.delete);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map