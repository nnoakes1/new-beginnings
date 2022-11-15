
const trial_status = {
    active: "Active",
    withrawn: "Withdrawn",
    finished: "Finished",
    error: "Error"
};

let users = {
    "KFG-723": {
      id: "KFG-723",
      name: "Jane Doe",
      dob: "01/01/2000",
      phoneNumber: "5555555555",
      address: "555 User Ln",
      trialStatus: trial_status.active,
    },
    "KFG-123": {
      id: "KFG-123",
      name: "Natalie Noakes",
      dob: "03/28/1997",
      phoneNumber: "3163006078",
      address: "555 Amazing Developer St",
      trialStatus: trial_status.active
    },
    "KFG-124": {
      id: "KFG-124",
      name: "John Doe",
      dob: "02/02/2001",
      phoneNumber: "5555555555",
      address: "111 User Ln",
      trialStatus: trial_status.withrawn, 
    },
    "KFG-125": {
      id: "KFG-125",
      name: "Jack Doe",
      dob: "03/03/2002",
      phoneNumber: "5555555555",
      address: "222 User Ln",
      trialStatus: trial_status.finished, 
    }
  };


export const getUsers = () => new Promise((resolve, reject) => {
    if (!users){
      return reject(new Error('Users not found'));
    }
    resolve(Object.values(users));
});

export const updateUser = (id, data) => 
  new Promise((resolve, reject) => {
    if (!users[id]) {
      reject(new Error('User not found'));
    }

    users[id] = { ...users[id], ...data };
    resolve(users[id]);

});