class Vote < ApplicationRecord
  validates :item_id, :item_type, :user_id, presence: true
  validates :user_id, uniqueness: {scope: [:item_type, :item_id]}
  validates_inclusion_of :item_type, in: ["Question", "Answer"]
  validates_inclusion_of :upvote, in: [true, false]

  belongs_to :user
  belongs_to :item, polymorphic: true

end
