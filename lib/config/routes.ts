import { BranchController } from "../controllers/branch.controller";
import { Application, Response, Request } from "express";

export class Routes {
  public branchController: BranchController = new BranchController();

  public routes(app: Application): void {
    app
      .route("/branch")
      .get(this.branchController.index)
      .post(this.branchController.create);

    app
      .route("/branch/:id")
      .get(this.branchController.show)
      .put(this.branchController.update)
      .delete(this.branchController.delete);

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}
