class User < ActiveRecord::Base
	has_many :questions

	has_many :friendships, -> { where 'friendships.status = "confirmed"' }
	has_many :friends, through: :friendships

	validates_presence_of :username, :email

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

end
