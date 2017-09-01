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
    author_id: 1,
  },
  {
    title: "How do I remove a particular element from an array in JavaScript?",
    body: "I have an array of integers, and I'm using the .push() method to add elements to it.

    Is there a simple way to remove a specific element from an array? The equivalent of something like  array.remove(int);.

    I have to use core JavaScript - no frameworks are allowed.",
    author_id: 4,
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
    body: "One does not simply redirect using jQuery, jQuery is not necessary, and window.location.replace(...) will best simulate an HTTP redirect. window.location.replace(...) is better than using window.location.href, because replace() does not keep the originating page in the session history, meaning the user won't get stuck in a never-ending back-button fiasco. If you want to simulate someone clicking on a link, use location.href. If you want to simulate an HTTP redirect, use location.replace~~$$~~// similar behavior as an HTTP redirect\nwindow.location.replace('http://nodeitall.com');\n// similar behavior as clicking on a link\nwindow.location.href = 'http://nodeitall.com';",
    question_id: 1,
    author_id: 5
  },
  {
    body: "~~$$~~//First, find the index of the element you want to remove:\n\nvar array = [2, 5, 9];\nvar index = array.indexOf(5);\n\n//Then remove it with splice:\n\nif (index > -1) {\n    array.splice(index, 1);\n}",
    question_id: 2,
    author_id: 2
  },
  {
    body: "Most of the given answers work for strict comparison, meaning that both objects reference the exact same object in memory (or are primitive types), but often you want to remove a non-primitive object from an array that has a certain value. For instance, if you make a call to a server and want to check a retrieved object against a local object.~~$$~~const a = {'field': 2} // Non-primitive object
const b = {'field': 2} // Non-primitive object with same value
const c = a            // Non-primitive object that reference the same object as 'a'

assert(a !== b) // Don't reference the same item, but have same value
assert(a === c) // Do reference the same item, and have same value (naturally)

//Note: there are many alternative implementations for valueCompare,
// this one is versatile but might be too slow.
function valueCompare (x, y) {
   return  JSON.stringify(x) === JSON.stringify(y)
}

function removeFromArray(arr, toDelete){
    return arr.filter(target => {!valueCompare(toDelete, target)})
}

const exampleArray = [a, b, b, c, a, {'field': 2}, {'field': 90}];
const resultArray = removeFromArray(exampleArray, a);

//resultArray = [{'field':90}]",
    question_id: 2,
    author_id: 3
  }
])

sample_votes = Vote.create([
  {

  }
])
