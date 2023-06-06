


const allCombinations = (word)=>{

const container = [];
container.push(word);

const eteratinos = (Math.pow(word.length,2)-word.length)-1;

for(let i = 0 ; i< eteratinos ; i++){
    
    if(i%2 === 0){
        const last_word = container[container.length - 1];
        const middle_index_right = Math.floor((last_word.length/2)+1);
        const middle_leter_right = last_word[middle_index_right-1];
        const left_part1 = last_word.slice(0,middle_index_right -1);
        const right_part1 = last_word.slice(middle_index_right,last_word.length);
        const to_the_left = `${middle_leter_right}${left_part1}${right_part1}`;
        container.push(to_the_left)

    }
    else{
        const last_word = container[container.length - 1];
        const middle_index_left = Math.ceil((last_word.length/2)); 
        const middle_leter_left = last_word[middle_index_left-1];
        const left_part2 = last_word.slice(0,middle_index_left -1);
        const right_part2 = last_word.slice(middle_index_left,last_word.length);
        const to_the_right = `${left_part2}${right_part2}${middle_leter_left}`;
        container.push(to_the_right)
    };
};

console.log(container);


};

allCombinations("ABC");


