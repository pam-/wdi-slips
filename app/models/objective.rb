class Objective < ActiveRecord::Base
	belongs_to :topic

	def self.make_pairs(students, objectives)
		pairs = []
		students.each_with_index do |student, index|
			pairs << { student: student.name, objective: objectives[index]}
		end 
		pairs
	end
end 