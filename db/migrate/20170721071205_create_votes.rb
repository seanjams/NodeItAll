class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.boolean :upvote, null: false
      t.integer :user_id, null: false, foreign_key: true
      t.integer :item_id, null: false, foreign_key: true
      t.string :item_type, null: false

      t.timestamps
    end
    add_index :votes, [:user_id, :item_id]
  end
end
