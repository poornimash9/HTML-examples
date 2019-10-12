/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('c_user', {
		id: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true
		},
		org_id: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		full_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		user_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(40),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		last_login: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_login_from: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		account_status: {
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
		tableName: 'c_user',
		timestamps:false

	});
};
