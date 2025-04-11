// JavaScript program to demonstrate building
// and inserting in a Fibonacci heap

class Node {
  constructor() {
    this.parent = null; // Assign data
    this.child = null; // Initialize next as null
    this.left = null;
    this.right = null;
    this.key = -1;
    this.degree = 0;
  }
}

// Creating min pointer as "mini"
let mini = new Node();

// Declare an integer for number of nodes in the heap
let no_of_nodes = 0;

// Function to insert a node in heap
function insertion(val , mini , chi) {
  let new_node = new Node();
  new_node.key = val;
  new_node.parent = null;
  new_node.child = chi;
  new_node.left = new_node;
  new_node.right = new_node;
  new_node.degree = 0;

  if(chi != null)
  {
    new_node.degree = chi.degree + 1;
  }

  next = mini
  console.log(mini)
  if(mini.key == -1)
  {
    mini = new_node;
    return mini;
  }
  // done = false;
  // while(next.key < val && (next != mini || done === false))
  // {
  //   console.log("hi");
  //   done = true;
  //   next = next.right;
  // }
    next.left.right = new_node;
    new_node.right = next;
    new_node.left = next.left;
    next.left = new_node;
    if(mini.key > new_node.key)
    {
        mini = new_node;
      }
    return mini;
}

const drawArrow = (context, x1, y1, x2, y2, t = 0.9) => {
 
    const arrow = {
      dx: x2 - x1,
      dy: y2 - y1
  };
    const middle = {
      x: arrow.dx * t + x1,
      y: arrow.dy * t + y1
  };
  const tip = {
      dx: x2 - middle.x,
      dy: y2 - middle.y
  };
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(middle.x, middle.y);
    context.moveTo(middle.x + 0.5 * tip.dy, middle.y - 0.5 * tip.dx);
  context.lineTo(middle.x - 0.5 * tip.dy, middle.y + 0.5 * tip.dx);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
};

  
// Usage example:
  

function showMin()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y - 100, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("MIN", x + 1, y + 2 - 100);
    ctx.stroke()
    // console.log("Hi")

    drawArrow(ctx , x ,y - 100 + 24 , x , y - 24 , 0.8)
    // createRectangle()
}

function createLink(x , y , x1 , y1)
{
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

// Function to display the heap
function display(mini , extra , first , parx , pary , obj , show) {
  let ptr = mini;
  if (ptr === null) {
    console.log("The Heap is Empty");
  } else {
    console.log("The root nodes of Heap are: ");
    // showMin()

    // console.log(ptr.key.toString());
    // redrawInsertion(ptr.key.toString() , 0)
    // ptr = ptr.right;
    // if (ptr !== mini) {
      //   console.log("-->");
      // }
      
    var done = false
    while ((ptr !== mini || done === false) && ptr.right !== null) {
      console.log(ptr.key.toString());
      console.log("hi1")
      curr = ptr
      
      var objects = []
      while(curr.child !== null)
      {
        console.log("hi2")
        curr = curr.child;
        display(curr.left , extra + 75 , false , x , y , objects , false)
        x -= 75;
        // redrawInsertion(curr.key.toString() , 50)
        for(var i = 0 ; i < objects.length ; i++)
        {
          // console.log(obj[i])
        
          createLink(objects[i] , y + 54 + extra  , x , y + extra + 18 , objects , false)
        }
      }
      console.log(first)
      console.log(done)
      console.log(ptr.key)
      if(done === false && first === true){
        console.log("Gone")
        showMin()
      }
      console.log(obj)
      obj.push(x)
      redrawInsertion(ptr.key.toString() , extra , parx , pary)
      done = true
      
      if(first == false)
      {
        ptr = ptr.left;
      }
      else
      {
        if(ptr.degree == 0 && show == true)
        {
          createLink(400 - 100 ,80 , x - 75 , y - 20);
        }
        else if(ptr.degree == 1 && show == true)
        {
          createLink(440 - 100 ,80 , x - 75 , y - 20);
        }
        else if(ptr.degree == 2 && show == true)
        {
          createLink(480 - 100 ,80 , x - 75 , y - 20);
        }
        else if(ptr.degree == 3 && show == true)
        {
          createLink(520 - 100 ,80 , x - 75 , y - 20);
        }
        ptr = ptr.right;
      }
    }
    console.log("<br>");
    console.log(`The heap has ${no_of_nodes} nodes<br>`);
  }
}

// Function to find min node in the heap
function find_min() {
  var curr = mini;
  var first = mini;
  var done = true;
  while(curr !== null && (curr !== first || done === true))
  {
    done = false;
    if(curr.key < mini.key)
    {
      mini = curr;
    }
    curr = curr.right;
  }
}

// Driver code

var x;
var y;


function initParam()
{
    x = 95
    y = 300
}

function redrawInsertion(num , extra , xside , yside)
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y + extra, 20, 0, 2 * Math.PI);
    ctx.font = "15px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    console.log("extra" + extra)
    ctx.fillText(num, x , y + 5 + extra);
    ctx.stroke()
    // createLink(x, yside , x - 20 , y + extra)
    x += 75;
    
}

function staticList()
{

    let new_node = new Node();
    new_node.key = 8;
    new_node.parent = mini;
    new_node.child = null;
    new_node.left = new_node;
    new_node.right = new_node;
    new_node.degree = 0;
    mini.child = new_node;
    new_node.parent = mini;

    let new_node1 = new Node();
    new_node1.key = 7;
    new_node1.parent = mini;
    new_node1.child = null;
    new_node1.left = new_node;
    new_node1.right = new_node;
    new_node1.degree = 1;

    new_node.right = new_node1;
    new_node1.right = new_node;
    new_node1.left = new_node;
    new_node.left = new_node1

    let new_node2 = new Node();
    new_node2.key = 6;
    new_node2.parent = mini;
    new_node2.child = null;
    new_node2.left = new_node2;
    new_node2.right = new_node2;
    new_node2.degree = 0;

    new_node1.child = new_node2;
    new_node2.parent = new_node1;

    let new_node3 = new Node();
    new_node3.key = 5;
    new_node3.parent = mini;
    new_node3.child = null;
    new_node3.left = new_node;
    new_node3.right = new_node;
    new_node3.degree = 2;
    new_node.right = new_node1;
    new_node1.right = new_node3;
    new_node1.left = new_node;
    new_node.left = new_node3
    new_node3.right = new_node;
    new_node3.left = new_node1;

    let new_node4 = new Node();
    new_node4.key = 4;
    new_node4.parent = mini;
    new_node4.child = null;
    new_node4.left = new_node4;
    new_node4.right = new_node4;
    new_node4.degree = 0;

    new_node3.child = new_node4;
    new_node4.parent = new_node3;

    
    let new_node5 = new Node();
    new_node5.key = 3;
    new_node5.parent = mini;
    new_node5.child = null;
    new_node5.left = new_node2;
    new_node5.right = new_node2;
    new_node5.degree = 1;
    
    new_node4.right = new_node5;
    new_node5.right = new_node4;
    new_node5.left = new_node4;
    new_node4.left = new_node5;
    
    let new_node6 = new Node();
    new_node6.key = 2;
    new_node6.parent = mini;
    new_node6.child = null;
    new_node6.left = new_node6;
    new_node6.right = new_node6;
    new_node6.degree = 0;

    new_node5.child = new_node6;
    new_node6.parent = new_node5;
    

    let new_node7 = new Node();
    new_node7.key = 10;
    new_node7.parent = mini.right;
    new_node7.child = null;
    new_node7.left = new_node7;
    new_node7.right = new_node7;
    new_node7.degree = 0;
    mini.right.child = new_node7;
    new_node7.parent.degree++;
    console.log("hello")
    clearCanvas()
    initParam()
    var objects = []
    display(mini , 0 , true , x , y , objects , false)
}


function create_node(){
    var obj = document.getElementById('insert').value;
    no_of_nodes++;
    clearCanvas()
    initParam()
    // mini = new Node()
    mini = insertion(Number(obj) , mini , null)
    console.log(mini)
    var objects = []
    display(mini , 0 , true , x , y , objects , false)
    find_min(mini)
    // if(no_of_nodes == 3) staticList()
}

function clearCanvas()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function unionList(other)
{
    find_min();
    var curr1 = mini;
    var first1 = mini;
    var first2 = other;
    var curr2 = other;
    var newlist = new Node();
    var done1 = false , done2 = false;
    console.log(mini)
    while((curr1.right != first1 || done1 == false) && (done2 == false || curr2.right != first2))
    {
      console.log("count")
      if(curr1.degree <= curr2.degree){
        console.log(curr1.degree)
        console.log(" = ")
        console.log(curr1.key , curr2.key)
        console.log(curr2.degree)
        done1 = true;
        newlist = insertion(curr1.key , newlist , curr1.child)
        curr1 = curr1.right;
      }
      else
      {
        console.log(curr1.degree)
        console.log(curr1.key , curr2.key)
        console.log("sec = ")
        console.log(curr2.degree)
          // console.log(curr2)
          done2 = true;
          newlist = insertion(curr2.key , newlist , curr2.child)
          curr2 = curr2.right;
      }
    }
    while(curr1 != first1 || done1 == false && curr1 != null)
    {
      done1 = true;
      newlist = insertion(curr1.key , newlist , curr1.child);
      curr1 = curr1.right;
    }
    while(curr2 != first2 || done2 == false && curr2 != null)
    {
      done2 = true;
      newlist = insertion(curr2.key , newlist , curr2.child);
      curr2 = curr2.right;
    }
    console.log(newlist)
    mini = newlist;
    find_min();
    var objects = []
    clearCanvas()
    initParam()
    display(mini , 0 , true , x , y , objects , false)
    find_min()
}



async function extractMin()
{
    var newList
    find_min();
    console.log(mini)
    if(mini.child === null) 
    {
      if(mini.right === mini)
      {
        mini.key = -1;
      }
      else
      {
        mini.right.left = mini.left;
        mini.left.right = mini.right;
        mini = mini.right;
        find_min();
      }
     
    }
    else{
    newList = mini.child;
    if(mini.right != mini)
    {
        mini.right.left = mini.left;
        mini.left.right = mini.right;
        mini = mini.right;
        unionList(newList)
    }
    else
    {
      mini = newList;
    }
  }

  var objects = []

    clearCanvas()
    initParam()
    createRectangle()
    display(mini , 0 , true , x , y , objects , false)
    find_min()
      await new Promise(r => setTimeout(r, 1000));
  next_step()
}

// Function to decrease the key of a node in the heap
function decreaseKey(node, newKey) {
  // Check if the new key is greater than the current key
  if (newKey > node.key) {
    console.log("New key is greater than current key. Cannot decrease.");
    return;
  }

  // Update the key value
  node.key = newKey;
  let parent = node.parent;

  // If node is not a root and its key is less than its parent's key
  if (parent !== null && node.key < parent.key) {
    // Cut the node from its parent and add it to the root list
    cut(node, parent);
    cascadingCut(parent);
  }

  // Update the minimum pointer if needed
  if (node.key < mini.key) {
    mini = node;
  }

  // Redraw the heap after decreasing key
  clearCanvas();
  initParam();
  var objects = [];
  display(mini, 0, true, x, y, objects, false);
}

// Helper function for decreaseKey - cuts a child from its parent
function cut(child, parent) {
  // If child is the only child of parent
  if (child.right === child) {
    parent.child = null;
  } else {
    // Remove child from the child list
    if (parent.child === child) {
      parent.child = child.right;
    }
    child.left.right = child.right;
    child.right.left = child.left;
  }

  // Decrease parent's degree
  parent.degree--;

  // Add child to the root list
  child.right = mini;
  child.left = mini.left;
  mini.left.right = child;
  mini.left = child;

  // Set parent to null as it's now a root node
  child.parent = null;
  child.mark = false;
}

// Helper function for decreaseKey - performs cascading cuts
function cascadingCut(node) {
  let parent = node.parent;
  
  if (parent !== null) {
    // If node is not marked, mark it
    if (!node.mark) {
      node.mark = true;
    } else {
      // If node is already marked, cut it and continue cascading
      cut(node, parent);
      cascadingCut(parent);
    }
  }
}

// Function to delete a node from the heap
function deleteKey(node) {
  // Decrease the key to negative infinity (or the minimum possible value)
  decreaseKey(node, Number.NEGATIVE_INFINITY);
  
  // Extract the minimum node (which should now be the node we want to delete)
  extractMin();
}

// Add mark property to Node class constructor
// This modification should be added to the Node class definition
// Add this line inside the Node constructor:
// this.mark = false;

// To demonstrate usage of decreaseKey and deleteKey, you might want to add 
// functions to find nodes by their key values
function findNode(key) {
  // Helper function to find a node in the heap with the given key
  // Returns null if node is not found
  
  if (mini === null || mini.key === -1) {
    return null;
  }
  
  // Search in the root list and their children
  let start = mini;
  let current = mini;
  let found = null;
  let done = false;
  
  do {
    // Check current node
    if (current.key === key) {
      return current;
    }
    
    // Check children of current node
    if (current.child !== null) {
      let childNode = searchInChildList(current.child, key);
      if (childNode !== null) {
        return childNode;
      }
    }
    
    // Move to next node in root list
    current = current.right;
    done = true;
  } while (current !== start || !done);
  
  return null;
}

// Helper function to search in a child list
function searchInChildList(startNode, key) {
  let current = startNode;
  let start = startNode;
  let done = false;
  
  do {
    // Check current node
    if (current.key === key) {
      return current;
    }
    
    // Check children of current node
    if (current.child !== null) {
      let result = searchInChildList(current.child, key);
      if (result !== null) {
        return result;
      }
    }
    
    // Move to next node in list
    current = current.right;
    done = true;
  } while (current !== start || !done);
  
  return null;
}

// UI functions to interact with decreaseKey and deleteKey
function decreaseKeyUI() {
  var keyToFind = document.getElementById('findKey').value;
  var newKeyValue = document.getElementById('newKey').value;
  
  if (!keyToFind || !newKeyValue) {
    alert("Please enter both the key to find and the new key value");
    return;
  }
  
  var node = findNode(Number(keyToFind));
  
  if (node === null) {
    alert("Node with key " + keyToFind + " not found in the heap");
    return;
  }
  
  decreaseKey(node, Number(newKeyValue));
}

function deleteKeyUI() {
  var keyToDelete = document.getElementById('deleteKey').value;
  
  if (!keyToDelete) {
    alert("Please enter the key to delete");
    return;
  }
  
  var node = findNode(Number(keyToDelete));
  
  if (node === null) {
    alert("Node with key " + keyToDelete + " not found in the heap");
    return;
  }
  
  deleteKey(node);
}

// Note: You'll need to add UI elements to your HTML to use these functions:
// - Input field with id 'findKey' for the key to decrease
// - Input field with id 'newKey' for the new key value
// - Button to call decreaseKeyUI()
// - Input field with id 'deleteKey' for the key to delete
// - Button to call deleteKeyUI()