class Product < ApplicationRecord
  #validaciones
  validates :name, presence: true, uniqueness:true
  validates :description, presence: true, uniqueness:true
  validates :room, presence: true, uniqueness:true
  validates :bathroom, presence: true, uniqueness:true

  #relaciones
  belongs_to :category
end
