import services from '../services';

/**
 * Identifies the current user in the system or throws them out if they
 * can't be identified
 * @param { import('express').Request } req 
 * @param { import('express').Response } res 
 * @param { import('express').NextFunction } next 
 */
export default async (req, res, next) => {
    try {
        const bearerToken = req.headers['authorization'];
        req.user = await services.AuthService.authenticate(bearerToken);
        next();
    } catch (error) {
        next(error);
    }
}