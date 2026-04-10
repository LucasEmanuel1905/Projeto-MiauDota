import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'miau_dota_secret_key_2024';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Erro no formato do token' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'Token malformatado' });
    }

    try {
        const decoded = jwt.verify(token, SECRET) as { id: number };
        
        // Estendendo o tipo Request para incluir userId
        (req as any).userId = decoded.id;
        
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido ou expirado' });
    }
};
