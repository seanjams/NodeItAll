json.extract! answer, :id, :body
json.questionId answer.question_id
json.authorId answer.author_id
json.username answer.author.username
json.voteCount answer.vote_count
json.currentUserVote answer.current_user_vote(current_id)
json.currentVoteId answer.current_vote_id(current_id)
json.time time_ago_in_words(answer.created_at)
json.created_at answer.created_at
