import { Request, Response } from "express";
import { Branch, BranchInterface } from "../models/branch.model";
import { UpdateOptions, DestroyOptions } from "sequelize/types";

export class BranchController {
  public index(req: Request, res: Response) {
    Branch.findAll<Branch>({})
      .then((branch: Array<Branch>) =>
        res.json({
          status: true,
          message: "get all data cabang",
          data: branch,
        })
      )
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: BranchInterface = req.body;
    Branch.create<Branch>(params)
      .then((branch: Branch) =>
        res.status(201).json({
          status: true,
          message: "data successfully created.",
        })
      )
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);

    Branch.findByPk<Branch>(branchId)
      .then((branch: Branch | null) => {
        if (branch) {
          res.json(branch);
        } else {
          res.status(404).json({ status: false, message: "Branch not found." });
        }
      })
      .catch((err: Error) => {
        res.status(500).json(err);
      });
  }

  public update(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);
    const params: BranchInterface = req.body;

    Branch.findByPk<Branch>(branchId)
      .then((cabang: Branch | null) => {
        if (cabang) {
          const dataUpdate: UpdateOptions = {
            where: { id: branchId },
            limit: 1,
          };
          Branch.update(params, dataUpdate)
            .then(() =>
              res.status(202).json({
                status: true,
                message: "Data successfully updated.",
                data: {
                  id_branch: branchId,
                },
              })
            )
            .catch((err: Error) =>
              res.status(500).json({
                status: false,
                message: "Something went wrong",
                error: err,
              })
            );
        } else {
          res.status(404).json({ status: false, message: "Branch not found." });
        }
      })
      .catch((err: Error) => {
        res.status(500).json(err);
      });
  }

  public delete(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);

    Branch.findByPk<Branch>(branchId)
      .then((branch: Branch | null) => {
        if (branch) {
          const options: DestroyOptions = {
            where: { id: branchId },
            limit: 1,
          };
          Branch.destroy(options)
            .then(() =>
              res.status(202).json({
                status: true,
                data: "Data successfully deleted.",
              })
            )
            .catch((err: Error) =>
              res.status(500).json({
                status: false,
                message: "Something went wrong",
                error: err,
              })
            );
        } else {
          res.status(404).json({ status: false, message: "Branch not found." });
        }
      })
      .catch((err: Error) => {
        res.status(500).json(err);
      });
  }
}
