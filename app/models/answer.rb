class Answer < ApplicationRecord
  validates :body, :question_id, :author_id, presence: true
  validates :question_id, uniqueness: {scope: :author_id}

  belongs_to :question
  has_many :votes, as: :item
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
