class Deque {
  constructor(size) {
    this.size = size;
    this.front = -1;
    this.rear = -1;
    this.queue = new Array(this.size);
  }

  isFull() {
    return (
      this.front === this.rear + 1 ||
      (this.front === 0 && this.rear === this.size - 1)
    );
  }

  isEmpty() {
    return this.front === -1;
  }

  isLastElement() {
    return this.front >= 0 && this.front === this.rear;
  }

  resize() {
    const newQueue = new Array(this.size * 2);

    for (let i = 0; i < this.size; i++) {
      newQueue[i] = this.queue[this.front];
      this.front = (this.front + 1) % this.size;
    }

    this.queue = newQueue;
    this.front = 0;
    this.rear = this.size - 1;
    this.size = this.size * 2;
  }

  enqueueFront(value) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.front = (this.front - 1 + this.size) % this.size;
    }
    this.queue[this.front] = value;
  }

  enqueueRear(value) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }
    this.queue[this.rear] = value;
  }

  dequeueFront() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    const temp = this.queue[this.front];
    this.queue[this.front] = undefined;
    if (this.isLastElement()) this.front = this.rear = -1;
    else this.front = (this.front + 1) % this.size;
    return temp;
  }

  dequeueRear() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    const temp = this.queue[this.rear];
    this.queue[this.rear] = undefined;
    if (this.isLastElement()) this.rear = this.front = -1;
    else {
      this.rear = (this.rear - 1 + this.size) % this.size;
    }
    return temp;
  }

  printQueue() {
    console.log(this.queue);
  }
}

const dq = new Deque(4);

// Empty check
console.log("isEmpty:", dq.isEmpty()); // true

// Enqueue from rear
dq.enqueueRear(10);
dq.enqueueRear(20);
dq.enqueueRear(30);
dq.printQueue(); // [10, 20, 30, undefined]

// Enqueue from front (wraps to index 3)
dq.enqueueFront(5);
dq.printQueue(); // [10, 20, 30, 5]  front=3, rear=2

// Full check
console.log("isFull:", dq.isFull()); // true
dq.enqueueRear(99); // queue is full

// Dequeue from both ends
console.log("dequeueFront:", dq.dequeueFront()); // 5
console.log("dequeueRear:", dq.dequeueRear()); // 30
dq.printQueue(); // [10, 20, undefined, undefined]

// Wrap-around: fill rear, dequeue front, enqueue rear to wrap
dq.enqueueRear(30);
dq.enqueueRear(40); // rear wraps to index 2
dq.printQueue(); // [10, 20, 30, 40] ... wait rear is at 2 which is already 30
dq.dequeueFront(); // 10
dq.dequeueFront(); // 20
dq.printQueue(); // [undefined, undefined, 30, 40]  front=2, rear=3

// Drain to empty
dq.dequeueFront(); // 30
dq.dequeueFront(); // 40
console.log("isEmpty:", dq.isEmpty()); // true
dq.dequeueFront(); // queue is empty
