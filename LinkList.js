
class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}


class SingleLinkedList{

	constructor(){
			this.head = null;
			this.tail = null;
			this.length = 0;
	}
	
	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}else{
			
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

    pop(){
        if (!this.length) {
            return null;
          } else {
                let currentNode = this.head;
                let secondLastNode = this.head;
                while (currentNode.next) {
                    secondLastNode = currentNode;
                    currentNode = currentNode.next;
                }
                
                secondLastNode.next = null;
                
                this.tail = secondLastNode;
                
                this.length -= 1;
               
                if (!this.length) {
                    this.head = null;
                    this.tail = null;
                }
               
                return this;
            }
    }
	size(){
        return this.length
    }
}

var link = new SingleLinkedList();
link.push(1);
link.push(2);