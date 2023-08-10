class Tag < ApplicationRecord

    #relaciones
    has_many :product_tag
    has_many :product, :through => :product_tag 
end
