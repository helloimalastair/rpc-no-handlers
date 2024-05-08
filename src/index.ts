import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  // async scheduled() {  }
  
  add(a: number, b: number) { return a + b; } 
}
