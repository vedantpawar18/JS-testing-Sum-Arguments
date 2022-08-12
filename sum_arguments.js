function sum(...args) {
    if (args.length===0)
    {
        return "No arguments provided";
    }
    else if (args.length=== 1)
    {
        return "Need one more arguments";
    }
    
        const summationValue= [...args].reduce((acc,elem)=> acc+Number(elem),0);
        return summationValue;
   
};

module.exports= sum;