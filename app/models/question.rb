class Question < ActiveRecord::Base
	belongs_to :topic

	def self.find_25(students)
		shuffled = self.shuffle
		slips_ready = []
		students.each_with_index do |student, index|
			slips_ready << { student: student, questions: shuffled[index]}
		end 
	end
end 