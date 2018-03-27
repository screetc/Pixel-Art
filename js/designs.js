//Building the table
function makeGrid() {
  // Setting constant for width and height
  const rows = $("#input_height").val();
  const cols = $("#input_width").val();
  // Setting variable for the grid
  let table = $("#pixel_canvas");
  //Removing previuos table
  table.children().remove();
  //Creating rows...
  let i = 0;
  while (i < rows) {
    table.append("<tr class='pixelgrid'></tr>");
    i++;
    //... and columns
    for (let j = 0; j < cols; j++) {
      table
        .children()
        .last()
        .append("<td class='pixelgrid'></td>");
    }
  }
  //Setting background-color
  table.on("click", "td", function() {
    let color = $("input[type='color']").val();
    $(this).css("background-color", color);
  });
}

//remove grid button
$("#remove-grid").click(function() {
  let px = $(".pixelgrid");
  px.css("border-collapse", "collapse");
  px.css("border", "none");
  let table = $("#pixel_canvas");
  table.css("border-collapse", "collapse");
  table.css("border", "none");
});

//re-add grid button
$("#add-grid").click(function() {
  let px = $(".pixelgrid");
  px.css("border-styles", "solid");
  px.css("border-color", "#000");
  let table = $("#pixel_canvas");
  table.css("border-styles", "solid");
  table.css("border-color", "#000");
});

$("#submit-reset").click(function(proj) {
  proj.preventDefault();//to avoid page reload
  makeGrid();//call the function
});
