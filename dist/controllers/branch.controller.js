"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchController = void 0;
const branch_model_1 = require("../models/branch.model");
// const { body, validationResult } = require("express-validator");
class BranchController {
    index(req, res) {
        branch_model_1.Branch.findAll({})
            .then((branch) => {
            if (branch.length > 0) {
                res.json({
                    status: true,
                    message: "Get all data branch.",
                    data: branch,
                });
            }
            else {
                res.json({
                    status: false,
                    message: "Branch is empty",
                    data: branch,
                });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        const params = req.body;
        branch_model_1.Branch.create(params)
            .then((branch) => res.status(201).json({
            status: true,
            message: "Data successfully created.",
        }))
            .catch((err) => res.status(500).json({ status: false, message: err.message }));
    }
    show(req, res) {
        const branchId = parseInt(req.params.id);
        branch_model_1.Branch.findByPk(branchId)
            .then((branch) => {
            if (branch) {
                res.json(branch);
            }
            else {
                res.status(404).json({ status: false, message: "Branch not found." });
            }
        })
            .catch((err) => {
            res.status(500).json({ status: false, message: err });
        });
    }
    update(req, res) {
        const branchId = parseInt(req.params.id);
        const params = req.body;
        branch_model_1.Branch.findByPk(branchId)
            .then((branch) => {
            if (branch) {
                const dataUpdate = {
                    where: { id: branchId },
                    limit: 1,
                };
                branch_model_1.Branch.update(params, dataUpdate)
                    .then(() => res.status(202).json({
                    status: true,
                    message: "Data successfully updated.",
                    data: {
                        id_branch: branchId,
                    },
                }))
                    .catch((err) => res.status(500).json({
                    status: false,
                    message: "Something went wrong",
                    error: err,
                }));
            }
            else {
                res.status(404).json({ status: false, message: "Branch not found." });
            }
        })
            .catch((err) => {
            res.status(500).json({ status: false, message: err });
        });
    }
    delete(req, res) {
        const branchId = parseInt(req.params.id);
        if (branchId) {
            branch_model_1.Branch.findByPk(branchId)
                .then((branch) => {
                if (branch) {
                    const options = {
                        where: { id: branchId },
                        limit: 1,
                    };
                    branch_model_1.Branch.destroy(options)
                        .then(() => res.status(202).json({
                        status: true,
                        data: "Data successfully deleted.",
                    }))
                        .catch((err) => res.status(500).json({
                        status: false,
                        message: "Something went wrong",
                        error: err,
                    }));
                }
                else {
                    res
                        .status(404)
                        .json({ status: false, message: "Branch not found." });
                }
            })
                .catch((err) => {
                res.status(500).json({ status: false, message: err.message });
            });
        }
        else {
            throw new Error("Parameters Branch ID can not be null.");
        }
    }
}
exports.BranchController = BranchController;
//# sourceMappingURL=branch.controller.js.map