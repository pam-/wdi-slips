class Question < ActiveRecord::Base
	belongs_to :topic

	def self.make_pairs(students, questions)
		pairs = []
		students.each_with_index do |student, index|
			pairs << { student: student.name, question: questions[index]}
		end 
		pairs
	end
end 