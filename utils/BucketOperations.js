const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

class BucketOperations {

	async returnObjects(prefix, gender) {
		try {

			const Keys = await getObjects(prefix, gender);
			let urls = [];

			for (const { Key } of Keys) {
				let url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${Key}`
				urls.push(url);
			};

			return urls;

		} catch (err) {
			throw err;
		}
	}
}

module.exports = new BucketOperations();

async function getObjects(prefix, gender) {

	const bucketParams = {
		Bucket: process.env.BUCKET_NAME,
		Prefix: `${prefix}_${gender}/`
	};

	return new Promise((resolve, reject) => {
		s3.listObjectsV2(bucketParams, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data.Contents)
			}
		});
	});
}