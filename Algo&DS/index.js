// Exercice 1
const BubbleSort=(array,N)=> {

	for (var i = 0; i < N; i++) {
		for (var j = 0; j < (N - i - 1); j++) {
			if (array[j] > array[j + 1]) {

				var temp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = temp
			}
		}
	}
	return array;
}


// var array = [2,5,8,3,4,1,7,10];
// var N = 8

//  console.log(BubbleSort(array,N));



//Exercice 2
const BinarySearch=(arr, n, K)=>
{
    for(let i = 0; i < n; i++)
    
        if (arr[i] == K)
            return i;
    return -1;
}

// let arr = [ 1, 3, 5, 6 ];
// let n = arr.length;
// let K = 3;
  
// console.log(BinarySearch(arr, n, K));




//Exercice 3 
const createNode=(value) =>{
    return {
      value: value,
      next: null
    };
  }
  
  const createLinkedList=() =>{
    return {
      head: null
    };
  }
  
  const addNode=(linkedList, value) =>{
    const newNode = createNode(value);
  
    if (!linkedList.head) {
      linkedList.head = newNode;
    } else {
      let current = linkedList.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    return linkedList;
  }
  
  const printList=(linkedList)=> {
    let current = linkedList.head;
    let result = '';
  
    while (current) {
      result += current.value + ' ';
      current = current.next;
    }
  
    return result.trim();
  }
  var myLinkedList = createLinkedList();
  myLinkedList = addNode(myLinkedList, 4);
  myLinkedList = addNode(myLinkedList, 7);
  myLinkedList = addNode(myLinkedList, 10);
  console.log(printList(myLinkedList)); 
  
 
