import { Request, Response } from "express";
import { Branch, BranchInterface } from "../models/branch.model";
import {
  UpdateOptions,
  DestroyOptions,
  ValidationErrorItem,
} from "sequelize/types";

export class BranchController {
  public index(req: Request, res: Response) {
    Branch.findAll<Branch>({})
      .then((branch: Array<Branch>) => {
        if (branch.length > 0) {
          res.json({
            status: true,
            message: "Get all data branch.",
            data: branch,
          });
        } else {
          res.json({
            status: false,
            message: "Branch is empty",
            data: branch,
          });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: BranchInterface = req.body;
    Branch.create<Branch>(params)
      .then((branch: Branch) =>
        res.status(201).json({
          status: true,
          message: "Data successfully created.",
        })
      )
      .catch((err: ValidationErrorItem) =>
        res.status(500).json({ status: false, message: err.message })
      );
  }

  public show(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);

    if (branchId) {
      Branch.findByPk<Branch>(branchId)
        .then((branch: Branch | null) => {
          if (branch) {
            res.json(branch);
          } else {
            res
              .status(404)
              .json({ status: false, message: "Branch not found." });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({ status: false, message: err });
        });
    } else {
      res.status(500).json({
        status: false,
        message: "Input must be a number (BranchID)",
      });
    }
  }

  public update(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);
    const params: BranchInterface = req.body;

    if (branchId) {
      Branch.findByPk<Branch>(branchId)
        .then((branch: Branch | null) => {
          if (branch) {
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
              .catch((err: ValidationErrorItem) =>
                res.status(500).json({
                  status: false,
                  message: err.message,
                })
              );
          } else {
            res
              .status(404)
              .json({ status: false, message: "Branch not found." });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({ status: false, message: err });
        });
    } else {
      res.status(500).json({
        status: false,
        message: "Input must be a number (BranchID)",
      });
    }
  }

  public delete(req: Request, res: Response) {
    const branchId: number = parseInt(req.params.id);
    if (branchId) {
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
            res
              .status(404)
              .json({ status: false, message: "Branch not found." });
          }
        })
        .catch((err: Error) => {
          res.status(500).json({ status: false, message: err.message });
        });
    } else {
      res.status(500).json({
        status: false,
        message: "Input must be a number (BranchID)",
      });
    }
  }
}
