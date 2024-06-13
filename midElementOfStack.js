class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
    this.mid = -1;
    this.size = size;
  }

  push(x) {
    if (this.top !== this.size - 1) {
      this.stack[++this.top] = x;
      if (this.top % 2 === 0) this.mid++;
    } else console.log("stack is full");
  }

  pop() {
    if (this.top !== -1) {
      if ((this.top - 1) % 2 != 0) this.mid--;
      return this.stack[this.top--];
    } else console.log("stack is empty");
  }

  findMid() {
    if (this.top !== -1) {
      return this.stack[this.mid];
    } else console.log("stack is empty");
  }

  printStack() {
    console.log(this.stack, this.top, this.mid);
  }
}

const s = new Stack(9);

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.pop();
s.pop();
s.pop();

console.log(s.findMid());
s.printStack();
