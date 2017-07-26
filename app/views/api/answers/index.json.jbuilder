@answers.each do |answer|
  json.set! answer.id do
    json.partial! 'api/answers/answer',
      answer: answer,
      current_id: @current_user ? @current_user.id : nil
  end
end
