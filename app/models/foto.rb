class Foto < ActiveRecord::Base
  has_attached_file :imagen
  validates_attachment_content_type :imagen, content_type: /\Aimage/
	validates_attachment_file_name :imagen, matches: [/png\z/, /jpe?g\z/]
end
