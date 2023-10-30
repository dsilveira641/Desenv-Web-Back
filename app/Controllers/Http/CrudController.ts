import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Base from 'App/Models/Base';

export default class CrudController {
    createResource(request: HttpContextContract) {
        return this._getModel(request.request).createItem(request.request.body());
    }

    deleteResource(request: HttpContextContract) {
        return this._getModel(request.request).deleteItem(request.request.params().id);
    }

    updateResource(request: HttpContextContract) {
        return this._getModel(request.request).updateItem(request.request.params().id, request.request.body());
    }

    listResource(request: HttpContextContract) {
        return this._getModel(request.request).listItem(request.request.params().id);
    }

    private _getModel(request): Base {
        let modelClass = require(`App/Models/${request.headers().model}`);
        let model: Base = new modelClass.default();
        return model;
    }
}