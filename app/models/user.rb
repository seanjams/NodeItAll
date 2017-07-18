class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :votes

  has_many :questions,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Question

  has_many :answers,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Answer

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by_username(username_or_email)
    user ||= User.find_by_email(username_or_email)
    user && user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
