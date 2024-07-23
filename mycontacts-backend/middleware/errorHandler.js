import notvariable from "../constants.js"

const errorHandler = (err , req ,res , next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
 switch (statusCode) {
    case notvariable.VALIDATION_ERROR:
        res.json({title: "Validation error" , message : err.message , stackTrace: err.stack});
            
    case notvariable.UNAUTHORIZED:
        res.json({title: "Unauthorized error" , message : err.message , stackTrace: err.stack});
        
    case notvariable.FORBIDDEN:
        res.json({title: "Forbidden error" , message : err.message , stackTrace: err.stack});    
       
    case notvariable.NOT_FOUND:
        res.json({title: "Unauthorized error" , message : err.message , stackTrace: err.stack});
            
    case notvariable.SERVER_ERROR:
        res.json({title: "Server error" , message : err.message , stackTrace: err.stack});
          
    default:
        console.log("No error , All good!");
        break;
 }
  
}
export default errorHandler;

