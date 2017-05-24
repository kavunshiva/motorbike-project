$( document ).ready(function(){
  fetchData()

})

function fetchData() {
  $.ajax({
    url: "http://localhost:3000/api/v1/bikes",
    success: function(data) {
      debugger
    }
  })

}
