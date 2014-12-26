class AddPointsToQuestions < ActiveRecord::Migration
  def self.up
  	add_column :questions, :points, :integer, default: 0
  end
end
