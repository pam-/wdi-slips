class Question < ActiveRecord::Base
	belongs_to :user
	has_many :taggings
	has_many :tags, through: :taggings
  default_scope -> { order('created_at DESC') }

  def self.with_tags(params)
  	worked = true
  	unformatted_tags = params[:tags]
  	tags = unformatted_tags.split(',').map { |tag| tag.gsub(/(['+\s])/, '') }
  	question = Question.new(title: params[:title], content: params[:content])
  	if question.save
  		tags.each do |tag_content|
  			tag = Tag.new(content: tag_content)
  			if tag.save
  				question.taggings.create(tag_id: tag.id)
  			else
  				worked = false
  			end 
  		end
  	else 
  		worked = false
  	end 
  	question
  end
end 