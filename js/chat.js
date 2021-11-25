const clone = $('.bubble').clone();

// for (i=0; i<5; i++){
//   $('.chat-box').append(clone);
// }

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let date = "<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>";

var name = "You";

setInterval(() => {

            $.getJSON(
                "https://pasuyo.store/ccis/ccis-chat-api",function(data){
                    $('.chat-box').html('');
                    $.each(data,function(key,value){

                        if(name == value.name){
                          $('.chat-box').append(
                            
                              "<div class='bubble-you'>"+
                                "<h3 class='you'>"+value.name+"</h3>"+
                                "<p class='you'> "+value.message+"</p>"+
                              "</div>"
                            
                          );
                        }
                        else{
                          $('.chat-box').append(
                            "<div class='b'>"+
                              "<div class='bubble'>"+
                                "<h3>"+value.name+"</h3>"+
                                "<p>"+value.message+"</p>"+
                              "</div>"+
                            "</div>"
                          );
                        }
                    });
                });

        }, 500);
  


$('#show-chats').click(()=>{
  $('.message-container').css({'height':'500px'});
  
  setTimeout(function() {
     $('.chat-box').css({'display':'flex'});
     $('.action-box').css({'display':'flex'});
    
   }, 300);
  
  
});

$('#hide-chats').click(()=>{
  
  $('.message-container').css({'height':'20px'});
  
   setTimeout(function() {
     $('.chat-box').css({'display':'none'});
     
     $('.action-box').css({'display':'none'});
   }, 5);
  
  
});

$('.send-btn').click(()=>{
  var name = "You";
  var message = $('.input-text').val();
  var url = "https://pasuyo.store/ccis/ccis-add-message?name="+name+"&message="+message+"&date="+date+"";
  $.post(url);
  
//   $('.chat-box').prepend(
    
//     "<div class='bubble-you'>"+
//         "<h3 class='you'>"+name+"</h3>"+
//         "<p class='you'>"+message+"</p>"+
//       "</div>"+
//     "</div>"
  
//   );
  $('.input-text').val('');
 
  
});