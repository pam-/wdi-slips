class Question < ActiveRecord::Base
	belongs_to :user
	has_many :taggings, dependent: :destroy
	has_many :tags, through: :taggings
  default_scope -> { order('created_at DESC') }

  validates_presence_of :user_id, :title, :content

  def self.with_tags(params)
  	worked = true
  	unformatted_tags = params[:tags]
  	tags = unformatted_tags.split(',').map { |tag| tag.gsub(/(['+\s])/, '') }
  	question = Question.new(title: params[:title], content: params[:content], user_id: params[:user_id])
  	if question.save
  		tags.each do |tag_content|
  			if Tag.exists?(content: tag_content)
  				reused_tag = Tag.find_by(content: tag_content)
  				question.taggings.create(tag_id: reused_tag.id)
  			else
  				tag = Tag.new(content: tag_content)
  				if tag.save
  					question.taggings.create(tag_id: tag.id)
  				else
  					worked = false
  				end
  			end 
  		end
  	else 
  		worked = false
  	end 
  	question
  end
end 