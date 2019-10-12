/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_course', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		org_id: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		course_title: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		course_narration: {
			type: "BLOB",
			allowNull: false
		},
		learning_format: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		course_status: {
			type: DataTypes.INTEGER(4),
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
		tableName: 'c_course',
		timestamps:false
	});
};
