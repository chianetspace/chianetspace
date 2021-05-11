import https from 'https';

export default function ({$axios}) {
	if (process.env.NODE_ENV !== 'production') {
		$axios.defaults.httpsAgent = new https.Agent({rejectUnauthorized: false});
	}
}
