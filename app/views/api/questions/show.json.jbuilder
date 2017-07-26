json.partial! 'api/questions/question',
  question: @question,
  current_id: @current_user ? @current_user.id : nil
