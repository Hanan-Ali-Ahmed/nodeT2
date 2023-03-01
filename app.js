const yargs = require("yargs")
const  data10 = require("./data10")
yargs.command({
    command : "add" ,
    describe : "add student",
    builder : {
        fname : {
            describe : "student first name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : "student last name",
            demandOption : true,
            type : "string"
        },
    },
    handler  : (x)=> {
        data10.addperson(x.id ,x.fname , x.lname , x.city , x.age , x.degree);
    }
})
yargs.command({
    command : "delete" ,
    describe : "delete student",
    handler  : (x)=> {
       data10.deleted(x.id)
    }
})
// ////////  Read 
yargs.command({
    command : "read" ,
    describe : "read the information of student",
    builder  : {
        id : {
            describe : "read info",
            demandOption : true,
            type : "string"
        },
    },
        handler : (x) => {
            data10.read(x.id)
        }
        })
// //////////////// list
yargs.command({
    command : "list" ,
    describe : "list information of student",
    handler : () =>{
        data10.list()
    }
})

console.log(yargs.argv);