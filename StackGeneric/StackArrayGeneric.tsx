class StackArrGeneric<T> {

    private data: T[];
    private top: number;
    private size: number;
    private readonly STACK_EMPTY = -1;

    constructor(size: number) {
        this.data = [];
        this.top = this.STACK_EMPTY;
        this.size = size
    }


    public push(item: T): void {

        if (this.isFull()) {
            console.log("could not push element");
            return;
        } else {
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

    public peek(): T {
        return this.data[this.top];
    }

    public pop(): T | number {
        if (this.isEmpty()) {
            return this.STACK_EMPTY;
        }

        let item: T = this.data[this.top];
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

const StackStr = new StackArrGeneric<string>(3);
StackStr.push("Reynaldo");
StackStr.push("Ana");
StackStr.push("Sofia");

console.log(StackStr.peek());
StackStr.pop();
console.log(StackStr.peek());

console.log("Len :", StackStr.length());

StackStr.print();

console.log("---------------------");

interface Users {
    name: string;
    age?: number;
}

const StackObj = new StackArrGeneric<Users>(2);

StackObj.push({name:"Reynaldo", age: 50});
StackObj.push({name:"Sofia"});

StackObj.print();

