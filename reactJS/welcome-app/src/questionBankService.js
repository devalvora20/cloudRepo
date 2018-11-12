export default class QuestionBankService{
    loadQuestions(q){
        fetch('./json/questions.json')
        .then(response => response.json())
        .then(data => {
            q(data);
        }
        );       
    }
}