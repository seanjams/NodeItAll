json.extract! question, :id, :title, :body
json.authorId question.author_id
json.username question.author.username
json.answerCount question.answers.length
json.voteCount question.vote_count
json.currentUserVote question.current_user_vote(current_id)
