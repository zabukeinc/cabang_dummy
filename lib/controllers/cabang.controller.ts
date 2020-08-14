import { Request, Response } from "express";
import { Cabang, CabangInterface } from "../models/cabang.model";
import { UpdateOptions, DestroyOptions } from "sequelize/types";

export class CabangController {
  public index(req: Request, res: Response) {
    Cabang.findAll<Cabang>({})
      .then((cabang: Array<Cabang>) => res.json(cabang))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: CabangInterface = req.body;
    Cabang.create<Cabang>(params)
      .then((cabang: Cabang) => res.status(201).json(cabang))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const cabangId: number = parseInt(req.params.id);

    Cabang.findByPk<Cabang>(cabangId)
      .then((cabang: Cabang | null) => {
        if (cabang) {
          res.json(cabang);
        } else {
          res.status(404).json({ errors: ["Cabang not found!"] });
        }
      })
      .catch((err: Error) => {
        res.status(500).json(err);
      });
  }

  public update(req: Request, res: Response) {
    const cabangId: number = parseInt(req.params.id);
    const params: CabangInterface = req.body;

    const dataUpdate: UpdateOptions = {
      where: { id: cabangId },
      limit: 1,
    };
    Cabang.update(params, dataUpdate)
      .then(() => res.status(202).json({ data: "Data successfully updated." }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const cabangId: number = parseInt(req.params.id);
    const options: DestroyOptions = {
      where: { id: cabangId },
      limit: 1,
    };

    Cabang.destroy(options)
      .then(() => res.status(204).json({ data: "Data successfully deleted." }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
