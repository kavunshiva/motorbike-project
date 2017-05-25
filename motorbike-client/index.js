$( document ).ready(function(){
  fetchData()
  $('#create-bike').submit(function(event) {
    event.preventDefault()
    let values = $(this).serialize()
    $(':input', this).not(':button, :submit').val('')
    $.ajax({
      type: "POST",
      data: values,
      url: "http://localhost:3000/api/v1/bikes",
      success: function(bike) {
        $('#bikes').append(`<li id="${bike.id}"><strong>Brand:</strong> ${bike.brand}, <strong>Style:</strong> ${bike.style}, <strong>CC's:</strong> ${bike.cc}, <strong>Year:</strong> ${bike.year}</li>`)
        $(`#${bike.id}`).mouseover(displayImage)
        $(`#${bike.id}`).mouseout(dropImage)
      }
    })
  })

})

function displayImage(){
  let bikeImage = "http://pop.h-cdn.co/assets/16/45/moto3.jpg"
  $('#bike-image').attr('src', bikeImage)
}

function dropImage() {
  $('#bike-image').attr('src', '')

}

const displayBikes = function(data) {
  $bikes = $('#bikes')
  $bikes.html = ""
  data.forEach(function (bike) {
    $bikes.append(`<li><strong>Brand:</strong> ${bike.brand}, <strong>Style:</strong> ${bike.style}, <strong>CC's:</strong> ${bike.cc}, <strong>Year:</strong> ${bike.year}</li>`)
  })
}

function fetchData() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/v1/bikes",
    success: displayBikes
  })

}
