class CreateObjectives < ActiveRecord::Migration
  def change
    create_table :objectives do |t|
    	t.string :content
    	t.references :topic
    	t.timestamps
    end
  end
end
