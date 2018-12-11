let wrap = document.querySelector('.tagging-wrapper');
let wrapCoord = wrap.getBoundingClientRect();
let element = document.getElementsByClassName('tagging-element');

// when you click on the wrapper

wrap.addEventListener('click', function (e) {
  if (e.target === wrap) {
    changeElement();
  } else if (e.target.classList.contains('tagging-title') && !e.target.parentElement.classList.contains('grab-mode')) {
    changeElement();
  }
  let parent = e.target.parentElement;
  let delElement = parent.lastElementChild;
  delElement.classList.remove('hide');
  parent.classList.add('grab-mode');

  let wrCoord = parent.getBoundingClientRect();
  if (wrCoord.right >= wrapCoord.right) {
    delElement.classList.add('pull-left');
    parent.style.left = wrCoord.left + delElement.clientWidth - wrapCoord.left + 'px';
  } else if (e.target.classList.contains('delete')) {
    wrap.removeChild(e.target.parentElement);
  }
});

// transform tagging-element

function changeElement () {
  let delElement = document.querySelector('.delete:not(.hide)');
  if (delElement) {
    let parent = delElement.parentElement;
    let wrCoord = parent.getBoundingClientRect();
    if (delElement.classList.contains('pull-left')) {
      parent.style.left = wrCoord.left + delElement.clientWidth - wrapCoord.left + 'px';
    }
    delElement.classList.add('hide');
    parent.classList.remove('grab-mode');
  }
}

function moveAt(e, parent) {
  let delElement = parent.lastElementChild;
  let left = e.pageX - parent.offsetWidth / 2;
  if (left < wrapCoord.left) {
    left = wrapCoord.left;
    } else if (left + parent.clientWidth >= wrapCoord.right) {
      delElement.classList.add('pull-left');
      left = left - delElement.clientWidth;
    } else if (left + parent.clientWidth <= wrapCoord.right) {
      delElement.classList.remove('pull-left');
    }
  if (left + parent.clientWidth > wrapCoord.right) {
    left = wrapCoord.right - parent.clientWidth;
  }
  parent.style.left = left - wrapCoord.left + 'px';

  let top = e.pageY - parent.offsetHeight / 2;
    if (top < wrapCoord.top) {
        top = wrapCoord.top;
    } else if (top + parent.clientHeight > wrapCoord.bottom) {
        top = wrapCoord.bottom - parent.clientHeight;
    }
    parent.style.top = top - wrapCoord.top + 'px';
  }

wrap.addEventListener('mousedown', function (e) {
  let parent = e.target.parentElement;
  if (parent.classList.contains('tagging-element') && parent.classList.contains('grab-mode')) {
    document.onmousemove = function (e) {
      moveAt(e, parent);
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      element.onmouseup = null;
    };
  }
  // moveAt(e, parent);
  // element.style.position = 'absolute';
  // document.body.appendChild(element);

  

  // document.onmousemove = function (e) {
  //   moveAt(e, parent);
  // }

  // element.onmouseup = function() {
  //   document.onmousemove = null;
  //   element.onmouseup = null;
  // }
});


























// dragElement(document.querySelector('.tagging-wrapper'));

// function dragElement (elmnt) {
//   this.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;
//   if (document.querySelector('.tagging-element')) {
//     document.querySelector('.tagging-element').onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }
// }

// function dragMouseDown (e) {
//   e = e || window.event;
//   e.preventDefault();
//   this.pos3 = e.clientX;
//   this.pos4 = e.clientY;
//   document.onmouseup = closeDragElement;  
//   document.onmousemove = elementDrag;
// }

// function elementDrag (e) {
//   e = e || window.event;
//   e.preventDefault();
//   this.pos1 = this.pos3 - e.clientX;
//   this.pos2 = this.pos4 - e.clientY;
//   this.pos3 = e.clientX;
//   this.pos4 = e.clientY;
//   elmnt.style.top = (elmnt.offsetTop - this.pos2) + 'px';
//   elmnt.style.left = (elmnt.offsetLeft - this.pos1) + 'px';
// }

// function closeDragElement() {
//    document.onmouseup = null;
//   document.onmousemove = null;
// }