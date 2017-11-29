class CreateVoteManagers < ActiveRecord::Migration[5.1]
  def change
    create_table :vote_managers do |t|
      t.belongs_to :issue, index: true

      t.timestamps
    end
  end
end