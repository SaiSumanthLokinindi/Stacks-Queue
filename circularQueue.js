class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(x) {
    if ((this.rear + 1) % this.size !== this.front) {
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = x;
      if (this.front === -1) this.front = this.rear;
    } else {
      console.log("queue is full");
    }
  }

  dequeue() {
    if (this.rear !== this.front) {
      console.log(this.queue[this.front]);
      this.queue[this.front] = undefined;
      this.front = (this.front + 1) % this.size;
    } else console.log("queue is empty");
  }

  printQueue() {
    console.log(this.queue, this.rear, this.front);
  }
}

const q = new Queue(5);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

q.printQueue();

q.dequeue();
q.dequeue();

q.printQueue();

q.enqueue(8);
q.enqueue(9);
q.enqueue(10);

q.printQueue();
