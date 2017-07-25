class Question < ApplicationRecord
  validates :title, :body, presence: true

  has_many :answers
  has_many :votes, as: :item
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  def vote_count
    self.votes.reduce(0) do |count, vote|
      vote.upvote ? count + 1: count - 1
    end
  end

  def current_user_vote(id)
    vote = self.votes.find_by(user_id: id)
    if vote
      vote.upvote ? 1 : -1
    else
      0
    end
  end
end
