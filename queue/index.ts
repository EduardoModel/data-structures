type QueueValue = number;

interface QueueNode {
    value: QueueValue,
    next: QueueNode
}

class Queue {
  private front : QueueNode;
  private end : QueueNode;

  constructor(){
    this.front = null;
    this.end = null;
  }

  public add(value : QueueValue) {
    const newElement = {
      value,
      next: null
    };
    // Queue is empty
    if(this.front === null && this.end === null) {
      this.front = newElement;
      this.end = newElement;
    }
    // Queue has only one element
    else if(!this.front && this.front === this.end) {
      this.front.next = newElement
      this.end = newElement;
    }
    // Queue has two or more elements
    else {
      this.end.next = newElement;
      this.end = newElement;
    }
  }

  public remove() : QueueValue {
    // Queue is empty
    if(!this.front) {
      return null;
    }
    // Return the front value and go to the next
    const valueToReturn = this.front.value;
    this.front = this.front.next;
    return valueToReturn;
  }

  public empty() : void {
    this.front = null;
    this.end = null;
  }
}

const queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(0);
queue.add(1);

console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());

// queue.empty();

console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());