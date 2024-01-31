// const q_list = document.querySelectorAll('.q_list');
// const answer = document.querySelectorAll('.answer');

// for (let i = 0; i < q_list.length; i++) {
//   q_list[i].addEventListener('click', function() {
//     // 해당 인덱스 i에 대응하는 answer 요소를 찾기
//     const correspondingAnswer = answer[i];
    
//     // 모든 answer 요소에서 'active' 클래스 제거
//     answer.forEach(answerElement => {
//       answerElement.classList.remove('active');
//     });

//     // 클릭한 .q_list에 대응하는 .answer에만 'active' 클래스 추가
//     if (correspondingAnswer) {
//       // 이미 'active' 상태라면 'active' 클래스를 제거하고 닫기
//       if (correspondingAnswer.classList.contains('active')) {
//         correspondingAnswer.classList.remove('active');
//       } else {
//         // 아니라면 'active' 클래스를 추가하여 열기
//         correspondingAnswer.classList.add('active');
//       }
//     }
//   });
// }

const q_list = document.querySelectorAll('.q_list');
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < q_list.length; i++) {
  q_list[i].addEventListener('click', function() {
    // 해당 인덱스 i에 대응하는 answer 요소를 찾기
    const correspondingAnswer = answer[i];

    // 모든 answer 요소에 대해 반복
    answer.forEach(answerElement => {
      // 현재 클릭한 질문의 대응되는 답변이 아니면 'active' 클래스 제거
      if (answerElement !== correspondingAnswer) {
        answerElement.classList.remove('active');
      }
    });

    // 현재 클릭한 .q_list에 대응하는 .answer에만 'active' 클래스 토글
    correspondingAnswer.classList.toggle('active');
  });
}

// q_list.forEach(answer => answer.classList.toggle('active'));

// const q_list = document.querySelector('.q_list');
// const answer = document.querySelector('.answer');

// q_list.onclick = () => {
//   answer.classList.toggle("active");
// }

const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0;

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`;
})

innerList.style.width = `${outer.clientWidth * inners.length}px`;

const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 2500);
}

let interval = getInterval();