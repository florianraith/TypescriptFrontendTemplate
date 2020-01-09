export class Greeter {

  private name: string = '';

  public setName(name: string): void {
    this.name = name;
  }

  public greet(): void {
    console.log(`Hello ${this.name}!`);
    console.log('How are you today?');
  }

}