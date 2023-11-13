document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    var name = document.querySelector('#fullname input').value;
    var date = document.querySelector('#todayDate input').value;
    var answer1 = document.querySelector('input[name="question1"]:checked').value;
    var answer2 = document.querySelector('input[name="question2"]:checked').value;
    var answer3 = document.querySelector('input[name="question3"]:checked').value;
    var openAnswer1 = document.querySelector('.textanswer:nth-of-type(1)').value;
    var openAnswer2 = document.querySelector('.textanswer:nth-of-type(2)').value;

     var content = `Name: ${name}\nDate: ${date}\nAnswer 1: ${answer1}\nAnswer 2: ${answer2}\nAnswer 3: ${answer3}\nOpen Answer 1: ${openAnswer1}\nOpen Answer 2: ${openAnswer2}`;

     var blob = new Blob([content], { type: 'text/plain' });

     var a = document.createElement('a');
     a.href = URL.createObjectURL(blob);
     a.download = 'quiz_results.txt';

     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
 });
