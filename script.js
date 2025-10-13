const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Введіть своє питання...';

const button = document.createElement('button');
button.textContent = 'Запитати';

const answer = document.createElement('div');
answer.className = 'answer';
answer.style.position = 'relative';
answer.style.width = '450px';
answer.style.height = '450px';
answer.style.marginTop = '20px';

const ball = document.createElement('img');
ball.src = 'ball.png';
ball.alt = 'Магічна куля';
ball.style.width = '100%';
ball.style.height = '100%';
ball.style.display = 'block';
answer.appendChild(ball);

const text = document.createElement('div');
text.style.position = 'absolute';
text.style.top = '50%';
text.style.left = '50%';
text.style.transform = 'translate(-50%, -50%)';
text.style.color = 'white';
text.style.fontSize = '2rem';
text.style.fontWeight = 'bold';
text.style.textAlign = 'center';
text.style.color = '#49a09d';
answer.appendChild(text);

document.body.append(input, button, answer);

const style = document.createElement('style');
style.textContent = `
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom right, #5f2c82, #49a09d);
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }

  input, button {
    font-size: 1rem;
    padding: 10px;
    margin: 5px;
    width: 80%;
    max-width: 400px;
    border-radius: 8px;
    border: none;
    box-sizing: border-box;
  }

  input {
    outline: none;
  }

  button {
    background: #222;
    color: #fff;
    transition: background 0.3s;
  }

  button:hover {
    background: #444;
  }

  @media (max-width: 500px) {
    input, button { font-size: 0.9rem; }
  }
`;
document.head.appendChild(style);

const answers = [
  'Так',
  'Ні',
  'Можливо',
  'Однозначно так!',
  'Запитай пізніше',
  'Шанси невеликі',
  'Без сумніву!',
  'Шанси мізерні'
];

button.addEventListener('click', () => {
  const question = input.value.trim();

  if (question === '') {
    alert('Будь ласка, введіть питання!');
    return;
  }

  const index = Math.floor(Math.random() * answers.length);
  text.textContent = answers[index];

  input.value = '';
});
