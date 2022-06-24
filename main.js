const question = document.querySelectorAll('.question');
const arrow = document.querySelectorAll('.arrow');
const answer = document.querySelectorAll('.answer');



function deselectAll() {
  for (let j = 0; j < question.length; j++) {
    question[j].classList.remove('selected');
    answer[j].classList.add('hidden');
    arrow[j].classList.remove('up');
  }
}


for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    if (question[i].classList.contains('selected')) {
      question[i].classList.remove('selected');
      answer[i].classList.add('hidden');
      arrow[i].classList.remove('up');
    }
    else if (question[i].classList.contains('selected') == false) {
      deselectAll();
      question[i].classList.add('selected');
      answer[i].classList.remove('hidden');
      arrow[i].classList.add('up');
    }
  })
}





