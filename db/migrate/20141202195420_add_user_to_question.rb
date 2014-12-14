class AddUserToQuestion < ActiveRecord::Migration
  def self.up
  	add_column :questions, :user_id, :integer
  end
end
