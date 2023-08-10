class Product < ApplicationRecord
  #activeStorage
  has_many_attached :images
  has_one_attached :photo
  #validaciones
  validates :name, presence: true, uniqueness:true

  validates :room, presence: true, numericality: true
  validates :bathroom, presence: true, numericality: true
  validates :price, presence:true, numericality: true
  #action_text
  has_rich_text :body

  #relaciones
  belongs_to :category
end
