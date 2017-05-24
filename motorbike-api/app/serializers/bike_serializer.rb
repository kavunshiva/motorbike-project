class BikeSerializer < ActiveModel::Serializer
  attributes :id, :brand, :style, :cc, :year
end
