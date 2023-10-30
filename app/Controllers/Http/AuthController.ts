import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User';

export default class AuthController {

    async auth(req: HttpContextContract) {
        let user = req.request.body();
        let finduUers = await Database.from("users").where("USR_UserName", user.USR_UserName).first();

        if (finduUers && await Hash.verify(user.USR_Password, finduUers.USR_Password)) {
            return {
                token: await req.auth.use('api').generate(user),
                ...user
            }
        }
        else {
            return req.response.unauthorized('Invalid credentials')
        }
    }

    public async createAccount(req: HttpContextContract) {
        const user = new User();
        return user.createItem(req.request.body());
    }
}
