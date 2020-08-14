"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabangController = void 0;
const cabang_model_1 = require("../models/cabang.model");
class CabangController {
    index(req, res) {
        cabang_model_1.Cabang.findAll({})
            .then((cabang) => res.json(cabang))
            .catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        const params = req.body;
        cabang_model_1.Cabang.create(params)
            .then((cabang) => res.status(201).json(cabang))
            .catch((err) => res.status(500).json(err));
    }
    show(req, res) {
        const cabangId = parseInt(req.params.id);
        cabang_model_1.Cabang.findByPk(cabangId)
            .then((cabang) => {
            if (cabang) {
                res.json(cabang);
            }
            else {
                res.status(404).json({ errors: ["Cabang not found!"] });
            }
        })
            .catch((err) => {
            res.status(500).json(err);
        });
    }
    update(req, res) {
        const cabangId = parseInt(req.params.id);
        const params = req.body;
        const dataUpdate = {
            where: { id: cabangId },
            limit: 1,
        };
        cabang_model_1.Cabang.update(params, dataUpdate)
            .then(() => res.status(202).json({ data: "Data successfully updated." }))
            .catch((err) => res.status(500).json(err));
    }
    delete(req, res) {
        const cabangId = parseInt(req.params.id);
        const options = {
            where: { id: cabangId },
            limit: 1,
        };
        cabang_model_1.Cabang.destroy(options)
            .then(() => res.status(204).json({ data: "Data successfully deleted." }))
            .catch((err) => res.status(500).json(err));
    }
}
exports.CabangController = CabangController;
//# sourceMappingURL=cabang.controller.js.map