export class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// Define the LinkedList class
class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  len: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  // append
  public append(data: T): void {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.len++


  }

  // delete
  public delete(): void {
    if (this.head != null) {
      this.head = this.head.next;
      this.len--;
      return;
    }
  }
  // size
  public size(): number {
    return this.len;
  }

  // traverse
  public print(): void {
    let current: Node<T> | null = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const numberList = new LinkedList<number>();

numberList.append(1);
numberList.append(2);

numberList.print();

const stringList = new LinkedList<string>();
stringList.append("Hola");
stringList.append("Hello");

stringList.delete();

stringList.print();


interface Person {
	name: string;
	age?: number;
  isStudent?: boolean;
}

const personList = new LinkedList<Person>();

personList.append({name:"Reynaldo", age: 56});
personList.append({name: "Alexandra", age: 23});
personList.append({name: "Robert"});

console.log(personList);


personList.delete();


personList.print();











