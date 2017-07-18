export const fetchAllQuestions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/questions'
  })
);

export const fetchSingleQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`
  })
);

export const deleteQuestion = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${id}`
  })
);
