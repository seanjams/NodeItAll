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
    title: "Why do fools fall in love?",
    body: "someBODY once told me the WORLD was gonna rule me",
    author_id: 1
  },
  {
    title: "Why is this not working?",
    body: "That's a rhetorical question of course",
    author_id: 3
  },
  {
    title: "Why is it called a bug",
    body: "Is there any good reason we call issues bugs?",
    author_id: 7
  },
  {
    title: "When is phish coming to California?",
    body: "What's the deal? No love for the west coast?",
    author_id: 6
  },
  {
    title: "Will I finish this site on time?",
    body: "WILL I??????",
    author_id: 4
  }
])

sample_answers = Answer.create([
  {
    body: "An Actual Bug got stuck in a super computer in the 60's, causing all sorts of issues",
    question_id: 3,
    author_id: 5
  }
])
