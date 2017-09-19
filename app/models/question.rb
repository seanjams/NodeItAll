class Question < ApplicationRecord
  validates :title, :body, :lang, presence: true

  has_many :answers, dependent: :destroy
  has_many :votes, as: :item, dependent: :destroy
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  def vote_count
    self.votes.reduce(0) do |count, vote|
      vote.upvote ? count + 1: count - 1
    end
  end

  def current_user_vote(user_id)
    vote = self.votes.find_by(user_id: user_id)
    if vote
      vote.upvote ? 1 : -1
    else
      0
    end
  end

  def current_vote_id(user_id)
    vote = self.votes.find_by(user_id: user_id)
    vote ? vote.id : nil
  end
end
