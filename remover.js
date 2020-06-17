/**
 * - listen right click
 * - select clicked element
 * - visually mark selected element
 * - remove selected element on Delete key
 * - cancel selection on Esc
*/
let selectedElement = null;
let oldBorder = 'none';

export function initRemover() {
  document.addEventListener('contextmenu', handleRightClick);
  document.addEventListener('keyup', handleKeyUp);

  return () => {
    if (selectedElement) {
      cancelSelection();
    }

    document.removeEventListener('contextmenu', handleRightClick);
    document.removeEventListener('keyup', handleKeyUp);
  };
}

function handleRightClick(event) {
  event.preventDefault();

  if (selectedElement) {
    cancelSelection();
  }

  selectElement(event.target);
}

function handleKeyUp(event) {
  if (!selectedElement) {
    return;
  }

  switch (event.code) {
    case 'Backspace':
      removeSelectedElement();
      break;
    case 'Escape':
      cancelSelection();
      break;
  }
}

function cancelSelection() {
  selectedElement.style.border = oldBorder;
  selectedElement = null;
}

function selectElement(element) {
  selectedElement = element;
  oldBorder = selectedElement.style.border;
  selectedElement.style.border = '1px solid red';
}

function removeSelectedElement() {
  selectedElement.remove();
  selectedElement = null;
}
