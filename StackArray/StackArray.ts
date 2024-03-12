class Stack {

    private data: number[];
    private top: number;
    private size: number;
    private readonly STACK_EMPTY = -1;

    constructor(size: number) {
        this.data = [];
        this.top = this.STACK_EMPTY;
        this.size = size
    }


    public push(item: number): void {

        if (this.isFull()) {
            console.log("could not push element");
            return;
        }else{
            this.top++;
            this.data[this.top] = item
        }
    }

    private isFull(): boolean {
        return this.top == this.size - 1;
    }

    public isEmpty(): boolean {
        return this.top == this.STACK_EMPTY;
    }

    public peek(): number {
        return this.data[this.top];
    }

    public pop(): number {
        if (this.isEmpty()) {
            return this.STACK_EMPTY;
        }

        let item: number = this.data[this.top];
        this.top--;
        return item;
    }

    public length(): number {
        return this.top + 1;
    }

    public print(): void {
        for (let index = 0; index <= this.top; index++) {
            console.log(this.data[index]);
        }
    }
}

const stack = new Stack(3);

stack.push(1);

console.log("empty: ",stack.isEmpty());

stack.push(2);
stack.push(3);

stack.pop() // delete 3

stack.push(4);

console.log("len: ",stack.length());

console.log("print");

stack.print();
// 4
console.log("top: ",stack.peek());



