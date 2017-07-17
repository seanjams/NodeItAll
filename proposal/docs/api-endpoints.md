Users
POST /api/users
PATCH /api/users/:id
GET /api/users/:id

Session
POST /api/session
DELETE /api/session

Questions
POST /api/questions
GET /api/questions
GET /api/questions/:id
DELETE /api/questions/:id

Answers
POST /api/answers
GET /api/answers
GET /api/answers/:id
DELETE /api/answers/:id

Votes
POST /api/answers/:answer_id/upvote
POST /api/answers/:answer_id/downvote
DELETE /api/answers/:answer_id/upvote
DELETE /api/answers/:answer_id/downvote
