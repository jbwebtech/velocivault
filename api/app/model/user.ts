export default class User {
  public readonly id: string = crypto.randomUUID()
  constructor(
    public name: string,
    public email: string,
    public password: string,
  ) { }
}

