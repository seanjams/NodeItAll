class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false, foreign_key: true

      t.timestamps
    end
    add_index :questions, :author_id
  end
end
