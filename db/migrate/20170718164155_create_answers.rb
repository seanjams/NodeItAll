class CreateAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :answers do |t|
      t.string :body, null: false
      t.string :lang, null: false
      t.integer :question_id, null: false, foreign_key: true
      t.integer :author_id, null: false, foreign_key: true

      t.timestamps
    end
    add_index :answers, [:question_id, :author_id]
  end
end
