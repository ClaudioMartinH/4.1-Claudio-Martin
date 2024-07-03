import { Request, Response } from "express";

const error404 = (req: Request, res: Response) => {
    res.status(404).json({
        code: 404,
        message: "Page not found"
    });
};

export default { error404 };

