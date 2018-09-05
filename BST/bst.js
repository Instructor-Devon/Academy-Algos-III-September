function BSTNode(value) {

    this.Value = value;
    this.Left = null;
    this.Right = null;

    this.IsLeaf = function(){
        return this.Left === null && this.Right === null;
    }

    this.Add = function(val) {

        let newNode = new BSTNode(val);
         // check which side
         if (this.Value <= val) {
            // check right for null
            if (this.Right == null) {
                // if so, set newNode to right
                this.Right = newNode;
            }
            else {
                // add to Right, check EVERYTHING again
                // recurSION!!
                this.Right.Add(val);
            }
        }
        // look left
        else {
           
        }
    }

}

function BST() {
    this.Root = null;

    this.Add = function(val) {
        // initialize new node object
        let newNode = new BSTNode(val);
        
        // check if root is null
        if(this.Root == null) {
            // if so add there
            this.Root = newNode;
            return this;
        }
        
        // call .Add on Root node for the rest of .Add implementation
        this.Root.Add(val);
        return this;

    }
}
