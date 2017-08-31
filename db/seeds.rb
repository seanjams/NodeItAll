# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sample_user = User.create([
  {
    username: "Sample",
    email: "Sample",
    password: "password"
  },
  {
    username: "Sean",
    email: "seanvoreilly2@gmail.com",
    password: "password"
  },
  {
    username: "MikeJonez",
    email: "mikejonez@hotmail.com",
    password: "password"
  },
  {
    username: "Jon Fishman",
    email: "fish@phish.net",
    password: "password"
  },
  {
    username: "Wonderwoman",
    email: "wonderwoman@super.io",
    password: "password"
  },
  {
    username: "Chuck Norris",
    email: "nevercries@ironfists.com",
    password: "password"
  },
  {
    username: "Kanye",
    email: "yeezus@west.com",
    password: "password"
  },
  {
    username: "Donald Drumpf",
    email: "justhitmytwitter@whitehouse.gov",
    password: "password"
  },
  {
    username: "Bill Evans",
    email: "bill@jazzworld.com",
    password: "password"
  },
  {
    username: "The Babadook",
    email: "itsdadook@yahoo.com",
    password: "password"
  }
])

sample_questions = Question.create([
  {
    title: "How to redirect to another webpage?",
    body: "How can I redirect the user from one page to another using JavaScript or jQuery?",
    authorId: 1,
  },


  # {
  #   title: "Why do fools fall in love?",
  #   body: "someBODY once told me the WORLD was gonna rule me",
  #   author_id: 1
  # },
  # {
  #   title: "Why is this not working?",
  #   body: "That's a rhetorical question of course",
  #   author_id: 3
  # },
  # {
  #   title: "Why is it called a bug",
  #   body: "Is there any good reason we call issues bugs?",
  #   author_id: 7
  # },
  # {
  #   title: "When is phish coming to California?",
  #   body: "What's the deal? No love for the west coast?",
  #   author_id: 6
  # },
  # {
  #   title: "Will I finish this site on time?",
  #   body: "WILL I??????",
  #   author_id: 4
  # }
])

sample_answers = Answer.create([
  {
    body: "One does not simply redirect using jQuery, jQuery is not necessary, and window.location.replace(...) will best simulate an HTTP redirect. window.location.replace(...) is better than using window.location.href, because replace() does not keep the originating page in the session history, meaning the user won't get stuck in a never-ending back-button fiasco. If you want to simulate someone clicking on a link, use location.href. If you want to simulate an HTTP redirect, use location.replace~~$$~~// similar behavior as an HTTP redirect\nwindow.location.replace('http://stackoverflow.com');\n// similar behavior as clicking on a link\nwindow.location.href = 'http://stackoverflow.com';",
    question_id: 1,
    author_id: 5
  }
])

sample_votes = Vote.create([
  {

  }
])
