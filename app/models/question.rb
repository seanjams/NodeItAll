class Question < ApplicationRecord
  validates :title, :body, presence: true

  has_many :answers
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
