document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('.main_rate .rate_iconbox input[type=radio]');
  const rateVlalue = document.getElementById('rateValue');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      updateStarIcons();
      updateRateValue();
    });
  });

  function updateStarIcons() {
    let checkedIndex = -1;

    // 체크된 버튼 인덱스 찾기
    radioButtons.forEach(function (radioButton, index) {
      if (radioButton.checked) {
        checkedIndex = index;
      }
    })

    // 체크된 별 이전의 별 변경하기
    radioButtons.forEach(function (radioButton, index) {
      const label = radioButton.nextElementSibling;
      const starIcon = label.querySelector('.star_icon');

      if (matchMedia("screen and (max-width: 426px)").matches) {
        if (index <= checkedIndex) {
          starIcon.style.backgroundImage = 'url(../img/star-fill-small.svg)';
        } else {
          starIcon.style.backgroundImage = 'url(../img/star-blank-small.svg)';
        }
      } else {
        if (index <= checkedIndex) {
          starIcon.style.backgroundImage = 'url(../img/star-fill.svg)';
        } else {
          starIcon.style.backgroundImage = 'url(../img/star-blank.svg)';
        }
      }
      
    });
  }

  function updateRateValue() {
    let checkedCount = 0;

    radioButtons.forEach(function (radioButton, index) {
      if (radioButton.checked) {
        checkedCount += (index+1) * 0.5;
      }
    });
    rateVlalue.textContent = checkedCount.toFixed(1);
  }
})

document.addEventListener("DOMContentLoaded", function() {
  var heart_btn1 = document.querySelector(".heart_btn1");
  var heart_btn2 = document.querySelector(".heart_btn2");

  // 초기에 첫 번째 내용 보이기
  heart_btn1.style.display = "block";

  heart_btn1.addEventListener("click", function() {
    if (heart_btn1.style.display === "block") {
      heart_btn1.style.display = "none";
      heart_btn2.style.display = "block";
    } else {
      heart_btn1.style.display = "block";
      heart_btn2.style.display = "none";
    }
  });

  heart_btn2.addEventListener("click", function() {
    if (heart_btn1.style.display === "block") {
      heart_btn1.style.display = "none";
      heart_btn2.style.display = "block";
    } else {
      heart_btn1.style.display = "block";
      heart_btn2.style.display = "none";
    }
  });
});
