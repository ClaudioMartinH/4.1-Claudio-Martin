export class User {
    _id: string
    username: string
    password: string

    constructor(id: string, username: string, password: string){
        this._id = id
        this.username = username
        this.password = password
    }
}