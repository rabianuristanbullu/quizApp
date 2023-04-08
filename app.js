const quizData = [
    {
      question: 'Harry Hogwarts’a başlamadan önce Çatlak Kazan’da Ouirrell ile ilk karşılaştığında, Quirrell ona hangi konu hakkında bir kitap alması gerektiğinden bahsetmişti?',
      a: 'Akromantular',
      b: 'Kurt Adamlar',
      c: 'Zombiler',
      d: 'Vampirler',
      e: 'Ruh Emiciler',
      correct: 'd',
    },
    {
      question: '1. sınıf kitaplarından "Karanlık Güçler: Bir Kendini Koruma Klavuzu"nun yazarı kimdi?',
      a: 'Quentin Trimble',
      b: 'Phyllida Spore',
      c: 'Adalbert Waffling',
      d: 'Arsenius Jigger',
      e: 'Voldemort',
      correct: 'a',
    },
    {
      question: 'Bu Karanlık Sanatlara Karşı Savunma kitaplarından hangisini Gilderoy Lockhart yazmamıştır?',
      a: 'Ölüm Perisini Kovalamak',
      b: 'Kurtadamla Yollarda',
      c: 'Gulyabani İle Aylak Aylak Dolaşma',
      d: 'Vampirlerle Seyahatler',
      e: 'Kurtadam Firarda',
      correct: 'c',
    },
    {
      question: 'Lupin ile yapılan KSKS dersinde Dean Thomasın Böcürtü hangi şekle bürünmüştü?',
      a: 'Kopmuş bir el',
      b: 'Çığlık atan ölüm perisi',
      c: 'Bandajları sarkan bir mumya',
      d: 'Kanlı bir göz küresi',
      e: 'Uçan bir örümcek',
      correct: 'a',
    },
    {
      question: ' Lupinin sınıfındaki su deposunda bulunan Garkenez ne renkti?',
      a: 'Kahverengi',
      b: 'Yeşil',
      c: 'Siyah',
      d: 'Kırmızı',
      e: 'Mor',
      correct: 'b',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      `
      }
    }
  })