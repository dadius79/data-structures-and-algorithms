class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode.value === temp.value) return undefined;
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        let temp = this.root;
        while(temp){
            if(value < temp.value){
                temp = temp.left;
            }else if(value > temp.value){
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }

    //Depth First Search Pre-Order
    DFSPreOrder(){
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    //Depth First Search Post-Order
    DFSPostOrder(){
        let results = [];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }

    //Depth First Search In Order
    DFSInOrder(){
        let results = [];
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }
}
