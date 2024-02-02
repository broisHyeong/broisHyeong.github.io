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

// ---------------------------------자주 묻는 질문-----------------------------------

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
