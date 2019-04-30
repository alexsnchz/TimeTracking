class CreatePages < ActiveRecord::Migration[5.2]
  def change
    create_table :pages do |t|
      t.string :controller
      t.string :action
      t.boolean :tracking

      t.timestamps
    end
  end
end
