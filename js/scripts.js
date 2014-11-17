$(document).ready(function() {
  $('form#new-triangle').submit(function(event) {
    event.preventDefault();

    var triangle = {
      side1: $('input#side1').val(),
      side2: $('input#side2').val(),
      side3: $('input#side3').val(),
      family: function() {
        if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
          $('div.equ-list ul').append("<li class='list-group-item'>"+ this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
        } else if ((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)) {
          $('div.iso-list ul').append("<li class='list-group-item'>"+ this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
        } else {
          $('div.scal-list ul').append("<li class='list-group-item'>"+ this.side1 + ", " + this.side2 + ", " + this.side3 + "</li>");
        }
      }
    };

    if (triangle.side1 == '' || triangle.side2 == '' || triangle.side3 == '') {
      window.alert("Please enter valid side lengths");
      $('input#side1').val('');
      $('input#side2').val('');
      $('input#side3').val('');
    } else {
      triangle.family();
    }

    $('input#side1').val('')
    $('input#side2').val('')
    $('input#side3').val('')

  });
});
