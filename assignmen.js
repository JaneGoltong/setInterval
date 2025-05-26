// 1. Simulate a user registration process in three steps: register → send email → grant access. Each should depend on the previous step.

function registerUser(userName){
   return new Promise((resolve, reject) => {
    if(!userName){
        reject('username cannot be empty')
    }else{
        setTimeout(() => {
            let registerMessage=`${userName} registration successful`
            console.log(registerMessage);
            resolve(userName)
        }, 2000);
    }
   })
}

function sendEmail(userName){
    return new Promise((resolve, reject) => {
        if(!userName){
            reject('email sent fail')
        }else{
            setTimeout(() => {
                let emailMessage=`email sent successful to this user ${userName}`
                console.log(emailMessage);
                resolve(userName)
            }, 2000);
        }
    })
}

function grantAccess(userName){
    return new Promise((resolve, reject) => {
        if(!userName){
            reject('access not found');
        }else{
            setTimeout(() => {
                let grantAccessMessage=`acces grant to this user ${userName}`
                console.log(grantAccessMessage)
                resolve(userName)
            }, 2000);
        }
    })
}

registerUser("Nanbam").then((userName)=> sendEmail(userName)).then((userName)=> grantAccess(userName)).then((message)=> console.log(message)).catch((error)=> console.log(error))