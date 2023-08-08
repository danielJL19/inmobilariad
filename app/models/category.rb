class Category < ApplicationRecord
    #validaciones
    validates :name, presence:true, uniqueness:true

    #relaciones
    has_many :products
end
