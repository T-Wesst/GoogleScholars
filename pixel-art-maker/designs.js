// DEFINE VARIABLES
var inputColor = $('#colorPicker'),
      inputWidth = $('#inputWidth'),
      inputHeight = $('#inputHeight'),
      submit = $('input[type=submit]');
      table = document.getElementById('pixelCanvas');
// When height and width are submitted, call makeGrid() function
submit.on('click', function makeGrid(){
  /* while table element has first child element
      remove first child element from table*/
  while(table.firstChild)
    table.removeChild(table.firstChild);
  // then add cells to table
  for(var i = 0; i < inputHeight.val(); i++){
    // as var i is < than height, create table rows
    var row = document.createElement('tr');
    for(var j = 0; j < inputWidth.val(); j ++){
      // as var j is < width, create table data (cells)
      var cell = document.createElement('td');
      //attach cell to row
      row.appendChild(cell);
    }
    // attach row to table
    table.appendChild(row);
  }
  //do not refresh page
  return false;
});
// When a cell (td) is clicked, call colorCell() function
$(table).on('click', 'td', function colorCell(){
  // set cell (td) background color to picked color
  $(this).css('background-color', inputColor.val());
});
