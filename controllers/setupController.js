var Todos = require('../models/todoModel.js');

module.exports=function(app){

    app.get('/api/setupTodos',function(req,res){
        //seed database
        var starterTools =[
            {
                username : 'test01',
                todo : 'milk',
                isDone : false,
                hasAttachment: false
            },
            {
                username : 'test02',
                todo : 'boost',
                isDone : false,
                hasAttachment: false
            },
            {
                username : 'test03',
                todo : 'sugar',
                isDone : false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTools,function(err,results){
            res.send(results);
        })
    })

}