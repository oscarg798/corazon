/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	validate: function  (req, res) {

		answer={
			question1:req.param('question1'),
			question2:req.param('question2'),
			question3:req.param('question3'),
			question4:req.param('question4')
		}
		res.view({answer:answer});

	}
	
};

