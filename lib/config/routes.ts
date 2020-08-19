import { BranchController } from "../controllers/branch.controller";

export class Routes {
  public branchController: BranchController = new BranchController();

  public routes(app): void {
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
