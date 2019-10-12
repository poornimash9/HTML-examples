/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_quiz_questions', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		topic_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_topic',
				key: 'id'
			}
		},
		vimeo_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_vimeo',
				key: 'id'
			}
		},
		sequence_number: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_vimeo_quiz_sequence',
				key: 'vimeo_id'
			}
		},
		question_title: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		question_narration: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		isDeleted: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		created_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		creation_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_modified_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		last_modified_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		deleted_by: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		deleted_time: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'c_quiz_questions',
		timestamps:false

	});
};
