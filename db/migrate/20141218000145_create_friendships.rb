class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
    	t.integer :user_id, null: false
    	t.integer :friend_id, null: false
    	t.string :status, null: false, default: "pending"
    end
    add_index :friendships, :user_id
    add_index :friendships, :friend_id
    add_index :friendships, [:user_id, :friend_id]
  end
end
