class CreateFotos < ActiveRecord::Migration
  def change
    create_table :fotos do |t|
      t.attachment :imagen
      t.text :desc

      t.timestamps null: false
    end
  end
end
