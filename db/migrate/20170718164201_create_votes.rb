class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.boolean :upvote, null: false
      t.integer :answer_id, null: false, foreign_key: true
      t.integer :user_id, null: false, foreign_key: true

      t.timestamps
    end
    add_index :votes, [:answer_id, :user_id]
  end
end
