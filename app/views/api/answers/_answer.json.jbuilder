json.extract! answer, :id, :body
json.questionId answer.question_id
json.authorId answer.author_id
json.username answer.author.username
