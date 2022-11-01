var myExtObject = (function () {

  return {
    generateGrid: function (n) {
      color = "red"
      mouseDown = false
      document.getElementById("grid").innerHTML = '';
      for (var i = 0; i < n; i++) {
        document.getElementById("grid").innerHTML += '<div class="row" id=\"row' + i + "\">";
        for (var j = 0; j < n; j++) {
          id = i * n + j
          document.getElementById("row" + i).innerHTML += '<div class="column_black" id=\"column' + (id) + '\"></div>';
          document.getElementById("column"+(id)).setAttribute("oncontextmenu","resetCell(" + (id) + ")");
          pxSize = 500 / n;

          document.getElementById("row"+i).style.height = (pxSize + 2)+'px';

          document.getElementById("column"+(id)).style.width = pxSize+'px';
          document.getElementById("column"+(id)).style.height = pxSize+'px';
        }

        //document.getElementById("grid").innerHTML+='</div>';
      }
    },
    setEventsListeners: function (n) {
      addEventListener("mouseup", () => mouseUpFunction());

      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          id = i * n + j
          changeColorEventListeners(id)
        }
      }
    }
  }

})(myExtObject || {})

color = ""
mouseDown = false
eraseCell = false

function mouseDownFunction(id, event) {
  mouseDown = true
  mouseEnterFunction(id, event)
}

function mouseUpFunction() {
  mouseDown = false
  eraseCell = false
}

function mouseEnterFunction(id, event) {
  if (event.which == 3)
    brushColor = "black"
  else
    brushColor = color

  if (mouseDown) {
    const currentCell = document.getElementById("column" + id);
    currentCell.className = "column_" + brushColor
  }
}

function drag(id) {
  mouseEnterFunction(id, event)
  mouseDown = false
}

function changeColorEventListeners(id) {
  const currentCell = document.getElementById("column" + id);
  //currentCell.className = "column_" + color
  currentCell.addEventListener("mousemove", () => mouseEnterFunction(id, event));
  currentCell.addEventListener("mousedown", () => mouseDownFunction(id, event));
  currentCell.addEventListener("drag", () => drag(id));

}

function resetCell(id) {
  const currentCell = document.getElementById("column" + id);
  currentCell.className = "column_black"
  eraseCell = true
}


document.oncontextmenu = function(e){
  //var evt = new Object({keyCode:93});
  stopEvent(e);
 }
 function stopEvent(event){
  if(event.preventDefault != undefined)
   event.preventDefault();
  if(event.stopPropagation != undefined)
   event.stopPropagation();
 }
