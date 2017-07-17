
USERS

column          datatype  details
* id              int       not_null, primary_key
* username        string    not_null, indexed, unique
* email           string    not_null, indexed, unique
* password_digest string    not_null
* session_token   string    not_null, indexed, unique

QUESTIONS

column     datatype  details
* id         int       not_null, primary_key
* title      string    not_null
* body       string    not_null
* author_id  string    not_null, foreign_key

ANSWERS

column        datatype  details
* id            int       not_null, primary_key
* body          string    not_null
* question_id   int       not_null, foreign_key
* author_id     string    not_null, foreign_key

VOTES

column        datatype  details
* id            int       not_null, primary_key
* user_id       int       not_null, foreign_key
* answer_id     int       not_null, foreign_key
* up_vote       boolean   not_null
