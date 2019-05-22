class Eater < ApplicationRecord
  has_many :cupcakes

  def cap_name
    self.name.upcase
  end
end
