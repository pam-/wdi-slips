class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
    	t.string :body, null: false, default: ""
    	t.boolean :is_solution, default: false
    	t.references :question
    	t.references :user

    	t.timestamps    	
    end
  end
end
