class Answer < ApplicationRecord
  validates :body, presence: true

  belongs_to :question
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end