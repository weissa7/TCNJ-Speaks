class CreateVoteManagers < ActiveRecord::Migration[5.1]
  def change
    create_table :vote_managers do |t|
      t.belongs_to :issue, index: true
      t.integer :vote_sum
      t.integer :total_votes
      t.timestamps
    end
  end
end
