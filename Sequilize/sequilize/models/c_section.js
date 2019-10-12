/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_section', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		course_id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			references: {
				model: 'c_course',
				key: 'id'
			}
		},
		section_title: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		section_narration: {
			type: "BLOB",
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
		tableName: 'c_section',
		timestamps:false

	});
};
