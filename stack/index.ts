type StackValue = number;

interface StackNode {
    value: StackValue,
    next: StackNode
}

class Stack {
  private top;

  constructor(){
    this.top = null;
  }

  public push(value : StackValue) : void {
    if(!this.top){
      this.top = {
        value,
        next: null
      }
    }
    else{
      const newTop = {
        value,
        next: this.top,
      }
      this.top = newTop;
    }
  }

  public pop() : StackValue | null {
    if(!this.top){
      return null;
    }
    const currentTop = this.top;
    this.top = this.top.next;
    return currentTop.value;
  }

  public empty() : void {}
}

const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(9);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.push(88);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
