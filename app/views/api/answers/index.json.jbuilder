@answers.each do |answer|
  json.partial! 'api/answers/answer', answer: answer
end
