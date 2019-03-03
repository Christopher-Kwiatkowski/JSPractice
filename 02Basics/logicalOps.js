// && - AND operator - Both sides need to be true
// || - OR operator - One side needs to be true


let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting message to user')
    console.log('Grant access to paid course')
} else if (isVerified || isGuest){
    console.log('Allow free previews')
} else {
    console.log('Message: please contact admin')
}