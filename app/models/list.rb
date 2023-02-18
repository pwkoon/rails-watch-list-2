class List < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :movies, through: :bookmarks, dependent: :restrict_with_error
  validates :name, presence: true, uniqueness: true
end
