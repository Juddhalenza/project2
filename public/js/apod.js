// /* eslint-disable indent */
// /* eslint-disable prettier/prettier */
// var url = "https://api.nasa.gov/planetary/apod?date=2019-10-07&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78";
// $(document).ready(function() {
//     var apodData = [];
//         function displayData() {
//             var a = $(this).data("");
//             console.log(a);

//             var queryURL = "https://api.nasa.gov/planetary/apod?date=" + a + "&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78";
//             console.log(queryURL);

//             $.ajax({
//                 url: queryURL,
//                 method: "GET"
//             }).done(function(response) {
//                 var results = response.data;
//                 console.log(results);
//                 for (var i = 0; i < results.length; i++) {
                    
//                     var apodDiv = $("<div class='uk-margin' id='apod_content'>");

//                     var apod_date = results[i].date;
//                     var apod_exp = results[i].explanation;
//                     var apod_title = results[i].title;
//                     var apod_src = results[i].url;

//                     var showImg = $("<img>");
//                     var expl = $("<p>").text(apod_exp);
//                     var showDate = $("<h4 id='apod_date'>").text(apod_date);
//                     var showTitle = $("<h4 id='apod_title'>").text(apod_title);

//                     showImg.attr("src", apod_src);
//                     showImg.addClass("apod_img_id");

//                     apodDiv.append(showImg);
//                     apodDiv.append(expl);
//                     apodDiv.append(showDate);
//                     apodDiv.append(showTitle);
//                 }
//             });
//         }
      
    
//     $("#apod_search_btn").on("click", function(event) {
//         event.preventDefault();
//         var dateSearch = $("#apod_search_field").val().trim();
//         apodData.push(dateSearch);
//         console.log(apodData);
//         $("#apod_search_field").val("");
//     });        

//     $(document).on("click", "#apod_search_btn", displayData);

// });