import { CabangController } from "../controllers/cabang.controller";

export class Routes {
  public cabangController: CabangController = new CabangController();

  public routes(app): void {
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
