class Vote < ApplicationRecord
  validates :upvote, presence: true

  belongs_to :user
  belongs_to :answer
end
