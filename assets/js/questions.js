// var question1 = "What does HTML stand for?";
// var rightAnswer1 = "HyperText Markup Language";
// var wrongAnswer1 = "High Text Malware Language";
// var question2 = "What is the language that is executed by the computer?"
// var rightAnswer2 = "Output";
// var wrongAnswer2 = "Syntax";

const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "High Text Malware Language"],
        correctAnswerIndex: 0,
    },
    {
        question: "What is the language that is executed by the computer?",
        choices: ["Output", "Syntax"],
        correctAnswerIndex: 0,
    },
    {
        question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
        choices: ['Conditional Loop', 'For Loop', 'Else Loop', 'While Loop'],
        correctAnswerIndex: 1, // Index of the correct answer in the 'choices' array
      },
      {
        question: 'In JavaScript, what element is used to store multiple values in a single variable?',
        choices: ['Arrays', 'Strings', 'Variables', 'Functions'],
        correctAnswerIndex: 0,
      },
      {
        question: 'What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?',
        choices: ['Scope', 'Range', 'Output Level', 'Restriction'],
        correctAnswerIndex: 1, // Index of the correct answer in the 'choices' array
      }
];