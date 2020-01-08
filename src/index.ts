import { Greeter } from "./greeter";

function main() {

  const greeter = new Greeter();
  greeter.setName('Max');
  greeter.greet();

  const status = document.getElementById('status');
  status!.innerHTML = 'working';

}
main();