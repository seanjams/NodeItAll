import { values } from 'lodash';

export const selectAllQuestions = ({questions}) => (
  values(questions).slice(0,-1)
);
