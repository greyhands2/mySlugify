module.exports = (name) =>{
    let splitName = this.name.split(' ');
    let slug='';
   for( var x=0; x<splitName.length; x++){
       if(splitName.indexOf(splitName[x]) < splitName.length-1) slug+=splitName[x]+"-";

       else slug+=splitName[x];
   }
   return slug;
}