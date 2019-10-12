/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_vimeo_quiz_sequence', {
		vimeo_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		question_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		seq_no: {
			type: DataTypes.STRING(40),
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
		tableName: 'c_vimeo_quiz_sequence',
		timestamps:false

	});
};
