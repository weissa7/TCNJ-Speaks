class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.integer :value
      t.belongs_to :vote_manager, index: true

      t.timestamps
    end
  end
end
