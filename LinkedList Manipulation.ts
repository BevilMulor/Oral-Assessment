//LinkedList Manipulation Task: 
//Write a TypeScript class for a linked list with methods to add, remove, and find elements. 

//Focus: Class-based data structure and understanding of node manipulation.

class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList<T> {
    head: ListNode<T> | null;
  
    constructor() {
      this.head = null;
    }
 
    add(value: T): void {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    
    remove(value: T): boolean {
      if (!this.head) return false;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return true;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next) {
        current.next = current.next.next;
        return true;
      }
      return false;
    }
  
    
    find(value: T): ListNode<T> | null {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null;
    }
  
    
    print(): void {
      let current = this.head;
      const elements: T[] = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(" -> "));
    }
  }
  
  // Usage Example
  const list = new LinkedList<number>();
  list.add(1);
  list.add(2);
  list.add(3);
  list.print(); 
  
  console.log(list.find(2)); 
  list.remove(2);
  list.print(); 
  

