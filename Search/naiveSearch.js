const naiveString = (target, s) => {
    let ans = 0;
    let current = 0;
    let currentTarget = 0;
    let string = '';
    while (current !== s.length) {
        if (s[current] === target[currentTarget]) {
            string += s[current];
            if (string === target) {
                ans++;
                string = '';
            }
            current++;
            currentTarget++;
        } else {
            string = '';
            current++;
            currentTarget = 0;
        }
    }
    return ans;
}

console.log(naiveString('omg', 'wowomgzomg'))