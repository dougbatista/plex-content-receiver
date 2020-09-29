const Request = require('./utils/Request');
const AdvertisingAnalysis = require('./utils/AdvertisingAnalysis');

exports.handler = async function (event) {
	try {

		const { content } = event;
		const obj = {
			content
		}

		const { data } = await Request.request(process.env.IMAGE_ANALYZER_API, 'POST', obj);
		const advertisings = await AdvertisingAnalysis.showContent(data);

		const response = {
			statusCode: 200,
			body: advertisings
		};

		return response;

	} catch (err) {
		const reject = {
			statusCode: 500,
			body: err
		}

		throw new Error(JSON.stringify(reject));
	}
}