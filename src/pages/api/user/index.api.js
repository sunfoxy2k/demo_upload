export default function handler (req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json({
                userName : 'sunfoxy2k',
                userProfileUrl : "",
            })
            break;
        case 'PUT':
            console.log(req.body);
            res.status(200).json({
                'message' : 'SUCCESS'
            })
            break;
        default:
            break;
    }
}