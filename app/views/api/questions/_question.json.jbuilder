json.extract! question, :id, :title, :body, :lang
json.authorId question.author_id
json.username question.author.username
json.answerCount question.answers.length
json.voteCount question.vote_count
json.currentUserVote question.current_user_vote(current_id)
json.currentVoteId question.current_vote_id(current_id)
json.time time_ago_in_words(question.created_at)
json.created_at question.created_at
