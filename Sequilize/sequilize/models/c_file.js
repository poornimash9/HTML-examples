/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_file', {
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
		file_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		file_narration: {
			type: "BLOB",
			allowNull: false
		},
		file_format: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		absolute_path: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		relative_path: {
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
		tableName: 'c_file',
		timestamps:false

	});
};
