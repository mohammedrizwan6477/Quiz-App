const questions = [
    {
        'que' : 'Which of the following is a markup language',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'What is 2*(4+4)?',
        'a' : 2,
        'b' : 4,
        'c' : 8,
        'd' : 16,
        'correct' : 'c'
    },
    {
        'que' : 'What is 9*9?',
        'a' : 18,
        'b' : 81,
        'c' : 80,
        'd' : 79,
        'correct' : 'a'
    },
    {
        'que' : 'Who was the first president of the United States?',
        'a' : 'George Washington',
        'b' : 'John Adams',
        'c' : 'John Quincy Adams',
        'd' : 'Thomas jefferson',
        'correct' : 'a'
    },
    {
        'que' : 'what are the two major political parties in the United States?',
        'a' : 'Democratic Party and Republican Party',
        'b' : 'Green Party and Red Party',
        'c' : 'Bull party and Moose party',
        'd' : 'Hamilton Party and Burr party',
        'correct' : 'a'
    }
];

let index = 0;
let total = questions.length;
let right = 0,
 wrong = 0;
const quebox = document.getElementById('quebox');
const optionInputs = document.querySelectorAll('.options')
const loadQuestion=()=>{
    if(index === total){
        return endQuiz()
    }

    reset()
    const data = questions[index];
    quebox.innerText = `${index + 1}) ${data.que}`;
    // console.log(data);
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz=()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            // console.log(input.value);
            answer = input.value
        }
    })
    return answer;
}

const reset=()=>{
    optionInputs.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz=()=>{
    document.getElementById('box').innerHTML=`
    <h3>Thank you for Playing Quiz</h3>
    <h2>${right} / ${total} are correct </h2>
    `
}


// initial call

loadQuestion();