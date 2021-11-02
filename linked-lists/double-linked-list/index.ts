type DoubleLinkedListValue = number;

interface DoubleLinkedListNode {
    value: DoubleLinkedListValue,
    previous: DoubleLinkedListNode,
    next: DoubleLinkedListNode
}

class DoubleLinkedList {
    private head;

    constructor(){
        this.head = null;
    }

    /*
        Intern Methods
    */
    private addNode(current : DoubleLinkedListNode, value : DoubleLinkedListValue){
        if(!current.next){
            current.next = {
                value,
                next: null,
                previous: current,
            };
        }
        else{
            this.addNode(current.next, value);
        }
    }

    private removeNode(current : DoubleLinkedListNode, value : DoubleLinkedListValue) : DoubleLinkedListValue | null{
        if(!current){
            return null;
        }
        else if(current.value === value){
            // The element is between 2 elements
            if(current.next && current.previous){
                current.previous.next = current.next;
                current.next.previous = current.previous;
            }
            // The element is at the end of the list
            else if(!current.next && current.previous){
                current.previous.next = null;
            }
            // The element is at the start of the list
            else if(current.next && !current.previous){
                this.head.previous = null;
                this.head.value = current.next.value;
                this.head.next = current.next.next;
            }
            // It is only one element inside the list
            else{
                this.head = null;
            }
            return current.value;
        }
        else{
            return this.removeNode(current.next, value);
        }
    }

    private printList(current : DoubleLinkedListNode){
        if(current){
            return `   ${current.previous ? current.previous.value : ' '}    ->    ${current.value}    ->   ${current.next ? current.next.value : ' '}\n${this.printList(current.next)}`;
        }
        return '';
    }

    /*
        Facade Methods
    */
    public add(value : DoubleLinkedListValue){
        if(this.head === null){
            this.head = {
                value,
                previous: null,
                next: null,
            }
        }
        else{
            this.addNode(this.head, value);
        }
    }

    public remove(value : DoubleLinkedListValue){
        return !!this.removeNode(this.head, value);
    }

    public print(){
        console.log('previous | current | next')
        console.log(this.printList(this.head));
    }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.add(5);
doubleLinkedList.add(8);
doubleLinkedList.add(1);
doubleLinkedList.add(2);

doubleLinkedList.print();

console.log(`REMOVING 1: ${doubleLinkedList.remove(1)}`);
doubleLinkedList.print();

console.log(`REMOVING 90: ${doubleLinkedList.remove(90)}`);

doubleLinkedList.add(11);
doubleLinkedList.add(90);
doubleLinkedList.print();

console.log(`REMOVING 5: ${doubleLinkedList.remove(5)}`);
doubleLinkedList.print();

console.log(`REMOVING 90: ${doubleLinkedList.remove(90)}`);
doubleLinkedList.print();