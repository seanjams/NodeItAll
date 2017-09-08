# NodeItAll

[NodeItAll](https://nodeitall.co/) is a full stack web application inspired by Stack Overflow, in which users can ask and answer tech related questions or share their ideas with others in the NodeItAll community. The frontend is built on React/Redux with a Ruby on Rails backend. Anyone visiting can search the database of questions. Upon signing up, a user can ask questions, answer questions, and vote up or down other questions and answers. The question and answer forms come complete with syntax highlighting for code snippets.

## Features

- Authentication on both ends
- Ask/Search for questions in plain text or code
- Answer questions with plain text or code
- Code snippet form complete with syntax highlighting
- Vote up or down on questions and answers of other users
- Organize questions into most recent or trending categories

## Programming Languages
- JavaScript (es6)
- Ruby

### Technologies
- Ruby on Rails (version 5.0.4)
- React.js
- Redux
- PostgreSQL
- React Syntax Highlight (highlight.js)
- jQuery
- jBuilder
- SASS

### Authentication

Users are prompted with a form containing fields for Username, Email, and Password. If a user has visited before, they can log in with either their username or email in the same field. The password must be at least 8 characters, and is stored in the database as a salted/hashed digest using BCrypt. Salting prevents the database from containing the same random string as a digest, despite users potentially having the same passwords.

![login](/app/assets/images/login.gif)

``` javascript
export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  })
);
```

``` ruby
def create
  @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
  )
  if @user
    login(@user)
    render :show
  else
    render(
      json: ["Invalid Username or Password"],
      status: 401
    )
  end
end
```

### Ask a Question

Use the form and code box to ask and answer questions, see if others can help!

![question](/app/assets/images/new_question.gif)

### Search for a Question

Search the database for keywords or code.

![search](/app/assets/images/search.gif)

### Vote on Questions/Answers

Vote on the questions and answers you find helpful. Votes can belong to both questions and answers thanks to a polymorphic association on the Model level.

``` ruby
class Vote < ApplicationRecord
  validates :item_id, :item_type, :user_id, presence: true
  validates :user_id, uniqueness: {scope: [:item_type, :item_id]}
  validates_inclusion_of :item_type, in: ["Question", "Answer"]
  validates_inclusion_of :upvote, in: [true, false]

  belongs_to :user
  belongs_to :item, polymorphic: true

end
```

![votes](/app/assets/images/votes.gif)

## In the making...

#### User Questions/Page

I plan to have a page every user can call their own, a page that hosts details about their bio, a user picture, and the questions and answers they have written or voted on.

#### Infinite Scroll

I would like to add this capability to both the questions index and detail pages.
