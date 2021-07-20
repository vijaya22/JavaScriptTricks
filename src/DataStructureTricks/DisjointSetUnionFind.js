/** Disjoint set union find implementation -  */

class DisjointSet{
    constructor(){
        this.parents = [];
    }

    find(x){
        if(typeof this.parents[x] !=  "undefined"){
            if(this.parents[x] < 0){
                return x;
            }
            else {
                this.find(this.parents[x])
            }
        }
        else{
            this.parents[x] = -1;
            return x;
        }
    }


    union(x ,y ){
        let xParent = this.find(x);
        let yParent = this.find(y);
        
        if(xParent != yParent){
            this.parents[xParent] += this.parents[yParent];
            this.parents[yParent] = xParent;
            return false;
        }
        else return true;
    }
    
    console_print(){
        console.log(this.parents);
    }

}

let dsu = new DisjointSet();
dsu.union(1,2);
dsu.console_print();
dsu.union(1,3);
dsu.console_print();
dsu.union(3,2);
dsu.console_print();
