// Code your solutions in this file

function writeCards(names, holiday)
{
    const new_array = []
    for(let i = 0; i < names.length; i ++){
        new_array.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
    };
    return new_array;
};

function countDown(starting_number)
{
    let i = starting_number;
    while(i >= 0){
        console.log(i);
        i--;
    };
};