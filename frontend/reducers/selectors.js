import { values } from 'lodash';

export const selectQuestions = ({questions}) => (
  values(questions).slice(0,-1)
);

export const selectAnswers = ({answers}) => (
  values(answers).slice(0,-1)
)
