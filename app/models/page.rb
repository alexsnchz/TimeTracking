# == Schema Information
#
# Table name: pages
#
#  id         :bigint(8)        not null, primary key
#  controller :string
#  action     :string
#  tracking   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Page < ApplicationRecord
end
