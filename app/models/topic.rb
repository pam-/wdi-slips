class Topic < ActiveRecord::Base
	has_many :objectives, dependent: :destroy
	default_scope -> { order('created_at DESC') }
end 