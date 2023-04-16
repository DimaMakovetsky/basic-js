const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) 
{
    const toSort=[];
    if(!Array.isArray( members))
    {
        return false;
    }
    for(let i=0;i<members.length;i++)
    {
      if(typeof members[i]!="string")
      {
        continue;
      }
      let name=members[i].trim();
      toSort.push(name[0].toUpperCase());
    }
    toSort.sort();
    let result="";
    for(let i=0;i<toSort.length;i++)
    {
      result+=toSort[i];
    }
    return result;  
    
}

module.exports = {
  createDreamTeam
};
