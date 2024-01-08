import {auth} from 'express-oauth2-jwt-bearer'


const jwtCheck = auth({
    audience: 'https://kings_real_estate_agency/',
    issuerBaseURL: 'https://dev-qwoff0hkndmodgcr.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

export default jwtCheck