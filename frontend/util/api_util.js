import merge from 'lodash/merge';

export const fetchAllQuestions = formType => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    data: {question: {formType}}
  })
);

export const fetchSingleQuestion = id => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`
  })
);

export const createQuestion = question => (
  $.ajax({
    method: 'POST',
    url: 'api/questions/',
    data: {question}
  })
);

export const updateQuestion = question => (
  $.ajax({
    method: 'PUT',
    url: `api/questions/${question.id}`,
    data: {question}
  })
);

export const deleteQuestion = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${id}`
  })
);

export const fetchAllAnswers = question_id => (
  $.ajax({
    method: 'GET',
    url: "api/answers",
    data: {answer: {question_id}}
  })
);

export const fetchSingleAnswer = id => (
  $.ajax({
    method: 'GET',
    url: `api/answers/${id}`
  })
);

export const createAnswer = answer => (
  $.ajax({
    method: 'POST',
    url: 'api/answers/',
    data: {answer}
  })
);

export const deleteAnswer = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/answers/${id}`
  })
);

// export const fetchAllVotes = (item_id, item_type) => (
//   $.ajax({
//     method: 'GET',
//     url: "api/votes",
//     data: {vote: {item_id, item_type}}
//   })
// );

// export const fetchSingleVote = id => (
//   $.ajax({
//     method: 'GET',
//     url: `api/votes/${id}`
//   })
// );

export const createVote = vote => {
  const type = `${vote.item_type.toLowerCase()}s`
  return $.ajax({
    method: 'POST',
    url: `api/${type}/${vote.item_id}/votes`,
    data: {vote}
  })
};

export const deleteVote = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/votes/${id}`
  })
}

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
