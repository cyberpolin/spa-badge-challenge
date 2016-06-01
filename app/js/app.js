var show_badge = function(id){
  $.ajax({
    url: "http://172.16.50.131:3000/teachers/"+id,
    type: "GET"
  }).done(function(response) {
     var obj = JSON.parse(response);
     var badges_list = '';
     for (var i = 0; i < obj.badges.length; i++) {
      badges_list += '<li>'+obj.badges[i].name+' <button id="vote-up">UP</button><button id="vote-down">DOWN</button><span id="votes-total"> '+obj.badges[i].votes+'</span></li>'
    }
    document.getElementById("badges").innerHTML = '<p>'+obj.teacher.name+"'s Badges</p>"+
      '<ol>'+badges_list+'</ol>'
    ;
    console.log(response)
  });
}


$.ajax({
  url: "http://172.16.50.131:3000/teachers",
  type: "GET"
}).done(function(response) {
  var obj = JSON.parse(response);

  for (var i = 0; i < obj.length; i++) {
    console.log(obj[0].name);
    document.getElementById("teachers-list").innerHTML += '<li><a onclick="show_badge('+obj[i].id+')" href="#'+obj[i].id+'">' + obj[i].name + '</a></li>';
  }
})
