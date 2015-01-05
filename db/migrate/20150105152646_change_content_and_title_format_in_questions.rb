class ChangeContentAndTitleFormatInQuestions < ActiveRecord::Migration
  def up
  	change_column :questions, :content, :text
  	change_column :questions, :title, :text
  end
end
