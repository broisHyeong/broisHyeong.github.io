
// function btnClick() {
//   const answer1 = document.getElementById('answer1');
  
//   if(answer1.style.display === 'none') {
//     answer1.style.display = 'block';
//   }else {
//     answer1.style.display = 'none';
//   }
// }

// const q_list = document.getElementById('q_list');
// const answer1 = document.getElmentById('answer1');

// $(document).ready(function(){// memu 클래스 바로 하위에 있는 a 태그를 클릭했을때
//   $("q_list").click(function(){// 현재 클릭한 태그가 a 이기 때문에
//     // a 옆의 태그중 ul 태그에 hide 클래스 태그를 넣던지 빼던지 한다.
//     $(this).next("answer1").toggleClass("hide");
//   });
// });

var q_list = document.getElementsByClassName("q_list");
var i;

for (i = 0; i < answer1.length; i++) {
  q_list[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer1 = this.nextElementSibling;
    if (answer1.style.display === "block") {
      answer1.style.display = "none";
    } else {
      answer1.style.display = "block";
    }
  });
}

