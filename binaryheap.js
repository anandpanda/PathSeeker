class BinaryHeap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    insert(value) {
        this.data.push(value);
        this.moveUp(this.data.length - 1);
    }

    moveUp(index) {
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1;

            if (this.compare(this.data[parent], this.data[index]) <= 0) {
                return;
            }

            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
        }
    }

    removeMin() {
        if (this.data.length === 0) {
            return null;
        }

        let min = this.data[0];
        let end = this.data.pop();

        if (this.data.length > 0) {
            this.data[0] = end;
            this.heapify(0);
        }

        return min;
    }

    heapify(index) {
        let length = this.data.length;
        let value = this.data[index];

        while (true) {
            let swap = null;
            let leftChildIdx = (index + 1) * 2 - 1;
            let rightChildIdx = leftChildIdx + 1;

            if (leftChildIdx < length) {
                let leftChild = this.data[leftChildIdx];
                if (this.compare(leftChild, value) < 0) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                let rightChild = this.data[rightChildIdx];
                if (swap === null && this.compare(rightChild, value) < 0 ||
                    swap !== null && this.compare(rightChild, this.data[leftChildIdx]) < 0) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) {
                return;
            }

            this.data[index] = this.data[swap];
            this.data[swap] = value;
            index = swap;
        }
    }
}

export { BinaryHeap };