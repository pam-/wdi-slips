class AddStatusToQuestions < ActiveRecord::Migration
  def self.up
  	add_column :questions, :status, :string, default: "unsolved"
  end
end