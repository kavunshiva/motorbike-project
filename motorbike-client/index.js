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
        $(`#${bike.id}`).mouseover(function(){displayImage(bike.brand)})
        $(`#${bike.id}`).mouseout(dropImage)
      }
    })
  })

})

function displayImage(brand){
  let bikeImage = {
    "Harley-Davidson": "http://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my17/carousel/dom/17-hd-fat-boy-s-large.png",
    "BMW": "http://www.motorcycle-usa.com/wp-content/uploads/2015/12/BMW-RnineT-2016.jpg",
    "Yamaha": "http://www.yamaha-motor.ca/images/pages/products/units/MC/small/2017_YZF-R6_blue_3_t.png",
    "Suzuki": "http://www.motorcycle-usa.com/wp-content/uploads/2016/09/GSX-R1000_BLU_L6.jpg"

    // "http://pop.h-cdn.co/assets/16/45/moto3.jpg"
  }
  $('#bike-image').attr('src', bikeImage[brand])
}

function dropImage() {
  $('#bike-image').attr('src', '')

}

const displayBikes = function(data) {
  $bikes = $('#bikes')
  $bikes.html = ""
  data.forEach(function (bike) {
    $bikes.append(`<li id="${bike.id}"><strong>Brand:</strong> ${bike.brand}, <strong>Style:</strong> ${bike.style}, <strong>CC's:</strong> ${bike.cc}, <strong>Year:</strong> ${bike.year}</li>`)
    $(`#${bike.id}`).mouseover(function(){displayImage(bike.brand)})
    $(`#${bike.id}`).mouseout(dropImage)
  })
}

function fetchData() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/v1/bikes",
    success: displayBikes
  })

}
