import { isPromse } from "./common";
class Scheduler {
  constructor(max) {
      this.max = max;
      this.runCount = 0;
      this.tasks = [];
      this.isAlradyStart = false;
  }

  add(task) {
      const isPromise = isPromse(task);
      // console.log(isPromise);
      if (!isPromise) {
          return;
      }
      this.tasks.push(task);
      this.isAlradyStart && this.run();
  }

  run() {
      if(this.tasks.length<1 || this.runCount>=this.max){
          return;
      }
      this.isAlradyStart  = true;
      console.log('this.max:',this.max,  ',this.runCount:',this.runCount, ' ',this.max- this.runCount);
      for (let index = 0; index < this.max- this.runCount; index++) {
          const task = this.tasks.shift();
          // console.log('start:', task);
          this.runCount++;
          task.then((data)=>{
              console.log(data);
              this.runCount--;
              this.run();
          });
      }
  }

}
module.exports = Scheduler;
// export default Scheduler;