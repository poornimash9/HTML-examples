var Sequelize=require('sequelize')
var course;
var sequelize;

var connCreate=function(tableName){
    sequelize=new Sequelize('carmelCourse','root','root',{
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    })
    sequelize.authenticate().then(()=>{
        console.log("connection established successfully")
    })
    .catch(err=>{
        console.log("error in connection",err)
    })
    course=sequelize.import('./models/'+tableName+".js")
}


module.exports={

    insert:function(tableName,data){
        connCreate(tableName)
        console.log("data",data)
        course.findOrCreate({where: [data,{"isDeleted":0}]}).spread((courses, created) => {
            console.log(courses.get({plain: true}))
            console.log("created")
        })
    },

    update:function(tableName,value,condition){
        connCreate(tableName)
        console.log("values are ",value,"condition is",condition)
        course.findOne({where:[condition,{"isDeleted":0}]}).then(function(user,err) {
            if(err)
            {
                console.log("Error",err)
            }else{
                console.log(user.get('id'));
                course.update(value,{where:{id:user.get('id')}}).then(function(data,err){
                    if(err)throw err
                    console.log("updated")
                })
            }
        });          
    },

    delete:function(tableName,data){
        connCreate(tableName)
        console.log("data",data)
        course.findOne({where:[data,{"isDeleted":0}]}).then(function(user,err) {
            if(err)
            {
                console.log("Error",err)
            }else{
                console.log(user.get('id'));
                course.update(isDeleted,{where:{id:user.get('id')}}).then(function(data,err){
                    if(err)throw err
                    console.log("deleted")
                })
            }
        });
        
        
    },
    remove:function(tableName,data){
        connCreate(tableName)
        course.findOne({where:[data,{"isDeleted":1}]}).then(function(user,err) {
            if(err)
            {
                console.log("Error",err)
            }else{
                console.log(user.get('id'));
                course.destroy({where:{id:user.get('id')}}).then(function(data,err){
                    if(err)throw err
                    console.log("deleted")
                })
            }
        });
    },

    getAll:function(tableName){
        connCreate(tableName)
        course.findAll({where:{"isDeleted":0}}).then(function(err,courses){
            if(err){
                console.log("Error")
            }
            else{
                console.log("list of courses are ",courses)
            }
        })
    },

    getByProperty:function(tableName,data){
        connCreate(tableName)
        course.findAll({where:[data,{"isDeleted":0}]}).then(courses=>{
            if(courses.length>1){
                console.log("More than one courses",courses)
            }else{
                console.log("Only one course",courses)
            }
            
        })
    },
}


// course.update({isDeleted:1},{where:{id:data.info}})
        // console.log("deleted")
                // course.destroy({where:{id:data.id}})
        // console.log("removed")