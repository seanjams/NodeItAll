## Sample State

```javascript
{
  questions: {
    2: {
      title: "Second Question",
      body: "More content",
      id: 2,
      authorId: 5,
      username: "thisUser"
    },
    errors: []
  },
  session: {
    currentUser: {
      username: "nodeItAll",
      email: "nodeItAll@gmail.com"
      id: 500
    },
    errors: []
  },
  answers: {
    2: {
      id: 1,
      body: "the answer",
      authorId: 10,
      questionId: 2,
      username: "anotherUser"
    },
    errors: []
  }
  votes: {
    1: {
      user_id: 1,
      answer_id: 2,
      upvote: false
    },
    2: {
      user_id: 500,
      answer_id: 2,
      upvote: true
    }
  }
}
```
