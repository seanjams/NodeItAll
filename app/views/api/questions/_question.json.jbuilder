json.extract! question, :id, :title, :body
json.authorId question.author_id
json.username question.author.username
json.answers question.answers.pluck(:id)
