import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User';

export default class AuthController {

    async auth({auth, request, response}: HttpContextContract) {
        let user = request.body();
        let findUser = await Database.from("users").where("USR_UserName", user.USR_UserName).first();

        if (findUser && await Hash.verify(findUser.USR_Password, user.USR_Password)) {
            //return {
            //    token: await req.auth.use('api').generate(user),
            //    ...user
            //}

            return  {
                user,
                token: (await auth.use('api').generate(findUser, {
                    expiresIn: "1h"
                }))
            };
        }
        else {
            return response.unauthorized('Invalid credentials')
        }
    }

    public async createAccount(req: HttpContextContract) {
        const user = new User();
        return user.createItem(req.request.body());
    }
}
