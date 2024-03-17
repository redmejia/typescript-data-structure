# Stack Array Generics Implementaion

Making these small changes gives us a more dynamic way to work with any type.

In TypeScrip [Generics](https://github.com/redmejia/learning-typescript/tree/main/Generics) allow you to write code that can work with different types.

```typescript
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

```