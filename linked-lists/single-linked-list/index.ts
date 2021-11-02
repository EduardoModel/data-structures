type LinkedListValue = number;

interface LinkedListNode {
    value: LinkedListValue,
    next: LinkedListNode
}

class SingleLinkedList {
    private head: LinkedListNode;

    constructor() {
        this.head = null;
    }

    /*
        Intern Methods
    */
    private addNode(currentNode : LinkedListNode, value : LinkedListValue) : void {
        if(!currentNode.next){
            currentNode.next = {
                value,
                next: null
            }
        }
        else{
            this.addNode(currentNode.next, value);
        }
    }

    private removeNode(current : LinkedListNode, value : LinkedListValue) : LinkedListValue {
        if(!current){
            return null;
        }
        else if(current.value === value || (current.next && current.next.value === value)){
            const nodeValue = current.value;
            // Last element
            if(
                current.next && current.next.value === value && current.next.next === null
            ){
                current.next = null;
            }
            else{
                current.value = current.next.value;
                current.next = current.next.next;
            }
            return nodeValue;
        }

        else{
            return this.removeNode(current.next, value);
        }
    }

    private printList(currentNode: LinkedListNode) : string {
        if(currentNode){
            return `${currentNode.value} -> ${this.printList(currentNode.next)}`;
        }
        return '';
    }

    /* 
        Facade Methods
    */
    public add(value: LinkedListValue) : void {
        if(!this.head){
            this.head = {
                value,
                next: null,
            };
        }
        else{
            this.addNode(this.head, value);
        }
    }

    public remove(value: LinkedListValue) : boolean {
        if(this.removeNode(this.head, value)){
            return true;
        }
        return false;
    }

    public print() : void {
        console.log(this.printList(this.head));
    }
}

const linkedList = new SingleLinkedList();

linkedList.add(6);
linkedList.add(10);
linkedList.add(1);
linkedList.print();

console.log(`REMOVE 1: ${linkedList.remove(1)}`);
console.log(`REMOVE 9: ${linkedList.remove(9)}`);
linkedList.print();

linkedList.add(15);
linkedList.add(52);
linkedList.print();

console.log(`REMOVE 6: ${linkedList.remove(6)}`);
linkedList.print();