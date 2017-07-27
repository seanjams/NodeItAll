import { values } from 'lodash';

export const selectRecentQuestions = ({questions}) => {
  return values(questions).slice(0,-1).sort((a,b) => (
    a.created_at >= b.created_at ? -1 : 1
  ));
};

export const selectTrendingQuestions = ({questions}) => (
  values(questions).slice(0,-1).sort((a,b) => (
    a.voteCount >= b.voteCount ? -1 : 1
  ))
);

export const selectAnswers = ({answers}) => (
  values(answers).slice(0,-1)
);
