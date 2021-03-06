//Let credit be given to Erik Falor whose work heavily influenced the following code
function fib(n, node) {
  var prevTree = node.querySelector('div.childDiv');
  if(prevTree){
    node.removeChild(prevTree);
  }
  var tree = recursiveFib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'fib');
}
function recursiveFib(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'childDiv');
  // leaf nodes aka. base case
  n = parseInt(n);
  if (n < 2) {
    if (n === 0) {
      value = 0;
    } 
    else if (n === 1) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
  } 
  else {
    var left = recursiveFib(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var right = recursiveFib(n - 2);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}
function pell(n, node) {
  var prevTree = node.querySelector('div.childDiv');
  if(prevTree){
    node.removeChild(prevTree);
  }
  var tree = recursivePell(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'pell');
}
function recursivePell(n) {
  var value;
  var pellDiv = document.createElement('div');
  pellDiv.setAttribute('class', 'childDiv');
  // leaf nodes aka. base case
  n = parseInt(n);
  if (n < 2) {
    if (n === 0) {
      value = 0;
    }
    if (n === 1) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pellDiv.appendChild(p);
  } 
  else {
    var left = recursivePell(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var right = recursivePell(n - 2);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
    value = (left.value * 2) + right.value;
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pellDiv.appendChild(p);
    pellDiv.appendChild(left.html);
    pellDiv.appendChild(right.html);
  }
  return {
    'value': value,
    'html': pellDiv
  };
}
function trib(n, node) {
  var prevTree = node.querySelector('div.childDiv');
  if(prevTree){
    node.removeChild(prevTree);
  }
  var tree = recursiveTrib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'trib');
}
function recursiveTrib(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'childDiv');
  // leaf nodes aka. base case
  n = parseInt(n);
  if (n < 3) {
    if (n === 0) {
      value = 0;
    } 
    else if (n === 1 || n === 2) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    div.appendChild(p);
  } 
  else {
    var left = recursiveTrib(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var center = recursiveTrib(n - 2);
    divClass = center.html.getAttribute('class');
    center.html.setAttribute('class', divClass + ' centerChild');
    var right = recursiveTrib(n - 3);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
    value = left.value + center.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    div.appendChild(p);
    div.appendChild(left.html);
    div.appendChild(center.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}

function sliderAction(me){
  var form = me.parentNode;
  var button = form.querySelector('button');
  var parentID = form.parentNode.id;
  button.textContent = parentID.toLocaleUpperCase()[0] + parentID.slice(1) + '(' + me.value + ')';
}

function buttonAction(me){
  var form = me.parentNode;
  var slider = form.querySelector('input');
  var value = slider.value;
  var parentID = form.parentNode.id;
  window[parentID](value, form.parentNode);
}
