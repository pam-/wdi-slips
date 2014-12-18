class Friendship < ActiveRecord::Base
	belongs_to :user
	belongs_to :friend, class_name: "User"

	def self.already_sent(user, friend)
		
	end

	def self.new_request(user, friend)
		unless self.exists?(user_id: user.id, friend_id: friend.id, status: "pending") || self.exists?(user_id: user.id, friend_id: friend.id, status: "confirmed")
			new_request = self.new(user_id: user.id, friend_id: friend.id)
			if new_request.save
				true
			else 
				false
			end 
		end
	end

	def self.confirm(user, friend)
		confirmed = self.find(user_id: user.id, friend_id: friend.id, status: "pending")
		if confirmed.update_attribute(:status, 'confirmed')
			true
		else
			false
		end
	end
end 