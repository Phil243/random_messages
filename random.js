
// create the arrays
const a = ['you', 'they', 'she', 'he', 'we'];
const b = ['can dance,', 'can praise the sun,', 'can take the hobbits to isengard,', 'can call gondor for aid,'];
const c = ['if fate wills it so.', 'since it is for the best.', 'for hope never dies.', '... or just leave it be, who am i to judge.'];


// create the random factor
function rdmA() {
    min = 0;
    max = a.length;
    return Math.floor(Math.random() * (max - min)) + min;
  };

  function rdmB() {
    min = 0;
    max = b.length;
    return Math.floor(Math.random() * (max - min)) + min;
  };

  function rdmC() {
    min = 0;
    max = c.length;
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
// apply random to array a

function rdmMessage(){
    console.log(a[rdmA()], b[rdmB()], c[rdmC()])
};
rdmMessage();
