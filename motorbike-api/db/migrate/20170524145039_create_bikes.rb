class CreateBikes < ActiveRecord::Migration[5.1]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.string :style
      t.integer :cc
      t.integer :year

      t.timestamps
    end
  end
end
