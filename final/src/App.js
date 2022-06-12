import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Что общего между Agile методологиями?',
			answerOptions: [
				{ answerText: 'Прозрачность', isCorrect: false },
				{ answerText: 'Инкрементная разработка', isCorrect: false },
				{ answerText: 'Быстрая обратная связь', isCorrect: false },
				{ answerText: 'все перечисленное', isCorrect: true },
			],
		},
		{
			questionText: 'Джон обьясняет баглог продукта и ставит приоритеты по юзерстори. Кем является Джон?',
			answerOptions: [
				{ answerText: 'PM', isCorrect: false },
				{ answerText: 'Scrum Master', isCorrect: false},
				{ answerText: 'Product Owner', isCorrect: true},
				{ answerText: 'Coach', isCorrect: false },
			],
		},
		{
			questionText: 'Что НЕ является истиной в отношении burn down chart?',
			answerOptions: [
				{ answerText: 'Доступен всем стейкхолдерам', isCorrect: false},
				{ answerText: 'Отражает остаток баклога в отношении спринта', isCorrect: false },
				{ answerText: 'Визуализация запланированных выпусков', isCorrect: false },
				{ answerText: 'Отражает остаток в текущей итерации', isCorrect: true },
			],
		},
		{
			questionText: 'В технике MoSCoW буква W означает -',
			answerOptions: [
				{ answerText: 'Не нужно', isCorrect: false },
				{ answerText: 'Не верный приоритет', isCorrect: false },
				{ answerText: 'Важный приоритет', isCorrect: false },
				{ answerText: 'Может пригодиться в будущем', isCorrect: true },
			],
		},
		
		{
			questionText: 'Какие роли не применяются в XP (Extream Programming)?',
			answerOptions: [
				{ answerText: 'Programmer', isCorrect: false },
				{ answerText: 'Coach', isCorrect: false },
				{ answerText: 'Tracker', isCorrect: false },
				{ answerText: 'PM', isCorrect: true },
			],
		},
		{
			questionText: 'Кто отвечает за выпуск deliverables в Scrum?',
			answerOptions: [
				{ answerText: 'Команда', isCorrect: true },
				{ answerText: 'Product Owner', isCorrect: false },
				{ answerText: 'Scrum Master', isCorrect: false },
				{ answerText: 'PM', isCorrect: false },
			],
		},
		{
			questionText: 'Что подразумевается под самоорганизующей командой?',
			answerOptions: [
				{ answerText: 'PМ распределяет работу и требует результат', isCorrect: false },
				{ answerText: 'PО распределяет работу и требует результаЩ', isCorrect: false },
				{ answerText: 'Команда назначает задачи и следит за выполнением', isCorrect: false },
				{ answerText: 'Каждый член команды берет на себя работу и отвечает за нее', isCorrect: true },
			],
		},
		{
			questionText: 'Фаза реализации FDD (Feature Driven Development) включает в себя два процесса ',
			answerOptions: [
				{ answerText: 'Design by Feature and Test by Feature', isCorrect: false },
				{ answerText: 'Design by Feature and Build by Feature', isCorrect: true },
				{ answerText: 'Build by Feature and Test by Feature', isCorrect: false },
				{ answerText: 'Build by Feature and Validate by Feature', isCorrect: false },
			],
		},
		{
			questionText: 'Что является цитатой из Agile Manifesto?',
			answerOptions: [
				{ answerText: 'Люди и сотрудничество важнее контрактов', isCorrect: false },
				{ answerText: 'Люди и сотрудничество важнее документации проекта', isCorrect: false },
				{ answerText: 'Люди и сотрудничество важнее инструментов и процессов', isCorrect: true },
				{ answerText: 'Реагирование на изменения важнее контрактых переговоров', isCorrect: false },
			],
		},
		{
			questionText: 'Что НЕ надо делать во время ежедневных STANDUP?',
			answerOptions: [
				{ answerText: 'Поднимать новые проблемы', isCorrect: false },
				{ answerText: 'Давать обновление по статусу проблем', isCorrect: false },
				{ answerText: 'Обсуждать как решить проблему', isCorrect: true },
				{ answerText: 'Кратко описать проблему', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Вы ответили на {score} вопросов из {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
