const users = [

    { name: 'Anna', active: true },

    { name: 'Tom', active: false },

    { name: 'Luna', active: true }

];

//  Return only users who are active

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// The answer should be - { name: 'Anna', active: true }, { name: 'Luna', active: true }