class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(x) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = x;
      if (this.front === -1) this.front = this.rear;
    } else {
      this.resize();
      this.enqueue(x);
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const temp = this.queue[this.front];
      this.queue[this.front] = undefined;
      if (this.front === this.rear) this.front = this.rear = -1;
      else this.front = (this.front + 1) % this.size;

      return temp;
    } else console.log("queue is empty");
  }

  resize() {
    const newQueue = new Array(this.size * 2);
    let j = this.front;

    for (let i = 0; i < this.size; i++) {
      newQueue[i] = this.queue[this.front];
      this.front = (this.front + 1) % this.size;
    }

    this.rear = this.size - 1;
    this.front = 0;
    this.queue = newQueue;
    this.size = this.size * 2;
  }

  peek() {
    return this.queue[this.front];
  }

  isFull() {
    return this.front !== -1 && (this.rear + 1) % this.size === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  printQueue() {
    console.log(this.queue, this.front, this.rear);
  }
}

const q = new Queue(5);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);

q.dequeue();
q.dequeue();

q.printQueue();

q.enqueue(8);
q.enqueue(9);
q.enqueue(10);
q.printQueue();
for (let i = 0; i < 15; i++) q.dequeue();

q.printQueue();
