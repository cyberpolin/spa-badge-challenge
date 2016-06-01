class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :name
      t.integer :votes
      t.integer :teacher_id

      t.timestamps null: false
    end
  end
end
