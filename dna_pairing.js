// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//
//     Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//
//     Return the provided character as the first element in each array.
//
//     For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
//
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    //TODO USING MAP
    // let arr = str.split('');
    // let new_arr = [];
    // arr.map(function(arg)  {
    //     switch(arg) {
    //         case 'G':
    //             new_arr.push(['G', 'C']);
    //         break;
    //         case 'C':
    //             new_arr.push(['C', 'G']);
    //         break;
    //            case 'A':
    //             new_arr.push(['A', 'T']);
    //            break;
    //            case 'T':
    //             new_arr.push(['T', 'A']);
    //             break;
    //     }
    // });
    // return new_arr;

    //TODO USING OBJECT
    let arr = str.split('');
    let new_arr = [];
    let obj = {
        'G' : 'C',
        'C' : 'G',
        'A' : 'T',
        'T' : 'A'
    };
    arr.map(function(x) {
        if (x) {
            new_arr.push([x, obj[x]]);
        }
        else { return null; }
    })
    return new_arr;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]