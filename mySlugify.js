module.exports = (name) =>{
    let[splitName, slug]  = [name.split(' '), ''];
   
   for( var x=0; x<splitName.length; x++){
       if(splitName.indexOf(splitName[x]) < splitName.length-1) slug+=splitName[x]+"-";

       else slug+=splitName[x];
   }
   return slug;
}
