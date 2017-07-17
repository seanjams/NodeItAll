COMPONENTS

NavBar
-SearchContainer

QuestionIndexContainer
-QuestionIndex
--QuestionIndexItem

QuestionDetailContainer
-QuestionDetail
--AnswerDetail
--AnswerForm

UserProfileContainer
-UserProfile
--UserQuestions

AuthFormContainer
-AuthForm

REACT ROUTES

"/"                       QuestionIndexContainer
"/signup"                 AuthFormContainer
"/login"                  AuthFormContainer
"questions/:questionId"   QuestionDetailContainer
"users/:username"         UserProfile
