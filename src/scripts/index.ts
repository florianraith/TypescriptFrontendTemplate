import { Greeter } from "./greeter";

export default function main() {

  const greeter = new Greeter();
  greeter.setName('Max');
  greeter.greet();

  const status = document.getElementById('status');
  status!.innerHTML = 'working';

}