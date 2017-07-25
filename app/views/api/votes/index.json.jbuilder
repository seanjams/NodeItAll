@votes.each do |vote|
  json.set! vote.id do
    json.partial! 'api/votes/vote', vote: vote
  end
end
