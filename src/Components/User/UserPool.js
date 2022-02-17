import { CognitoUserPool } from 'amazon-cognito-identity-js';
// aws cognito configs
const poolData = {
    UserPoolId: 'us-east-1_RH3BoVdD0',
    ClientId: '1f8b0nb67vkbuhclen5b1cscck'
};

export default new CognitoUserPool(poolData);